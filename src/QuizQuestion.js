import React, { Component } from "react";
import Quiz from "./Quiz";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li>{this.props.quiz_question.answer_options[0]}</li>
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
