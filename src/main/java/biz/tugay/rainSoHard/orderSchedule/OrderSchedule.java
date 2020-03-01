package biz.tugay.rainSoHard.orderSchedule;

import biz.tugay.rainSoHard.customer.Customer;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
public class OrderSchedule implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    @ManyToOne
    Customer customer;

    @Basic
    String description;
}
