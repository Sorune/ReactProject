package com.sorune.gttapiserver.playerComment.controller;

import com.sorune.gttapiserver.common.DTO.PageRequestDTO;
import com.sorune.gttapiserver.common.DTO.PageResponseDTO;
import com.sorune.gttapiserver.playerComment.DTO.PlayerCommentDTO;
import com.sorune.gttapiserver.playerComment.service.PlayerCommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/playercomment")
public class PlayerCommentController {

    private final PlayerCommentService playerCommentService;

    @GetMapping("/{playerComNo}")
    public PlayerCommentDTO getOneComment(@PathVariable("playerComNo") Long playerComNo) {
        return playerCommentService.getPlayerComment(playerComNo);
    }

//    @GetMapping("/list/{pno}")
//    public PageResponseDTO<PlayerCommentDTO> getCommentList(PageRequestDTO pageRequestDTO, @PathVariable("pno") Long pno){
//        pageRequestDTO.setPage(1); // 페이징 처리 관련 문제로 막아놓음
//        return playerCommentService.getPlayerCommentList(pageRequestDTO, pno);
//    }
    @GetMapping("/list/{pno}")
    public List<PlayerCommentDTO> getCommentList(@PathVariable("pno") Long pno){
        return playerCommentService.getPlayerCommentList2(pno);
    }

    @PostMapping("/")
    public Long addComment(@RequestBody PlayerCommentDTO playerCommentDTO) {
        return playerCommentService.addPlayerComment(playerCommentDTO);
    }

    @PutMapping("/{playerComNo}")
    public Map<String, String> ModifyComment(@PathVariable("playerComNo") Long playerComNo, @RequestBody PlayerCommentDTO dto){
        dto.setPlayerComNo(playerComNo);
        playerCommentService.updatePlayerComment(dto);

        return Map.of("result", "success");
    }

    @DeleteMapping("/{playerComNo}")
    public Map<String, String> DeleteComment(@PathVariable("playerComNo") Long playerComNo) {
        playerCommentService.deletePlayerComment(playerComNo);

        return Map.of("result", "success");
    }
}
