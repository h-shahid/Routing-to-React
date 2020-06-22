import React from "react";
import { Link } from "react-router-dom";
export default class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.films.map((film) => {
      return (
        <div key={film.id} className="card-body">
          <div className="card text-white bg-dark mb-3" id="card">
            <h5 className="card-title">{film.title}</h5>
            <h6 className="subtitle mb-2 text-muted">{film.director}</h6>
            <p className="card-text">{film.description}</p>
            <Link to={`/films/${film.id}`} className="card-link">
              Click for more!
            </Link>
          </div>
        </div>
      );
    });
  }
}
