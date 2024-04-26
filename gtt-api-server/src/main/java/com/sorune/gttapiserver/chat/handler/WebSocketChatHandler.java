package com.sorune.gttapiserver.chat.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sorune.gttapiserver.chat.DTO.ChatMessageDTO;
import com.sorune.gttapiserver.chat.DTO.ChatRoomDTO;
import com.sorune.gttapiserver.chat.service.ChatService;
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
    private final ChatService chatService;
    private final Set<WebSocketSession> sessions = new HashSet<>();
    private final Map<String,Set<WebSocketSession>> chatRoomSessionMap = new HashMap<>();

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
        ChatRoomDTO room = chatService.findRoomById(chatMessageDTO.getChatRoomId());
        room.handleActions(session,chatMessageDTO,chatService);
    }
}
