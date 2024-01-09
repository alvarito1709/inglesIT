package com.agencia.inglesIT.entities;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.List;

@Entity
@Data
public class User implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nombre;
    private String apellido;
    private String documento;
    @NotNull
    private String email;
    @NotNull
    private String password;
    private String telefono;
    @OneToMany
    @JoinColumn(name = "id")
    private List<Rol> roles;


}
