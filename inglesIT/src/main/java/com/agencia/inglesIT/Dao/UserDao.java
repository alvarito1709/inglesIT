package com.agencia.inglesIT.Dao;

import com.agencia.inglesIT.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long> {

    User findByUsername(String username);
}
