package com.sorune.gttapiserver.chat.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Getter
@Setter
@ToString
public class ChatRoomDTO {
    private String roomId;
    private String roomName;
    private String roomManager;

    public static ChatRoomDTO create(String name,String manager){
        ChatRoomDTO chatRoomDTO = new ChatRoomDTO();
        chatRoomDTO.roomId = UUID.randomUUID().toString();
        chatRoomDTO.roomName = name;
        chatRoomDTO.roomManager = manager;
        return chatRoomDTO;
    }
}
