import React from 'react';

function Card(props) {
    const placeholder = props.site === "" ? "This user has no Github site." : props.site;
    const placeholder1 = props.bio === null ? "This user has no bio." : props.bio;
    return(
        <div>
        <div className="i Card">
            <div className="circular--landscape">
                <img src={props.img} alt=""/>
            </div>
            <a href={props.url} target="_blank" rel="noopener noreferrer"><h5 className="i">{props.name}</h5></a>
            <br/>
            <div className="rf">
                <h6>Followers: {props.followers}</h6>
                <h6>Following: {props.following}</h6>
                <h6>Repositories: {props.repositories}</h6>
            </div>
            <p className="i">{placeholder1}</p >
            <a href={"https://" + props.site} className="ia" target="_blank" rel="noopener noreferrer">{placeholder}</a>
        </div>
        </div>
    )
}

export default Card;