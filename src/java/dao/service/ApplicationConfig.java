/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao.service;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author riont
 */
@javax.ws.rs.ApplicationPath("recursos")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(dao.service.AlquilerFacadeREST.class);
        resources.add(dao.service.ClienteFacadeREST.class);
        resources.add(dao.service.EmpleadoFacadeREST.class);
        resources.add(dao.service.EquipoFacadeREST.class);
        resources.add(dao.service.HabitacionFacadeREST.class);
        resources.add(dao.service.HotelFacadeREST.class);
        resources.add(dao.service.MobiliarioFacadeREST.class);
    }
    
}
