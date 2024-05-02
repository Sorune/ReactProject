package com.sorune.gttapiserver.chat.controller;

import com.sorune.gttapiserver.chat.DTO.ChatMessageDTO;
import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import com.sorune.gttapiserver.chat.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@RestController
@RequestMapping("/22hat")
public class ChatRoomController {

    private final ChatRoomRepository chatRoomRepository;

    private final SimpMessageSendingOperations simpMessageSendingOperations;

    @MessageMapping("/message")
    @SendTo("/sub/api/chat/{roomId}")
    public void message(ChatMessageDTO chatMessageDTO) {
        if(ChatMessageDTO.MessageType.JOIN.equals(chatMessageDTO.getMessageType()))
            chatMessageDTO.setMessage(chatMessageDTO.getSenderId()+"님이 입장하셨습니다.");
        log.info(chatMessageDTO);
        simpMessageSendingOperations.convertAndSend("/sub/api/chat/message"+chatMessageDTO.getChatRoomId(), chatMessageDTO);
    }

    @GetMapping("/rooms")
    public Map<String,List> room(){
        List<ChatRoomDTO> chatRoomDTOList = chatRoomRepository.findAllRooms();
        log.info(chatRoomDTOList);
        return Map.of("rooms", chatRoomDTOList);
    }

    @PostMapping("/room")
    public Map<String,ChatRoomDTO> createRoom(@RequestBody String name,@RequestBody String manager){
        ChatRoomDTO chatRoomDTO = chatRoomRepository.createRoom(name,manager);
        log.info(chatRoomDTO);
        return Map.of("room", chatRoomDTO);
    }

    @PostMapping("/room/enter/{roomId}")
    public Map<String,ChatRoomDTO> enterRoom(@PathVariable String roomId){
        ChatRoomDTO chatRoomDTO =  chatRoomRepository.findRoomById(roomId);
        log.info(chatRoomDTO);

        ChatMessageDTO chatMessageDTO = ChatMessageDTO.builder()
                .messageType(ChatMessageDTO.MessageType.JOIN)
                .message("입장을 환영합니다.")
                .chatRoomId(roomId)
                .build();

        simpMessageSendingOperations.convertAndSend("/sub/api/chat/message"+roomId, chatMessageDTO);
        return Map.of("room", chatRoomDTO);
    }
}
