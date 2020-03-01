import React from "react";

export default (props) => {
    const {
        customer,
        setCustomer,
        saveHandler,
        deleteHandler
    } = props;

    return (
        <>
            <h3>Customer Details</h3>
            <hr/>
            <form onSubmit={saveHandler}>
                <div className="form-group row">
                    <label htmlFor="customer-detail-name-input">Customer Name</label>
                    <input
                        id="customer-detail-name-input"
                        type="text"
                        className="form-control"
                        value={customer.name}
                        onChange={(e) => {
                            setCustomer({
                                ...customer,
                                name: e.target.value
                            })
                        }}/>
                </div>
                <div className="form-group row">
                    <button type="submit"
                            className="btn btn-primary">
                        Save
                    </button>
                    &nbsp;
                    {customer.id &&
                    <button type="button"
                            className="btn btn-danger"
                            onClick={deleteHandler}>
                        Delete
                    </button>
                    }
                </div>
            </form>
        </>
    );
}
