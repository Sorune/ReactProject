package com.sorune.gttapiserver.chat.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sorune.gttapiserver.chat.DTO.ChatMessageDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Log4j2
@Component
@RequiredArgsConstructor
public class WebSocketChatHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper;

    private final Set<WebSocketSession> sessions = new HashSet<>();

    private final Map<Long,Set<WebSocketSession>> chatRoomSessionMap = new HashMap<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        log.info("{} 연결됨", session.getId());
        sessions.add(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        log.info("payload {}",payload);

        ChatMessageDTO chatMessageDTO = objectMapper.readValue(payload, ChatMessageDTO.class);
        log.info("chatMessageDTO {}", chatMessageDTO);

        Long chatRoomId = chatMessageDTO.getChatRoomId();

        if (!chatRoomSessionMap.containsKey(chatRoomId)) {
            chatRoomSessionMap.put(chatRoomId, new HashSet<>());
        }
        Set<WebSocketSession> sessionSet = chatRoomSessionMap.get(chatRoomId);

        if(chatMessageDTO.getMessageType().equals(ChatMessageDTO.MessageType.ENTER)){
            sessionSet.add(session);
        }
        if(sessionSet.size()>=3){
            removeClosedSession(sessionSet);
        }
        sendMessageToChatRoom(chatMessageDTO,sessionSet);
    }

    // ====== 채팅 관련 메소드 ======
    private void removeClosedSession(Set<WebSocketSession> chatRoomSession) {
        chatRoomSession.removeIf(sess -> !sessions.contains(sess));
    }

    private void sendMessageToChatRoom(ChatMessageDTO chatMessageDto, Set<WebSocketSession> chatRoomSession) {
        chatRoomSession.parallelStream().forEach(sess -> sendMessage(sess, chatMessageDto));//2
    }


    public <T> void sendMessage(WebSocketSession session, T message) {
        try{
            session.sendMessage(new TextMessage(objectMapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }
}
