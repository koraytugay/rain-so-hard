package biz.tugay.rainSoHard.customer;

import biz.tugay.rainSoHard.orderSchedule.OrderSchedule;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Basic
    private String name;

    @OneToMany(mappedBy = "customer", orphanRemoval = true)
    public List<OrderSchedule> orderSchedules = new ArrayList<>();
}
