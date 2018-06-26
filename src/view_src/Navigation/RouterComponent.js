import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import {InitialApp, NoMatch} from './InitialAppComponents'
import MainView from '../Containers/MainView';
import BooksView from '../Containers/BooksView';
import LibraryView from '../Containers/LibraryView';
import LibraryDetailsView from '../Containers/LibraryDetailsView'
import BookCreationView from '../Containers/BookCreationView';
import LibraryCreationView from '../Containers/LibraryCreationView';




var RouteComponent = () =>{
    return (
        <Router history={hashHistory}  >
            <Route path="/" component={InitialApp} >
              <IndexRoute component={MainView} />
              <Route path="/books" component={BooksView} />
              <Route path="/book/new" component={BookCreationView} />
              <Route path="/book/new/library/:library_id" component={BookCreationView} />
              <Route path="/librares" component={LibraryView} />
              <Route path="/library/new" component={LibraryCreationView} />
              <Route path="/library/view/:library_id" component={LibraryDetailsView} />
              <Route path="/*" component={NoMatch} />
         </Route>
        </Router>)
  }

  export default RouteComponent;