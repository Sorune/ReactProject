package com.sorune.gttapiserver.chat.controller;

import com.sorune.gttapiserver.chat.DTO.ChatMessageDTO;
import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ChatController {

    private final SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/api/chat/message")
    public void message(ChatMessageDTO chatMessageDTO) {
        if(ChatMessageDTO.MessageType.JOIN.equals(chatMessageDTO.getMessageType()))
            chatMessageDTO.setMessage(chatMessageDTO.getSenderId()+"님이 입장하셨습니다.");
        messagingTemplate.convertAndSend("/sub/api/chat/message"+chatMessageDTO.getChatRoomId(), chatMessageDTO);
    }
}
