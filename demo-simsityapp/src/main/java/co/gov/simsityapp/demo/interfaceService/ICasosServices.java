package co.gov.simsityapp.demo.interfaceService;

import java.util.List;
import java.util.Optional;

import co.gov.simsityapp.demo.modelo.Cases;
public interface ICasosServices {
    public List<Cases>listar();
    public Optional<Cases>listarId(int id);
    public int save(Cases p);
    public void delete(int id);
    
}
