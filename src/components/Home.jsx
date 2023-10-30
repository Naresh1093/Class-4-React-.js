import React from 'react';
import users from '../data/users';
import User from '../subComponent/User';

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">Home</h3>
                </div>
            </div>

                <User usersList={users} />
        </div>
    )
}

export default Home;