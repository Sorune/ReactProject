package com.sorune.gttapiserver.chat.DTO;

import lombok.*;
import org.springframework.stereotype.Service;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessageDTO {

    public enum MessageType{
        ENTER,TALK
    }

    private MessageType messageType;
    private String message;
    private Long chatRoomId;
    private Long senderId;
}
