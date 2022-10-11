package co.gov.simsityapp.demo.interfaces;

import org.springframework.data.repository.CrudRepository;
import co.gov.simsityapp.demo.modelo.Cases;
public interface InterfaceCasos extends CrudRepository<Cases, Integer>{
    
}
