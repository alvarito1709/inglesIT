package com.agencia.inglesIT.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class boardController {
   @GetMapping("")
    public String board(){
        return "board";
    }
}
