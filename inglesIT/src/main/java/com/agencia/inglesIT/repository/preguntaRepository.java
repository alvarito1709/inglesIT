package com.agencia.inglesIT.repository;


import com.agencia.inglesIT.entities.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface preguntaRepository extends JpaRepository <Pregunta, String > {

   List <Pregunta> findByApartadoId(Long apartado);

   List <Pregunta> findByNivel(Integer nivel);

   @Query(value = "SELECT r " + "FROM Pregunta r " +
           "WHERE r.nivel  =" + " :nivel " + "AND r.apartado.id = " + ":id")
   List<Pregunta> findPreguntaByApartadoYNivel(Integer nivel, Long id);
}
