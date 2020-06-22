import React from 'react';
import { Link } from "react-router-dom"

export default class SinglePerson extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(person => this.setState({ person }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                <div className="card text-white bg-dark mb-3" id="card">
                    <h5 className="card-title">{this.state.person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Age: {this.state.person.age}</h6>
                    <p className="card-text">Eye color: {this.state.person.eye_color}</p>
                    <p className="card-text">Hair color: {this.state.person.hair_color}</p>
                    <Link to={"/people"}>Go back</Link>
                </div>
            </div>
        )
    }
}