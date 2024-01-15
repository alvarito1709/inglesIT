package com.agencia.inglesIT.controller;


import com.agencia.inglesIT.Dao.UserDao;
import com.agencia.inglesIT.Service.UserService;
import com.agencia.inglesIT.entities.User;
import com.agencia.inglesIT.repository.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/board")
public class boardController {

    @Autowired
    userRepository repository;

   @GetMapping("")
    public String board(Model model){

       Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
       UserDetails userDetails = null ;
       if (principal instanceof UserDetails) {
           userDetails = (UserDetails) principal;
       }
       assert userDetails != null;
       @SuppressWarnings("null")
       String userName = userDetails.getUsername();

       User usuario = repository.findByUsername(userName);

       model.addAttribute("usuario", usuario);

        System.out.println(userName);
        System.out.println(usuario.toString());
       return "board";
    }


}
