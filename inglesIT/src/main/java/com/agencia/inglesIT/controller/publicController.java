package com.agencia.inglesIT.controller;


import com.agencia.inglesIT.entities.User;
import com.agencia.inglesIT.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;


@Controller
@RequestMapping("/")
public class publicController {

    @Autowired
    userRepository repository;

    @GetMapping("")
    String index(HttpSession http, Model model){

        User user = (User) http.getAttribute("usuariosession");

        System.out.println(user);
        if (user != null) {
            model.addAttribute("usuario", user);
        }
        //if (user != null){
          //var username = user.getUsername();
         //User usuario = repository.findByUsername(username);
          //model.addAttribute("usuario", usuario );
        //}

        return "plantilla";
    }



}
