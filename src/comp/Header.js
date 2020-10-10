import React from 'react';

function Header(props){
return(
    <>
    <h1>Things Creator</h1>
    <p>How many things we have : {props.count.length}</p>
    <nav>
        <ul>
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a>ABOUT</a>
            </li>
        </ul>
    </nav>
    </>
)
}

export default Header;