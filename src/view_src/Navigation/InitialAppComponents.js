import React from 'react';

import {MainNavigation} from './NavigationComponents';

var InitialApp = (props) =>{
    return (
      <div className="container">
        <MainNavigation userName={props.userName}/>
        <div className="mainView">
          {props.children}
        </div>
      </div>)
  }
  var NoMatch = () =>{
    return (<div className='container'><section>Puslapis nerastas</section></div>)
  }

export {InitialApp}
export {NoMatch}