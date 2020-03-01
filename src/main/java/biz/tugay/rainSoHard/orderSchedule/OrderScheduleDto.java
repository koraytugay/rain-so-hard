package biz.tugay.rainSoHard.orderSchedule;

import biz.tugay.rainSoHard.customer.Customer;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class OrderScheduleDto implements Serializable {

    int id;

    Customer customer;

    String description;

    public static OrderScheduleDto fromOrderSchedule(OrderSchedule orderSchedule) {
        OrderScheduleDto dto = new OrderScheduleDto();
        dto.id = orderSchedule.id;
        dto.customer = orderSchedule.getCustomer();
        dto.customer.getOrderSchedules().clear();
        dto.description = orderSchedule.getDescription();
        return dto;
    }

    public OrderSchedule toOrderSchedule() {
        OrderSchedule orderSchedule = new OrderSchedule();
        orderSchedule.setId(id);
        orderSchedule.setCustomer(customer);
        orderSchedule.setDescription(description);
        return orderSchedule;
    }
}
