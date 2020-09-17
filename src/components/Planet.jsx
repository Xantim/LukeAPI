import React from 'react';


const Planet = props => {
    const {planets} = props;
    return(
        
        <div className="card col-4">
            <div className="card-body">
                <h4 className="card-title">{planets.name}</h4>
                <p className="card-text">Planet name is: {planets.name} </p>
                <p className="card-text">Climate is: {planets.climate} </p>
                <p className="card-text">Climate is: {planets.diameter} Fareheit </p>
                {/* <ul className="list-group list-group-flush">
                    {
                        banana.people.map((p,i) => {
                            return <li key={i} className="list-group-item">{p.people.name}</li>
                        })
                    }
                </ul> */}
            </div>
        </div>
    );
}

export default Planet;