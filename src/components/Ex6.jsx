import React, { Component } from 'react';
import users from '../data/users';
import Card from '../subComponent/Card';

class Ex6 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-info">Props in Class Component</h3>
                    </div>
                </div>

                <Card userList={ users } />
            </div>
        )
    }
}

export default Ex6;

