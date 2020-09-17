import React from 'react';



const Jedi = props => {
    const {banana} = props;
      
            
    return(
        <div className="card col-4">
            {/* <img src={banana.sprites.front_default} alt={banana.name} className="card-img-top"/> */}
            <div className="card-body">
                <h4 className="card-title">{banana.name}</h4>
                <h4 className="card-title">gender: {banana.gender}</h4>
                <h4 className="card-title">height: {banana.height}</h4>
                <h4 className="card-title">weight: {banana.mass}</h4>
                <p className="card-text">Planets:</p>
                {/* <ul className="list-group list-group-flush">
                    {
                        banana.planets.map((p,i) => {
                            return <li key={i} className="list-group-item"> {p.planets.name}</li>
                        })
                    }
                </ul> */}
            </div>
        </div>
    );
}

export default Jedi;