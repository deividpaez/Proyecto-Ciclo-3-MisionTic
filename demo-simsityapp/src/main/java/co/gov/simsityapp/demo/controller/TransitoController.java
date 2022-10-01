package co.gov.simsityapp.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
     public Md_Transito CtPostTransito(@RequestBody Md_Transito md_Transito){
    var resultado = Procesar_Cedula(md_Transito.getCedula());

    var response = new Md_Transito();
    response.setCedula(resultado);
        
      return response;
         
     }

     private String Procesar_Cedula(String cedula){
      var resultado =  "Se ha Procesado su cedula Con el Numero: " + cedula;
    return resultado;
     }
}
 