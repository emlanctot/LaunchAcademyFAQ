import React from 'react';

class Answer extends React.Component {
  constructor(props) {

    super(props);
  }
  render() {
    let hidden;
    if (this.props.showAnswer) {
      hidden = "hidden answer"
    }else {
      hidden = "answer"
    }
    return(
      <div>
      <h4 onClick={this.props.handleClick}>{this.props.question}</h4>
      <div className={hidden}>{this.props.answer}</div>
      </div>
    )
  }
}


export default Answer;
