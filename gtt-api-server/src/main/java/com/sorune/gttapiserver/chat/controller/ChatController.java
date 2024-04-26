package com.sorune.gttapiserver.chat.controller;

import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import com.sorune.gttapiserver.chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat")
public class ChatController {

    private final ChatService chatService;

    @GetMapping
    public List<ChatRoomDTO> findAllRoom(){
        return chatService.getChatRooms();
    }

    @PostMapping
    public ChatRoomDTO createRoom(@RequestParam String name){
        return chatService.createChatRoom(name);
    }
}
