import React, { Component } from 'react';
import CardItem from './CardItem';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">User Card</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        this.props.userList.map((item,index) => {
                            return <CardItem key={ index } { ...item }/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Card;