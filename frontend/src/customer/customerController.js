import axios from 'axios';

let customerResource = window.location.origin + '/api/customer';

export function getCustomer(id) {
    return axios.get(customerResource + '/' + id);
}

export function createCustomer(customer) {
    return axios.post(customerResource, customer);
}

export function deleteCustomer(customer) {
    return axios.delete(customerResource + '/' + customer.id);
}

export function getAllCustomers() {
    return axios.get(customerResource);
}
