import React from 'react';

function Card(props) {
    return(
        <div className="i Card">
            <div className="circular--landscape">
                <img src="https://avatars2.githubusercontent.com/u/40891074?v=4" alt=""/>
            </div>
            <h5 className="i">realtechnerd</h5>
            <div className="follows">
                <h6>Followers: 15</h6>
                <h6>Following: 15</h6>
            </div>
        </div>
    )
}

export default Card;