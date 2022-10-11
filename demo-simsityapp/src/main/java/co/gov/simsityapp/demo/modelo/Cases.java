package co.gov.simsityapp.demo.modelo;
import javax.persistence.*;
import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "casos")
public class Cases {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private int codigo;
    private String nombre;
    

    public Cases(){

    }

    public Cases(int id, int codigo, String nombre){

        super();
        this.codigo = codigo;
        this.id = id;
        this.nombre = nombre;
    }

    public int getCodigo() {
        return codigo;
    }
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

}
