
import { connect } from 'react-redux';
import RightSection from './RightSection';

const mapStateToProps = (state) => {
    return {
        ...state.DiscountsPageReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightSection);
