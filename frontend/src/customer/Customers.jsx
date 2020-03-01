import React from 'react';
import {Link} from 'react-router-dom';

export default ({newCustomerHandler, allCustomers}) => {
    return (
        <>
            <table className={'table table-bordered table-striped'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Customer Name</th>
                </tr>
                </thead>
                <tbody>
                {allCustomers && allCustomers.map((customer) => {
                    return (
                        <tr key={customer.id}>
                            <td>
                                {customer.id}
                            </td>
                            <td>
                                <Link to={'/customers/' + customer.id}>{customer.name}</Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button type="button"
                    className="btn btn-primary"
                    onClick={newCustomerHandler}>
                Add New Customer
            </button>
        </>
    );
}
