import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as orderScheduleController from "./orderScheduleController";
import * as customerController from "./../customer/customerController";
import OrderScheduleDetails from "./OrderScheduleDetails";

export default ({history}) => {
    let {id} = useParams();

    const [orderSchedule, setOrderSchedule] = useState({
        description: '',
        customer: {
            id: ''
        }
    });

    const [allCustomers, setAllCustomers] = useState([{}]);

    useEffect(() => {
        if (id !== 'new') {
            orderScheduleController.getOrderSchedule(id)
                .then(response => {
                    setOrderSchedule(response.data);
                });
        }
    }, []);

    useEffect(() => {
        customerController.getAllCustomers()
            .then(response => {
                setAllCustomers(response.data);
            });
    }, []);

    function saveHandler(event) {
        event.preventDefault();
        if (!orderSchedule.description) {
            return;
        }
        orderScheduleController
            .createOrderSchedule(orderSchedule)
            .then(() => {
                history.push('/orderSchedules');
            });
    }

    return (
        <OrderScheduleDetails
            orderSchedule={orderSchedule}
            setOrderSchedule={setOrderSchedule}
            allCustomers={allCustomers}
            saveHandler={saveHandler}
        />
    )
}
