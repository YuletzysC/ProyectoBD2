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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
@Table(name = "habitacion")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Habitacion.findAll", query = "SELECT h FROM Habitacion h")
    , @NamedQuery(name = "Habitacion.findByNroHabitacion", query = "SELECT h FROM Habitacion h WHERE h.nroHabitacion = :nroHabitacion")
    , @NamedQuery(name = "Habitacion.findByTipoHabitacion", query = "SELECT h FROM Habitacion h WHERE h.tipoHabitacion = :tipoHabitacion")})
public class Habitacion implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Column(name = "nro_habitacion")
    private Integer nroHabitacion;
    @Size(max = 2147483647)
    @Column(name = "tipo_habitacion")
    private String tipoHabitacion;
    @OneToMany(mappedBy = "nroHabitacion")
    private Collection<Alquiler> alquilerCollection;
    @OneToMany(mappedBy = "nroHabitacion")
    private Collection<Mobiliario> mobiliarioCollection;
    @JoinColumn(name = "id_sucursal", referencedColumnName = "id_sucursal")
    @ManyToOne
    private Hotel idSucursal;

    public Habitacion() {
    }

    public Habitacion(Integer nroHabitacion) {
        this.nroHabitacion = nroHabitacion;
    }

    public Integer getNroHabitacion() {
        return nroHabitacion;
    }

    public void setNroHabitacion(Integer nroHabitacion) {
        this.nroHabitacion = nroHabitacion;
    }

    public String getTipoHabitacion() {
        return tipoHabitacion;
    }

    public void setTipoHabitacion(String tipoHabitacion) {
        this.tipoHabitacion = tipoHabitacion;
    }

    @XmlTransient
    public Collection<Alquiler> getAlquilerCollection() {
        return alquilerCollection;
    }

    public void setAlquilerCollection(Collection<Alquiler> alquilerCollection) {
        this.alquilerCollection = alquilerCollection;
    }

    @XmlTransient
    public Collection<Mobiliario> getMobiliarioCollection() {
        return mobiliarioCollection;
    }

    public void setMobiliarioCollection(Collection<Mobiliario> mobiliarioCollection) {
        this.mobiliarioCollection = mobiliarioCollection;
    }

    public Hotel getIdSucursal() {
        return idSucursal;
    }

    public void setIdSucursal(Hotel idSucursal) {
        this.idSucursal = idSucursal;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (nroHabitacion != null ? nroHabitacion.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Habitacion)) {
            return false;
        }
        Habitacion other = (Habitacion) object;
        if ((this.nroHabitacion == null && other.nroHabitacion != null) || (this.nroHabitacion != null && !this.nroHabitacion.equals(other.nroHabitacion))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dao.Habitacion[ nroHabitacion=" + nroHabitacion + " ]";
    }
    
}
