/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author yuletzys
 */
@Entity
@Table(name = "mobiliario")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Mobiliario.findAll", query = "SELECT m FROM Mobiliario m")
    , @NamedQuery(name = "Mobiliario.findByCodigoMobiliario", query = "SELECT m FROM Mobiliario m WHERE m.codigoMobiliario = :codigoMobiliario")
    , @NamedQuery(name = "Mobiliario.findByTipoMobiliario", query = "SELECT m FROM Mobiliario m WHERE m.tipoMobiliario = :tipoMobiliario")
    , @NamedQuery(name = "Mobiliario.findByDescripcion", query = "SELECT m FROM Mobiliario m WHERE m.descripcion = :descripcion")
    , @NamedQuery(name = "Mobiliario.findByPrecio", query = "SELECT m FROM Mobiliario m WHERE m.precio = :precio")})
public class Mobiliario implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2147483647)
    @Column(name = "codigo_mobiliario")
    private String codigoMobiliario;
    @Size(max = 2147483647)
    @Column(name = "tipo_mobiliario")
    private String tipoMobiliario;
    @Size(max = 2147483647)
    @Column(name = "descripcion")
    private String descripcion;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "precio")
    private Double precio;
    @JoinColumn(name = "nro_habitacion", referencedColumnName = "nro_habitacion")
    @ManyToOne
    private Habitacion nroHabitacion;

    public Mobiliario() {
    }

    public Mobiliario(String codigoMobiliario) {
        this.codigoMobiliario = codigoMobiliario;
    }

    public String getCodigoMobiliario() {
        return codigoMobiliario;
    }

    public void setCodigoMobiliario(String codigoMobiliario) {
        this.codigoMobiliario = codigoMobiliario;
    }

    public String getTipoMobiliario() {
        return tipoMobiliario;
    }

    public void setTipoMobiliario(String tipoMobiliario) {
        this.tipoMobiliario = tipoMobiliario;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Habitacion getNroHabitacion() {
        return nroHabitacion;
    }

    public void setNroHabitacion(Habitacion nroHabitacion) {
        this.nroHabitacion = nroHabitacion;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (codigoMobiliario != null ? codigoMobiliario.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Mobiliario)) {
            return false;
        }
        Mobiliario other = (Mobiliario) object;
        if ((this.codigoMobiliario == null && other.codigoMobiliario != null) || (this.codigoMobiliario != null && !this.codigoMobiliario.equals(other.codigoMobiliario))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dao.Mobiliario[ codigoMobiliario=" + codigoMobiliario + " ]";
    }
    
}
