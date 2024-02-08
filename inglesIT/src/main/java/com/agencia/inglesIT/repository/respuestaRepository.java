package com.agencia.inglesIT.repository;


import com.agencia.inglesIT.entities.Respuesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface respuestaRepository  extends JpaRepository <Respuesta, String> {
}
