import React ,{useState} from 'react';
import {Router,navigate} from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
// import CatFacts from './components/CatFacts';
import People from './components/People';


function App() {
  const [query,setQuery] = useState({
    query:"error",
    id:0
  })

  const handleInput = (e) => {
    setQuery({
      ...query,
      [e.target.name]:e.target.value
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/${query.query}/${query.id}`)
      setQuery({
        ...query,
        [e.target.name]:e.target.value
      })
  }

  return (
    <div className="">
      <div className="d-flex mx-auto col-5 justify-content-between">
        {/* <Link to="/cat-facts" >Cat Facts</Link> */}
      </div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <select name="query" onChange={handleInput}>
          <option value="error">-- Select Query --</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <input type="number" name="id" value={query.id} onChange={handleInput} />
        <input type="submit" className="btn btn-info" value="Search"/>
      </form>
      
      <Router>
        {/* <CatFacts path="/cat-facts" /> */}
        <People path="/:query/:id" />
      </Router>
      
    </div>
  );
}

export default App;