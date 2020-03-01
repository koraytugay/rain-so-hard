import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CustomerDetails from "./CustomerDetails";
import * as customerController from "./customerController";

export default ({history}) => {
    let {id} = useParams();

    const [customer, setCustomer] = useState({
        id: null,
        name: ''
    });

    useEffect(() => {
        if ("new" !== id) {
            customerController.getCustomer(id)
                .then(response => {
                    setCustomer(response.data);
                });
        }
    }, []);

    function saveHandler(event) {
        event.preventDefault();
        if (!customer.name) {
            return;
        }
        customerController
            .createCustomer(customer)
            .then(() => {
                history.push('/customers');
            });
    }

    function deleteHandler(event) {
        event.preventDefault();
        customerController
            .deleteCustomer(customer)
            .then(() => {
                history.push('/customers');
            });
    }

    return (
        <CustomerDetails
            customer={customer}
            setCustomer={setCustomer}
            saveHandler={saveHandler}
            deleteHandler={deleteHandler}
        />
    )
}
