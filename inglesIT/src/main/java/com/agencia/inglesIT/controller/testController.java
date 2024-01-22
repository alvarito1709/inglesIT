package com.agencia.inglesIT.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/test")
public class testController {

    @GetMapping("/level1")
    String level1(){
        return "testDisplay";
    }

    @PostMapping("/level")
    ModelAndView level( Model model,
            @RequestParam(value = "prueba") String prueba
    ){
        model.addAttribute("prueba", prueba);

    return new ModelAndView("testDisplay :: test");
    }

    @GetMapping("/init")
    public void counterInit(){

    }
}
