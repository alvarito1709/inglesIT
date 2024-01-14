package com.agencia.inglesIT.controller;


import com.agencia.inglesIT.entities.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/board")
public class boardController {
   @GetMapping("")
    public String board( Model model, HttpSession session){

       // User usuario = (User) session.getAttribute("usuariosession");

       //if (usuario!=null) {

         //  model.addAttribute("usuario",usuario);
       //}

       return "board";
    }
}
