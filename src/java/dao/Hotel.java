/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author yuletzys
 */
@Entity
@Table(name = "hotel")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Hotel.findAll", query = "SELECT h FROM Hotel h")
    , @NamedQuery(name = "Hotel.findByIdSucursal", query = "SELECT h FROM Hotel h WHERE h.idSucursal = :idSucursal")
    , @NamedQuery(name = "Hotel.findBySede", query = "SELECT h FROM Hotel h WHERE h.sede = :sede")
    , @NamedQuery(name = "Hotel.findByTelefonoHotel", query = "SELECT h FROM Hotel h WHERE h.telefonoHotel = :telefonoHotel")
    , @NamedQuery(name = "Hotel.findByDireccionHotel", query = "SELECT h FROM Hotel h WHERE h.direccionHotel = :direccionHotel")
    , @NamedQuery(name = "Hotel.findByCantidadHabitaciones", query = "SELECT h FROM Hotel h WHERE h.cantidadHabitaciones = :cantidadHabitaciones")})
public class Hotel implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2147483647)
    @Column(name = "id_sucursal")
    private String idSucursal;
    @Size(max = 2147483647)
    @Column(name = "sede")
    private String sede;
    @Size(max = 2147483647)
    @Column(name = "telefono_hotel")
    private String telefonoHotel;
    @Size(max = 2147483647)
    @Column(name = "direccion_hotel")
    private String direccionHotel;
    @Column(name = "cantidad_habitaciones")
    private Integer cantidadHabitaciones;
    @OneToMany(mappedBy = "idSucursal")
    private Collection<Empleado> empleadoCollection;
    @OneToMany(mappedBy = "idSucursal")
    private Collection<Equipo> equipoCollection;
    @OneToMany(mappedBy = "idSucursal")
    private Collection<Habitacion> habitacionCollection;

    public Hotel() {
    }

    public Hotel(String idSucursal) {
        this.idSucursal = idSucursal;
    }

    public String getIdSucursal() {
        return idSucursal;
    }

    public void setIdSucursal(String idSucursal) {
        this.idSucursal = idSucursal;
    }

    public String getSede() {
        return sede;
    }

    public void setSede(String sede) {
        this.sede = sede;
    }

    public String getTelefonoHotel() {
        return telefonoHotel;
    }

    public void setTelefonoHotel(String telefonoHotel) {
        this.telefonoHotel = telefonoHotel;
    }

    public String getDireccionHotel() {
        return direccionHotel;
    }

    public void setDireccionHotel(String direccionHotel) {
        this.direccionHotel = direccionHotel;
    }

    public Integer getCantidadHabitaciones() {
        return cantidadHabitaciones;
    }

    public void setCantidadHabitaciones(Integer cantidadHabitaciones) {
        this.cantidadHabitaciones = cantidadHabitaciones;
    }

    @XmlTransient
    public Collection<Empleado> getEmpleadoCollection() {
        return empleadoCollection;
    }

    public void setEmpleadoCollection(Collection<Empleado> empleadoCollection) {
        this.empleadoCollection = empleadoCollection;
    }

    @XmlTransient
    public Collection<Equipo> getEquipoCollection() {
        return equipoCollection;
    }

    public void setEquipoCollection(Collection<Equipo> equipoCollection) {
        this.equipoCollection = equipoCollection;
    }

    @XmlTransient
    public Collection<Habitacion> getHabitacionCollection() {
        return habitacionCollection;
    }

    public void setHabitacionCollection(Collection<Habitacion> habitacionCollection) {
        this.habitacionCollection = habitacionCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idSucursal != null ? idSucursal.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Hotel)) {
            return false;
        }
        Hotel other = (Hotel) object;
        if ((this.idSucursal == null && other.idSucursal != null) || (this.idSucursal != null && !this.idSucursal.equals(other.idSucursal))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dao.Hotel[ idSucursal=" + idSucursal + " ]";
    }
    
}
