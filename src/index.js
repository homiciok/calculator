import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import { Numbers } from './components/Numbers.js';
//import Operations from './components/Operations.js';
import { BodyContent } from './components/BodyContent.js';

class App extends React.Component {

  constructor(props) {
    super(props);
	    this.state = {
	    	 currentItem:"0"
	    };
  }

  render() {
    return (
        <div>
          <h2>Calculator</h2>
          <BodyContent />
        </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
