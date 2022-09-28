package co.gov.simsityapp.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/transito")
public class TransitoController {
    
    @GetMapping
     public String CtTransito(){
        return "Hola Por metodo Get";
     }
     @PostMapping
     public String CtPostTransito(){
        return "Hola Por metodo Post";
     }
}
 