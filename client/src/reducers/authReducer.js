import { FETCH_USER } from "../actions/types";
//Ensure that we have one of 3 values:
//Null - indicates we really don’t know what’s up right now

//Payload Obj - containing the user ID

//False means - yep, we are sure the user isn’t logged in
export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
