import { connect } from "react-redux";
import LeftSection from "./LeftSection";
import { onChangeActiveStatus, onChangeLabel } from "../../../../Redux/Actions";

const mapStateToProps = (state) => {
  return {
    ...state.DiscountsPageReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeActiveStatus: (params) => dispatch(onChangeActiveStatus(params)),
    onChangeLabel: (params) => dispatch(onChangeLabel(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSection);
