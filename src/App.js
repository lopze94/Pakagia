import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import Home from './pages/Home/Home'

const App = () => {
  const AboutCard = () => <Card title='Josue Lopez' description='is cool'/>
  const ContactCard = () => <Card title='Phone Number' description='(801) 400-8794'/>

  return (
    <Router>
      <div>
      <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about/" component={AboutCard}/>
          <Route exact path="/contact/" component={ContactCard}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
