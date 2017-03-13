import React from 'react';
import Questionlist from './Questionlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
  }
  render() {
    return(
      <div>
      <h2> We are here to help</h2>
      <Questionlist
      faqApp={this.props.data} />
      </div>
    )
  }
}

export default App;
