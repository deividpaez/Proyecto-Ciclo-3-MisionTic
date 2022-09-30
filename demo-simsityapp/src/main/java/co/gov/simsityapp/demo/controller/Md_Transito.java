package co.gov.simsityapp.demo.controller;

public class Md_Transito {
    private String cedula;
   public Md_Transito(){

  }
    public Md_Transito(String cedula) {
        this.cedula = cedula;
     
    }
    public String getCedula() {
        return cedula;
    }
    public void setCedula(String cedula) {
        this.cedula = cedula;
    }
}
