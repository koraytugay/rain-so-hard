import React from "react";
import {Link} from "react-router-dom";

export default ({newOrderScheduleHandler, allOrderSchedules}) => {
    return (
        <>
            <table className={'table table-bordered table-striped'}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Customer</th>
                </tr>
                </thead>
                <tbody>
                {allOrderSchedules && allOrderSchedules.map((orderSchedule) => {
                    return (
                        <tr key={orderSchedule.id}>
                            <td>
                                {orderSchedule.id}
                            </td>
                            <td>
                                <Link to={'/orderSchedules/' + orderSchedule.id}>{orderSchedule.description}</Link>
                            </td>
                            <td>
                                {orderSchedule.customer.name}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button
                className='btn btn-primary'
                onClick={newOrderScheduleHandler}
            >
                Add order schedule
            </button>
        </>
    );
}

