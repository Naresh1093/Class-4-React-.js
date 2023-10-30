import React, { Component } from 'react';

class Ex2 extends Component {
    constructor(props) {
        super(props);
        // state => state object format => number, string, boolean, array, object, object array
        this.state = {
            x: 20,
            y: 30,
            isView: true,
            colors: ['red', 'green', 'blue'],
            title: "Welcome to state in class component",
            user: {
                name: "Raju",
                email: "raju@gmail.com",
                age: 24
            }
        }
    }

    print() {
        return this.state.user.name;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">State and Props in class Component</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1> x = { this.state.x } </h1>
                        <h1> y = { this.state.y} </h1>
                        <h2 className="text-warning"> { this.state.isView ? "say True" : "Say False"} </h2>
                        <hr />

                        <div>
                            {
                                this.state.colors.map((item,index) => {
                                    return <h4 className="text-secondary" key={ index }> { item } </h4>
                                })
                            }
                        </div>

                        <hr />

                        <h1> { this.state.title } </h1>
                        <hr />

                        <div>
                            <h3> { this.state.user.name } </h3>
                            <h3> { this.state.user.email } </h3>
                            <h3> { this.state.user.age } </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Ex2;