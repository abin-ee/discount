import { ON_CHANGE_ACTIVE_STATUS, ON_CHANGE_LABEL, ON_UPDATE_DATA } from "../../Redux.constants";

export const onChangeActiveStatus = (payload, cb) => {
  return (dispatch) => {
    dispatch({
      type: ON_CHANGE_ACTIVE_STATUS,
      payload: { ...payload },
    });
  };
};

export const onUpdateData = (payload, cb) => {
  return (dispatch) => {
    dispatch({
      type: ON_UPDATE_DATA,
      payload: { ...payload },
    });
  };
};

export const onChangeLabel = (payload, cb) => {
  return (dispatch) => {
    dispatch({
      type: ON_CHANGE_LABEL,
      payload: { ...payload },
    });
  };
};

