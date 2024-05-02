package com.sorune.gttapiserver.playerComment.service;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.playerComment.DTO.PlayerCommentDTO;

public interface PlayerCommentService {

    Long addPlayerComment(PlayerCommentDTO dto);

    void updatePlayerComment(PlayerCommentDTO dto);

    void deletePlayerComment(Long playerComNo);

    PlayerCommentDTO getPlayerComment(Long playerComNo);

    PageResponseDTO<PlayerCommentDTO> getPlayerCommentList(PageRequestDTO pageRequestDTO, Long pno);
}
