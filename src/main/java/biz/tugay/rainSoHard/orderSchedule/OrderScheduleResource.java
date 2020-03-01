package biz.tugay.rainSoHard.orderSchedule;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/orderSchedule")
public class OrderScheduleResource {

    private OrderScheduleRepository orderScheduleRepository;

    public OrderScheduleResource(OrderScheduleRepository orderScheduleRepository) {
        this.orderScheduleRepository = orderScheduleRepository;
    }

    @PostMapping
    public void save(@RequestBody OrderScheduleDto orderScheduleDto) {
        orderScheduleRepository.save(orderScheduleDto.toOrderSchedule());
    }

    @GetMapping
    public List<OrderScheduleDto> findAll() {
        List<OrderScheduleDto> all = new ArrayList<>();
        orderScheduleRepository.findAll().forEach(os -> all.add(OrderScheduleDto.fromOrderSchedule(os)));
        return all;
    }

    @GetMapping(path = "{id}")
    @ResponseBody
    public OrderScheduleDto byId(@PathVariable int id) {
        return OrderScheduleDto.fromOrderSchedule(orderScheduleRepository.findById(id).get());
    }
}
