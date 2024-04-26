package com.sorune.gttapiserver.chat.DTO;

import com.sorune.gttapiserver.chat.service.ChatService;
import lombok.Builder;
import lombok.Getter;
import org.springframework.web.socket.WebSocketSession;

import java.util.HashSet;
import java.util.Set;

@Getter
public class ChatRoomDTO {
    private String roomId;
    private String roomName;
    private Set<WebSocketSession> sessions = new HashSet<>();

    @Builder
    public ChatRoomDTO(String roomId,String name){
        this.roomId = roomId;
        this.roomName = name;
    }

    public void handleActions(WebSocketSession session, ChatMessageDTO chatMessageDTO, ChatService chatService){
        if (chatMessageDTO.getMessageType().equals(ChatMessageDTO.MessageType.ENTER)){
            sessions.add(session);
            chatMessageDTO.setMessage(chatMessageDTO.getSenderId()+"님이 입장하셨습니다.");
        }
        sendMessage(chatMessageDTO,chatService);
    }

    private <T> void sendMessage(T message, ChatService chatService) {
        sessions.parallelStream().forEach(session -> chatService.sendMessage(session, message));
    }
}
