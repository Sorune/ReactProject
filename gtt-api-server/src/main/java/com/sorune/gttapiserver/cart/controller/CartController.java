package com.sorune.gttapiserver.cart.controller;

import com.sorune.gttapiserver.cart.DTO.CartDTO;
import com.sorune.gttapiserver.cart.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/cart")
@PreAuthorize("hasAnyRole('ROLE_USER','ROLE_MANAGER','ROLE_ADMIN')")
public class CartController {

    private final CartService cartService;

    @GetMapping("/")
    public List<CartDTO> getAll(){
        return cartService.findAll();
    }

    @GetMapping("/{cno}")
    public CartDTO get(@PathVariable("cno") Long cno){
        return cartService.findById(cno);
    }

    @PostMapping("/")
    public Map<String,String> save(@RequestBody CartDTO cartDTO){
        cartService.save(cartDTO);
        return Map.of("result","SUCCESS");
    }


}
