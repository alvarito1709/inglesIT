package com.agencia.inglesIT.repository;

import com.agencia.inglesIT.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository  extends JpaRepository <User,String> {
}
