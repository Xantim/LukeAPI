import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import Jedi from './Jedi';
import Planet from './Planet';
import Error from './Error';



const People = props => {
    const [jedi,setJedi ]= useState(null);
    const [planet,setPlanet] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.query}/${props.id}`)
            .then(res => {
                console.log(res.data)
                if(props.query === "people"){
                    setJedi(res.data);
                    setPlanet(null);
                    setError(null)
                }
                else if(props.query === "planets"){
                    setPlanet(res.data);
                    setJedi(null);
                    setError(null)
                }
            })
            .catch(err => {
                console.log(err.response.status);
                    setPlanet(null);
                    setJedi(null);
                    setError("These aren't the droids you're looking for!")
            });        
        },[props])

    return (
        <div>
            <h1>Welcome to Star Wars!!!</h1>
            {
                jedi ? <Jedi banana={jedi} /> : null
            }
            {
                planet ? <Planet planets={planet} /> : null
            }
            {
                error ? <Error error={error} /> : null
            }
        </div>
    );
}

export default People;