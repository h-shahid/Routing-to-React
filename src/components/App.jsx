import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom"
import Films from "./Films"
import People from "./People"
import SingleFilm from "./SingleFilm"
import SinglePerson from "./SinglePerson"
import Home from "./Home"

const App = () => {
    
        return (
            <Router>
                 <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>
            <li>
              <Link to="/People">People</Link>
            </li>
          </ul>
        </nav>
            <Switch>
                <Route path="films/:id" component={SingleFilm}/> 
                <Route path="/films" component={Films}/> 
                <Route path="people/:id" component={SinglePerson}/> 
                <Route path="/people" component={People}/> 
                <Route path="/" component={Home}/> 
            </Switch>
            </Router>
        )
          // this.props.match.params.id

        }  
    
export default App;

<<<<<<< HEAD
=======
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: [],
            people: [],
            loadFilms: false,
            loadPeople: false
        }
    }



    loadFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => this.setState({ films }))
            .catch(err => console.log(err))

    }
    loadPeople() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err))
    }



    render() {
        if (this.state.loadFilms) {
            this.loadFilms();
            return this.state.films.map(film => {
                return (
                    <div key={film.id} className="card-body">
                        <div className="card text-white bg-dark mb-3" id="card" >

                            <h5 className="card-title">{film.title}</h5>
                            <h6 className="subtitle mb-2 text-muted">{film.director}</h6>
                            <p className="card-text">{film.description}</p>
                            <a href={film.url} className="card-link">Go to endpoint</a>
                        </div>
                    </div>

                )

            })
        }
        else if (this.state.loadPeople) {
            this.loadPeople()
            return this.state.people.map(person => {
                return (
                    <div key={person.id} className="card text-white bg-dark mb-3">

                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <h6 className="subtitle mb-2 text-muted">{person.age}</h6>
                            <p className="card-text">{person.eye_color}</p>
                            <a href={person.url} className="btn btn-dark text-white">Go to endpoint</a>
                        </div>
                    </div>

                )

            })
        } else {
            return (
                <>
                    <button onClick={() => this.setState({ loadFilms: true })} className="btn btn-dark text-white" btn-sm m-3>Load Films</button>
                    <button onClick={() => this.setState({ loadPeople: true })} className="btn btn-dark text-white" btn-sm m-3>Load People</button>


                </>
            )

        }



    }
}
>>>>>>> f9552c41a2fefb603ae92da5bf26275094281bcf

