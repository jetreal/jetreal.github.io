import { CHECK_ITEM, AGAIN_BUTTON } from "../actions/notes";
// import { loadState } from "../store/localStorage";
import stateData from '../store/stateData.json'

const initState = stateData

export default function (state = initState, action) {
  switch (action.type) {
    case AGAIN_BUTTON: {
      let stateCopy = { ...state }
      stateCopy.currentPage = 0;
      stateCopy.counterTrueAnswer = 0;
      return stateCopy
    }

    case CHECK_ITEM: {
      let stateCopy = { ...state }
      let rightAnswerNumber = stateCopy.questions[stateCopy.currentPage].rightAnswer
      if (stateCopy.currentPage !== 10) {
        stateCopy.currentPage = stateCopy.currentPage + 1;
      }
      if (Number(action.index) === rightAnswerNumber) {
        ++stateCopy.counterTrueAnswer;
      }
      return stateCopy
    }

    default:
      return state;
  }
}