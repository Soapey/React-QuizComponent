import React, { Component } from "react";
import Quiz from "./Quiz";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(buttoText) {}

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => {
                return (
                  <QuizQuestionButton
                    key={index}
                    button_text={answer_option}
                    clickHandler={this.handleClick.bind(this)}
                  />
                );
              }
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
