import React, { Component } from 'react';

class Ex3 extends Component {
    
    // state outside the constructor
    state = {
        a: 12,
        b: 34,
        title: "State is a String",
        isView: false
    }

    render() {
        return (
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">State and Handler in React Class Component</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-success"> a = { this.state.a } </h3>
                        <h3 className="text-success"> b = { this.state.b } </h3>
                        <h3 className="text-success"> Title = { this.state.title } </h3>
                        <h3 className="text-success"> isView = { this.state.isView ? "Say True" : "Say False" } </h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ex3;