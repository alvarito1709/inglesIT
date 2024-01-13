package com.agencia.inglesIT.controller;


import com.agencia.inglesIT.entities.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;


@Controller
@RequestMapping("/")
public class publicController {

    @GetMapping("")
    String index(HttpSession http, Model model){
        User usuario = (User) http.getAttribute("usuariosession");
        if (usuario!=null) {

            model.addAttribute("user",usuario);
        }

        return "plantilla";
    }


}
