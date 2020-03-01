import React from "react";

export default (props) => {
    const {
        orderSchedule,
        setOrderSchedule,
        allCustomers,
        saveHandler,
    } = props;

    return (
        <>
            <h3>Order Schedule Details</h3>
            <hr/>
            <form onSubmit={saveHandler}>
                <div className="form-group row">
                    <label htmlFor="order-schedule-detail-description-input">Order Schedule Description</label>
                    <input
                        id="order-schedule-detail-description-input"
                        type="text"
                        className="form-control"
                        value={orderSchedule.description}
                        onChange={(event) => {
                            setOrderSchedule({
                                ...orderSchedule,
                                description: event.target.value
                            })
                        }}/>
                    <br/>
                    <br/>
                    <select
                        className="custom-select"
                        onChange={event => {
                            setOrderSchedule({
                                ...orderSchedule,
                                customer: {
                                    id: event.target.value
                                }
                            });
                        }}
                        value={orderSchedule ? orderSchedule.customer.id : ''}
                    >
                        <option
                            key={0}
                            value={''}
                        />
                        {allCustomers && allCustomers.map(customer => {
                            return (
                                <option
                                    key={customer.id}
                                    value={customer.id}
                                    defaultValue={orderSchedule.customer.id === customer.id ? orderSchedule.customer.id : ''}
                                >
                                    {customer.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group row">
                    <button type="submit"
                            className="btn btn-primary">
                        Save
                    </button>
                    &nbsp;
                </div>
            </form>
        </>
    );
}
