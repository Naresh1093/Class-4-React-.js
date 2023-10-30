import React from 'react';

function UserItem(props) {
    const {id, name, email, mobile} = props;
    return (
        <div className="col-md-6 col-lg-4 col-sm-12 mt-2 mb-2">
            <div className="card">
                <div className="card-header">
                    <h4 className="text-success text-center"> {id} {name} </h4>
                </div>
                <div className="card-body">
                    <p>
                        <strong>Email</strong>
                        <span className="text-warning float-end"> {email} </span>
                    </p>
                    <p>
                        <strong>Mobile</strong>
                        <span className="text-warning float-end"> {mobile} </span>
                    </p>
                </div>
                <div className="card-footer"></div>
            </div>
        </div>
    )
        
}

export default UserItem;