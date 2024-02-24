package com.agencia.inglesIT.Service;

import com.agencia.inglesIT.entities.Respuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.agencia.inglesIT.repository.RespuestaRepository;

import javax.transaction.Transactional;

@Service
@Transactional
public class RespuestaService {

    private final RespuestaRepository respuestaRepository;
    @Autowired
    public RespuestaService(RespuestaRepository respuestaRepository) {
        this.respuestaRepository = respuestaRepository;
    }

    public Respuesta crearRespuesta(Respuesta respuesta){return respuestaRepository.save(respuesta);}

}
