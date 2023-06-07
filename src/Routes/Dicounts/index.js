import { connect } from "react-redux";
import Discounts from "./Discounts";
import { onChangeActiveStatus, onUpdateData } from "../../Redux/Actions";

const mapStateToProps = (state) => {
  return {
    ...state.MovieListReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeActiveStatus: (params) => dispatch(onChangeActiveStatus(params)),
    onUpdateData: (params) => dispatch(onUpdateData(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discounts);
