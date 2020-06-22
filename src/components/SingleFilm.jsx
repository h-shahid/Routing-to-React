import React from 'react'
import { Link } from "react-router-dom"

export default class Films extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
film:{}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films${this.props.match.params.id}`)
        .then(res =>res.json())
        .then(film => this.setState({ film }))
        .catch(err => console.log(err))
    }

    render() {
        return this.state.films.map(film => {
            return(
                <div key={film.id} className="card-body">
                        <div className="card text-white bg-dark mb-3" id="card" >

                            <h5 className="card-title">{this.state.film.title}</h5>
                            <h6 className="subtitle mb-2 text-muted">{this.state.film.director}</h6>
                            <p className="card-text">{film.description}</p>
                            <Link to= {"/films"}>Click for more! </Link>
                        </div>
                    </div>
            )
        })
    }
}