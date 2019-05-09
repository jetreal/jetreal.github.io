import { connect } from "react-redux";
import { checkItemAC, againAC } from "../../redux/actions/notes";
import NotesList from "./index";

let mapDispatchToProps = (dispatch) => {
    return {

        onCheckItem: e => {
            dispatch(checkItemAC(e.currentTarget.dataset.index));
        },

        onAgainClick: () => {
            dispatch(againAC());
        },
    }
}

export default connect(({ notes }) => ({ notes }), mapDispatchToProps ) (NotesList);
    
