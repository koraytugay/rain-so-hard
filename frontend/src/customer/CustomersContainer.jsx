import React, {useEffect, useState} from 'react';
import Customers from './Customers';
import * as customerController from './customerController';

export default ({history}) => {
    const [allCustomers, setAllCustomers] = useState([]);

    useEffect(() => {
        customerController
            .getAllCustomers()
            .then(res => {
                setAllCustomers(res.data);
            })
    }, []);

    function newCustomerHandler() {
        history.push('/customers/new');
    }

    return <Customers newCustomerHandler={newCustomerHandler} allCustomers={allCustomers}/>;
}
