package com.sorune.gttapiserver.comment.controller;

import com.sorune.gttapiserver.comment.DTO.CommentDTO;
import com.sorune.gttapiserver.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/comment")
@Log4j2
@RequiredArgsConstructor
public class CommentController {

    private final CommentService service;

    @PostMapping("/")
    public Map<String , Long> register(@RequestBody CommentDTO commentDTO){
        log.info("comment : "+commentDTO);

        Long comNo = service.register(commentDTO);

        return Map.of("comNo", comNo);
    }

    @PutMapping("/{comNo}")
    public Map<String ,String >modify(@PathVariable(name = "comNo") Long comNo,
                                      @RequestBody CommentDTO commentDTO){
        log.info(commentDTO);
        commentDTO.setComNo(comNo);

        service.modify(commentDTO);

        return Map.of("RESULT", "SUCCESS");
    }

    @DeleteMapping("{comNo}")
    public Map<String ,String > remove(@PathVariable(name = "comNo") Long comNo){

        service.remove(comNo);

        return Map.of("RESULT", "SUCCESS");
    }


}
