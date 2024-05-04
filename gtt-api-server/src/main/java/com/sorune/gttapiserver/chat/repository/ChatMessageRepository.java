package com.sorune.gttapiserver.chat.repository;

import com.sorune.gttapiserver.chat.entity.ChatMessage;
import com.sorune.gttapiserver.chat.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {
    List<ChatMessage> findAllByChatRoom(ChatRoom chatRoom);
    List<ChatMessage> findAllByMessageContaining(String message);
}
