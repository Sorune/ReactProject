package com.sorune.gttapiserver.chat.controller;

import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import com.sorune.gttapiserver.chat.service.ChatRoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/chat/")
public class ChatRoomController {

    private final ChatRoomService chatRoomService;

    @GetMapping("rooms")
    public Map<String, List<ChatRoomDTO>> getRooms(){
        return Map.of("rooms",chatRoomService.findAll());
    }
}
