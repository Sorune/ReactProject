package com.sorune.gttapiserver.cart.repository;

import com.sorune.gttapiserver.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository <Cart,Long>{

}
