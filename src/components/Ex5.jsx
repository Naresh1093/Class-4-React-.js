import React, { Component } from 'react';

class Ex5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0
        }
    }

    addValue(val) {
        this.setState({
            num: this.state.num + val
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-success"> State handler </h3>
                        <h1 className="text-danger"> num = { this.state.num} </h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <button onClick={ () => this.addValue(10) } className="btn btn-success me-2">Add+10</button>
                        <button onClick={ this.addValue.bind(this,100) } className="btn btn-warning me-2">Add+100</button>
                        <button onClick={ () => this.addValue(1000) } className="btn btn-info me-2">Add+1000</button>
                        <button onClick={ this.addValue.bind(this,500) } className="btn btn-danger">Add+500</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ex5;