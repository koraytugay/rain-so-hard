package biz.tugay.rainSoHard.customer;

import biz.tugay.rainSoHard.orderSchedule.OrderSchedule;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CustomerDto implements Serializable {

    int id;

    String name;

    public List<OrderSchedule> orderSchedules = new ArrayList<>();

    public static CustomerDto fromCustomer(Customer customer) {
        CustomerDto customerDto = new CustomerDto();
        customerDto.id = customer.getId();
        customerDto.name = customer.getName();
        customerDto.orderSchedules = customer.orderSchedules;
        customerDto.orderSchedules.forEach(orderSchedule -> orderSchedule.setCustomer(null));
        return customerDto;
    }

    public Customer toCustomer() {
        Customer customer = new Customer();
        customer.setId(id);
        customer.setName(name);
        customer.setOrderSchedules(orderSchedules);
        return customer;
    }
}
