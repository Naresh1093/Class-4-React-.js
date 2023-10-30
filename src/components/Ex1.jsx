import React, { useState } from 'react';
import Button from '../subComponent/Button';


function Ex1(props) {
    const [num,setNum] = useState(0);

    const increment = () => {
        setNum(num + 1)
    }

    const decrement = () => {
        if(num <= 0) {
            setNum(0)
        } else {
            setNum(num - 1)
        }
    }

    const addValue = (val) => {
        setNum(num + val)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Methods as props</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3 className="display-3 text-secondary"> Counter = {num} </h3>
                    <Button name={"increment count"} cssClass={"btn btn-success me-2"} handler={increment} />
                    <Button name={"decrement count"} cssClass={"btn btn-danger"} handler={decrement} />
                    {/* <Button name={"Add 30"} cssClass={"btn btn-danger me-2"} handler={addValue} value={30} /> 
                    <Button name={"Add 50"} cssClass={"btn btn-success  me-2"} handler={addValue} value={50} /> 
                    <Button name={"Add 100"} cssClass={"btn btn-warning"} handler={addValue} value={100} />  */}
                </div>
            </div>
        </div>
    )
}

export default Ex1;