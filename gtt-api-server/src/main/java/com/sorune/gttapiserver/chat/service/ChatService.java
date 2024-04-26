package com.sorune.gttapiserver.chat.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sorune.gttapiserver.chat.DTO.ChatMessageDTO;
import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.*;

@Log4j2
@RequiredArgsConstructor
@Service
public class ChatService {

    private final ObjectMapper objectMapper;
    private Map<String, ChatRoomDTO> chatRooms = new HashMap<>();

    @PostConstruct
    private void init(){
        chatRooms = new LinkedHashMap<>();
    }

    public List<ChatRoomDTO> getChatRooms(){
        return new ArrayList<>(chatRooms.values());
    }
    public ChatRoomDTO getChatRoom(String roomName){return chatRooms.get(roomName);}
    public ChatRoomDTO findRoomById(String roomId){return chatRooms.get(roomId);}
    public ChatRoomDTO createChatRoom(String roomName){
        String randomId = UUID.randomUUID().toString();
        ChatRoomDTO chatRoomDTO = ChatRoomDTO.builder()
                .roomId(randomId)
                .name(roomName)
                .build();
        chatRooms.put(randomId, chatRoomDTO);
        return chatRoomDTO;
    }

    public <T> void sendMessage(WebSocketSession session, T message){
        try {
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(),e);
        }
    }
}
