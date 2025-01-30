import React from 'react';

function Movie (props) {
    const {
        Poster: poster,
        Title: title,
        Type: type,
        Year: year,
        imdbID: id
    } = props;
    return <div id={id} className="movie card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                (poster === "N/A") ?
                    <img className="activator" src={`https://place-hold.it/300x440&text=Not%20found`} alt="Poster"/>
                    :
                    <img className="activator" src={poster} alt="Poster"/>
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>{year} <span className="right">{type}</span></p>

        </div>
    </div>
}

export {Movie}