/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author yuletzys
 */
@Entity
@Table(name = "alquiler")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Alquiler.findAll", query = "SELECT a FROM Alquiler a")
    , @NamedQuery(name = "Alquiler.findByFechaHoraEntrada", query = "SELECT a FROM Alquiler a WHERE a.fechaHoraEntrada = :fechaHoraEntrada")
    , @NamedQuery(name = "Alquiler.findByFechaHoraSalida", query = "SELECT a FROM Alquiler a WHERE a.fechaHoraSalida = :fechaHoraSalida")
    , @NamedQuery(name = "Alquiler.findByPrecioHabitacion", query = "SELECT a FROM Alquiler a WHERE a.precioHabitacion = :precioHabitacion")
    , @NamedQuery(name = "Alquiler.findByIdAlquiler", query = "SELECT a FROM Alquiler a WHERE a.idAlquiler = :idAlquiler")})
public class Alquiler implements Serializable {

    private static final long serialVersionUID = 1L;
    @Column(name = "fecha_hora_entrada")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaHoraEntrada;
    @Column(name = "fecha_hora_salida")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fechaHoraSalida;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "precio_habitacion")
    private Double precioHabitacion;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_alquiler")
    private Integer idAlquiler;
    @JoinColumn(name = "ci_cliente", referencedColumnName = "ci_cliente")
    @ManyToOne
    private Cliente ciCliente;
    @JoinColumn(name = "nro_habitacion", referencedColumnName = "nro_habitacion")
    @ManyToOne
    private Habitacion nroHabitacion;

    public Alquiler() {
    }

    public Alquiler(Integer idAlquiler) {
        this.idAlquiler = idAlquiler;
    }

    public Date getFechaHoraEntrada() {
        return fechaHoraEntrada;
    }

    public void setFechaHoraEntrada(Date fechaHoraEntrada) {
        this.fechaHoraEntrada = fechaHoraEntrada;
    }

    public Date getFechaHoraSalida() {
        return fechaHoraSalida;
    }

    public void setFechaHoraSalida(Date fechaHoraSalida) {
        this.fechaHoraSalida = fechaHoraSalida;
    }

    public Double getPrecioHabitacion() {
        return precioHabitacion;
    }

    public void setPrecioHabitacion(Double precioHabitacion) {
        this.precioHabitacion = precioHabitacion;
    }

    public Integer getIdAlquiler() {
        return idAlquiler;
    }

    public void setIdAlquiler(Integer idAlquiler) {
        this.idAlquiler = idAlquiler;
    }

    public Cliente getCiCliente() {
        return ciCliente;
    }

    public void setCiCliente(Cliente ciCliente) {
        this.ciCliente = ciCliente;
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
        hash += (idAlquiler != null ? idAlquiler.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Alquiler)) {
            return false;
        }
        Alquiler other = (Alquiler) object;
        if ((this.idAlquiler == null && other.idAlquiler != null) || (this.idAlquiler != null && !this.idAlquiler.equals(other.idAlquiler))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "dao.Alquiler[ idAlquiler=" + idAlquiler + " ]";
    }
    
}
