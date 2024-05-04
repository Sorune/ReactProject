package com.sorune.gttapiserver.chat.entity;

import com.sorune.gttapiserver.member.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@ToString(exclude = "room")
public class ChatMessage extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="room_id")
    private ChatRoom room;

    private String sender;

    private String senderEmail;

    @Column
    private String message;

    private MessageType messageType;

    @Builder
    public ChatMessage(ChatRoom room, String sender, String senderEmail, String message) {
        this.room = room;
        this.sender = sender;
        this.senderEmail = senderEmail;
        this.message = message;
    }

    public static ChatMessage create(ChatRoom room, String sender, String senderEmail, String message) {
        return ChatMessage.builder()
                .room(room)
                .sender(sender)
                .senderEmail(senderEmail)
                .message(message).build();
    }
}
