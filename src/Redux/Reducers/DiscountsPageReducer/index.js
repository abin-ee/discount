import { ON_CHANGE_ACTIVE_STATUS, ON_CHANGE_LABEL, ON_UPDATE_DATA } from "../../Redux.constants";
import { onAddData, onChangeLabel, onChnageActiveStatus } from "./Helper";
import { INITIAL_STATE } from "./initialState";

export default function DiscountsPageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ON_CHANGE_ACTIVE_STATUS:
      return onChnageActiveStatus(state, action.payload);
    case ON_UPDATE_DATA:
      return onAddData(state, action.payload);
    case ON_CHANGE_LABEL:
      return onChangeLabel(state, action.payload);
    default:
      return { ...state };
  }
}
