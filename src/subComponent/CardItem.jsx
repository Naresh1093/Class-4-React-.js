import React, { Component } from 'react';

class CardItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-3 col-lg-4 col-sm-12 mt-2 mb-2">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-success text-center"> { this.props.name } </h3>
                    </div>
                    <div className="card-body">
                        <p>
                            <strong>Email</strong>
                            <span className="float-end text-warning"> { this.props.email } </span>
                        </p>
                        <p>
                            <strong>Mobile</strong>
                            <span className="float-end text-warning"> { this.props.mobile } </span>
                        </p>
                    </div>
                    {/* <div className="card-footer"></div> */}
                </div>
                        
            </div>
        )
    }
}

export default CardItem;