package com.sorune.gttapiserver.board.controller;

import com.sorune.gttapiserver.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/board/")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
}
