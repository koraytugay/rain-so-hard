import React, {useEffect, useState} from 'react';
import * as orderScheduleController from './orderScheduleController';
import OrderSchedules from "./OrderSchedules";

export default ({history}) => {

    const [allOrderSchedules, setAllOrderSchedules] = useState([]);

    useEffect(() => {
        orderScheduleController.getAllOrderSchedules()
            .then(response => setAllOrderSchedules(response.data));
    }, []);

    function newOrderScheduleHandler() {
        history.push('/orderSchedules/new');
    }

    return <OrderSchedules newOrderScheduleHandler={newOrderScheduleHandler} allOrderSchedules={allOrderSchedules}/>;
}
