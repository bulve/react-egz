import React from 'react';

var MainNavigation = (props) =>{
    return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <ul className="nav navbar-nav navbar-left">
              <li><a className="" href="#books">Knygos</a></li>
              <li><a className="" href="#librares">Bibliotekos</a></li>
              <li><a className="" href="#other">Priskirti gydytojui pacientą</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li>Vartotojo vardas: <input onChange={props.userName}></input></li>
            </ul>
        </div>
    </nav>
    )
  }
  
export {MainNavigation}