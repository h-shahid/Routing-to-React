import React from 'react';
import { Link } from "react-router-dom";

export default class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people => this.setState({ people }))
            .catch(err => console.log(err));
    }

    render() {
        return this.state.people.map(person => {
            return (
                <div className="card">
                    <div className="card-body">
                    <div className="card text-white bg-dark mb-3" id="card">
                        <h5 className="card-title">{person.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Age: {person.age}</h6>
                        <Link to={`/people/${person.id}`} className="card-link">See More</Link>
                    </div>
                </div>
            )
        })
    }
}