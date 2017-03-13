import React from 'react';
import Answer from './Answer';

class Questionlist extends React.Component {
  constructor(props) {
    // debugger;
    super(props);
    this.state = {
      showAnswer: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let newAnswer = !this.state.showAnswer
    this.setState({ showAnswer: newAnswer})
  }

  render() {

    let answerList = this.props.faqApp.map((item) => {


      return (
          <Answer
          key = {item.id}
          question={item.question}
          answer = {item.answer}
          handleClick = {this.handleClick}
          showAnswer = {this.state.showAnswer}
          />
      )
    });


    return(
      <div>{answerList}
      </div>
    )
  }
}

export default Questionlist;
