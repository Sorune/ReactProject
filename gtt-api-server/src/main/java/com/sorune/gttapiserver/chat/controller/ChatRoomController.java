package com.sorune.gttapiserver.chat.controller;

import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import com.sorune.gttapiserver.chat.repository.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chat")
public class ChatRoomController {

    private final ChatRoomRepository chatRoomRepository;

    @GetMapping("/rooms")
    public Map<String,List> room(){
        List<ChatRoomDTO> chatRoomDTOList = chatRoomRepository.findAllRooms();
        return Map.of("rooms", chatRoomDTOList);
    }

    @PostMapping("/room")
    public Map<String,ChatRoomDTO> createRoom(@RequestParam String name){
        ChatRoomDTO chatRoomDTO = chatRoomRepository.createRoom(name);
        return Map.of("room", chatRoomDTO);
    }

    @GetMapping("/room/enter/{roomId}")
    public Map<String,ChatRoomDTO> enterRoom(@PathVariable String roomId){
        ChatRoomDTO chatRoomDTO =  chatRoomRepository.findRoomById(roomId);
        return Map.of("room", chatRoomDTO);
    }
}
