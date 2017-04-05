import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import MovieList from './MovieList';
import Checkout from './Checkout';
import PurchasePage from './PurchasePage';
import './App.css';

class App extends Component {
  getMenuItem(path, label, isHeader = false) {
    return ({match}) => {
      return (
        <Link to={path}>
          <Menu.Item
            header={isHeader}
            as='div'
            active={Boolean(match)}
          >{label}</Menu.Item></Link>
      );
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Menu>
            <Route
              exact
              path='/'
              children={this.getMenuItem('/', 'BIO EAR cinema', true)}
            />
            <Route
              path='/checkout'
              children={this.getMenuItem('/checkout', 'Checkout')}
            />
          </Menu>
          <Route exact path='/' component={MovieList}/>
          <Route path='/checkout' component={Checkout} />
          <Route path='/movie/:id/buy' component={PurchasePage} />
        </div>
      </Router>
    );
  }
}

export default App;
