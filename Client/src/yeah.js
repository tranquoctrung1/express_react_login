import React from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function Yeah (props)
{
    let history = useHistory();

    function handleClick(e)
    {
        // userHasAuthenticated(false); // set log out
        history.push('/');
    }

    return(
        <div>
            <p>Yeah !!</p>
            <button onClick={(e) => handleClick(e)}>Log out</button>
        </div>
    );
}