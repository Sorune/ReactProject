package com.sorune.gttapiserver.chat.DTO;

import lombok.Getter;
import lombok.Setter;
import java.util.UUID;

@Getter
@Setter
public class ChatRoomDTO {
    private String roomId;
    private String roomName;

    public static ChatRoomDTO create(String name){
        ChatRoomDTO chatRoomDTO = new ChatRoomDTO();
        chatRoomDTO.roomId = UUID.randomUUID().toString();
        chatRoomDTO.roomName = name;
        return chatRoomDTO;
    }
}
