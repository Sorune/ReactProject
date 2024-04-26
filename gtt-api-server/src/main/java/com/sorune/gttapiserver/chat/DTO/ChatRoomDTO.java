package com.sorune.gttapiserver.chat.DTO;

import lombok.Builder;
import lombok.Getter;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashSet;
import java.util.Set;

@Getter
public class ChatRoomDTO {
    private Long roomId;
    private String roomName;
    private Set<WebSocketSession> sessions = new HashSet<>();

    @Builder
    public ChatRoomDTO(Long roomId,String name){
        this.roomId = roomId;
        this.roomName = name;
    }

    public void handleActions(WebSocketSession session, ChatMessageDTO chatMessageDTO){

    }
}
