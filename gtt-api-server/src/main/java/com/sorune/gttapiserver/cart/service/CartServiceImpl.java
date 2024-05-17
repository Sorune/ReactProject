package com.sorune.gttapiserver.cart.service;

import com.sorune.gttapiserver.cart.DTO.CartDTO;
import com.sorune.gttapiserver.cart.entity.Cart;
import com.sorune.gttapiserver.cart.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Log4j2
public class CartServiceImpl implements CartService{
    private final CartRepository cartRepository;
    private final ModelMapper modelMapper;

    @Override
    public CartDTO findById(Long id) {
        return modelMapper.map(cartRepository.findById(id),CartDTO.class);
    }

    @Override
    public List<CartDTO> findAll() {
        return cartRepository.findAll().stream().map(cart -> modelMapper.map(cart,CartDTO.class)).toList();
    }

    @Override
    public Long save(CartDTO cartDTO) {
        return cartRepository.save(modelMapper.map(cartDTO, Cart.class)).getCno();

    }
}
