import React  from 'react';
import {BrowserRouter as Router, Route,  Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';

import MainImg from './components/MainImg';
import CardsPage from './pages/CardsPage';
import MyCard from './pages/MyCard';

import AddFormPage from './pages/AddFormPage';
import MainPage from './pages/Main-page';
import Arrow  from './Arrow'
import Arrows from './Arrow';
import Card from './components/Card/card';
export  const MyCards1Context = React.createContext();

  const App = () => {
  return (
      <div className={"main"} >
      <Provider store={store}>
        <Router >
          <MainPage/>
          <Route path="/MyCard/:id/:name"   component={MyCard}/>
          <Route path="/" exact component={MainImg}/>
          <Route path="/Cards/:data" component={CardsPage} />                 
          <Route path="/Create" component={AddFormPage} />
        </Router>
      </Provider>
        </div>

    );
};


ReactDOM.render(<App/>, document.getElementById('mycard1'));