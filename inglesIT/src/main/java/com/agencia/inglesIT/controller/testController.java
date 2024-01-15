package com.agencia.inglesIT.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class testController {

    @GetMapping("/level1")
    String level1(){
        return "test1";
    }

    @GetMapping("/init")
    public void counterInit(){

    }
}
