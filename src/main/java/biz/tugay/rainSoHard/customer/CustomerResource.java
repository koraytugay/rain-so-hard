package biz.tugay.rainSoHard.customer;


import org.springframework.web.bind.annotation.*;

import java.util.List;

import static java.util.stream.Collectors.toList;

@RestController
@RequestMapping("api/customer")
public class CustomerResource {

    private CustomerRepository customerRepository;

    public CustomerResource(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @PostMapping
    public void save(@RequestBody CustomerDto customerDto) {
        Customer customer = customerDto.toCustomer();
        customerRepository.save(customer);
    }

    @GetMapping
    @ResponseBody
    public List<CustomerDto> all() {
        return customerRepository
                .findAllBy()
                .stream()
                .map(CustomerDto::fromCustomer)
                .collect(toList());
    }

    @GetMapping(path = "{id}")
    @ResponseBody
    public CustomerDto byId(@PathVariable int id) {
        return CustomerDto.fromCustomer(customerRepository.findById(id).get());
    }

    @DeleteMapping(value = "{id}")
    public void delete(@PathVariable("id") int id) {
        customerRepository.deleteById(id);
    }
}
