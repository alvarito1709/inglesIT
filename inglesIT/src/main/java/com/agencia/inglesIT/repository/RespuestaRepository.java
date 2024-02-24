package com.agencia.inglesIT.repository;


import com.agencia.inglesIT.entities.Respuesta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RespuestaRepository extends JpaRepository <Respuesta, String> {
    List<Respuesta> findRespuestaByNivel(Integer nivel);


}
