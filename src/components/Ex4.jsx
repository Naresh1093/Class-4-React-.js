import React, { Component } from 'react';

class Ex4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        }
    }

    addTen() {
        // this.state.num = 10
        this.setState({
            num: this.state.num + 10
        })
    }

    addFifty() {
        // this.state.num = 50
        this.setState({
            num: this.state.num + 50
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success">State handler in Class Component</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-success">
                            num = { this.state.num }
                        </h1>

                        <button className="btn btn-outline-success me-2" onClick={ this.addTen.bind(this) }>Add + 10</button>
                        <button className="btn btn-outline-success" onClick={ () => this.addFifty()}>Add + 50</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ex4;