package com.sorune.gttapiserver.chat.repository;

import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class ChatRoomRepository {
    private Map<String, ChatRoomDTO> chatRoomDTOMap;

    @PostConstruct
    private void init() {
        chatRoomDTOMap = new LinkedHashMap<>();
    }

    public List<ChatRoomDTO> findAllRooms() {
        List<ChatRoomDTO> chatRooms = new ArrayList<>(chatRoomDTOMap.values());
        Collections.reverse(chatRooms);
        return chatRooms;
    }

    public ChatRoomDTO findRoomById(String id) {
        return chatRoomDTOMap.get(id);
    }

    public ChatRoomDTO createRoom(String name,String manager) {
        ChatRoomDTO chatRoomDTO = ChatRoomDTO.create(name,manager);
        chatRoomDTOMap.put(chatRoomDTO.getRoomId(), chatRoomDTO);
        return chatRoomDTO;
    }
}
