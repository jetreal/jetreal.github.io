import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import styles from "./styles.module.css";

import RenderNote from "./renderNote/RenderNote";
import Header from "./header/Header";
import AgainBtn from "./buttons/AgainBtn";
import DisplayResult from "./buttons/DisplayResult";

class NotesList extends React.Component {

  render() {
    if (this.props.notes.currentPage < 10) {
      return (
        <div>
          <Header notes={this.props.notes} />
          <ul className={styles["note-list"]}>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {this.props.notes.questions[this.props.notes.currentPage].answer.map((note, index) => {
                return (
                  <li key={index}>
                    <RenderNote note={note}
                      index={index}
                      onCheckItem={this.props.onCheckItem}
                      length={this.props.notes.questions[this.props.notes.currentPage].answer.length}
                    />
                  </li>
                );
              })}
            </ReactCSSTransitionGroup>
          </ul>

        </div>
      );
    } else {
      switch (true) {
        case (this.props.notes.counterTrueAnswer > 8): {
          return (
            <>
              <DisplayResult url={this.props.notes.resultMessage[0].url}
                             text={this.props.notes.resultMessage[0].text} 
                             trueNumbers={this.props.notes.counterTrueAnswer}/>
              <AgainBtn onAgainClick={this.props.onAgainClick} />
            </>
          )
        }
        case (this.props.notes.counterTrueAnswer > 5): {
          return (
            <>
              <DisplayResult url={this.props.notes.resultMessage[1].url}
                             text={this.props.notes.resultMessage[1].text} 
                             trueNumbers={this.props.notes.counterTrueAnswer}/>
              <AgainBtn onAgainClick={this.props.onAgainClick} />
            </>
          )
        }
        default: {
          return (
            <>
              <DisplayResult url={this.props.notes.resultMessage[2].url}
                             text={this.props.notes.resultMessage[2].text} 
                             trueNumbers={this.props.notes.counterTrueAnswer}/>
              <AgainBtn onAgainClick={this.props.onAgainClick} />
            </>
          )
        }
      }
    }
  }
}

export default NotesList;