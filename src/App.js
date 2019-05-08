import React, { Component } from 'react';
import './App.css';
import Blog from './Containers/Blog/Blog'
import { BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog></Blog>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
