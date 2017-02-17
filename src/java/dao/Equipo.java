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
@Table(name = "equipo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Equipo.findAll", query = "SELECT e FROM Equipo e")
    , @NamedQuery(name = "Equipo.findByCodigoEquipo", query = "SELECT e FROM Equipo e WHERE e.codigoEquipo = :codigoEquipo")
    , @NamedQuery(name = "Equipo.findByValoracion", query = "SELECT e FROM Equipo e WHERE e.valoracion = :valoracion")
    , @NamedQuery(name = "Equipo.findByTipoEquipo", query = "SELECT e FROM Equipo e WHERE e.tipoEquipo = :tipoEquipo")
    , @NamedQuery(name = "Equipo.findByDescripcion", query = "SELECT e FROM Equipo e WHERE e.descripcion = :descripcion")})
public class Equipo implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 2147483647)
    @Column(name = "codigo_equipo")
    private String codigoEquipo;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "valoracion")
    private Double valoracion;
    @Size(max = 2147483647)
    @Column(name = "tipo_equipo")
    private String tipoEquipo;
    @Size(max = 2147483647)
    @Column(name = "descripcion")
    private String descripcion;
    @JoinColumn(name = "id_sucursal", referencedColumnName = "id_sucursal")
    @ManyToOne
    private Hotel idSucursal;

    public Equipo() {
    }

    public Equipo(String codigoEquipo) {
        this.codigoEquipo = codigoEquipo;
    }

    public String getCodigoEquipo() {
        return codigoEquipo;
    }

    public void setCodigoEquipo(String codigoEquipo) {
        this.codigoEquipo = codigoEquipo;
    }

    public Double getValoracion() {
        return valoracion;
    }

    public void setValoracion(Double valoracion) {
        this.valoracion = valoracion;
    }

    public String getTipoEquipo() {
        return tipoEquipo;
    }

    public void setTipoEquipo(String tipoEquipo) {
        this.tipoEquipo = tipoEquipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
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
        hash += (codigoEquipo != null ? codigoEquipo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Equipo)) {
            return false;
        }
        Equipo other = (Equipo) object;
        if ((this.codigoEquipo == null && other.codigoEquipo != null) || (this.codigoEquipo != null && !this.codigoEquipo.equals(other.codigoEquipo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dao.Equipo[ codigoEquipo=" + codigoEquipo + " ]";
    }
    
}
