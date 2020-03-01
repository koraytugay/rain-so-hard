import axios from 'axios';

const orderScheduleResource = window.location.origin + '/api/orderSchedule';

export function getAllOrderSchedules() {
    return axios.get(orderScheduleResource);
}

export function getOrderSchedule(id) {
    return axios.get(orderScheduleResource + '/' + id);
}

export function createOrderSchedule(orderSchedule) {
    return axios.post(orderScheduleResource, orderSchedule);
}
