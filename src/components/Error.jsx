import React from 'react';
import obiWan from './img/obiWan.jpg'


const Error = props => {
    const {error} = props;
    return (
        <div className="card col">
            <h1>{error}</h1>
            <img className="col-8 mx-auto" src={obiWan} alt="/public/logo192.png" />
        </div>
    )
}

export default Error;