import actionTypes from "./actionTypes";
import { getAlllCodeServices } from "../../services/userService";

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })

export const fetchGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FETCH_GENDER_START,
      });
      let res = await getAlllCodeServices("GENDER");
      if (res && res.errCode === 0) {
        dispatch(fetchGenderSuccess(res.data));
      } else {
        dispatch(fetchGenderFaided());
      }
    } catch (e) {
      dispatch(fetchGenderFaided());
    }
  };
};
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
  });
  export const fetchGenderFaided = () => ({
    type: actionTypes.FETCH_GENDER_FAIDED,
  });



  //póition
  export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
      try {
        
        let res = await getAlllCodeServices("POSITION");
        if (res && res.errCode === 0) {
          dispatch(fetchPositionSuccess(res.data));
        } else {
          dispatch(fetchPositionFaided());
        }
      } catch (e) {
        dispatch(fetchPositionFaided());
      }
    };
  };
export const fetchPositionSuccess = (positionData) => ({
  type: actionTypes.FETCH_POSITION_SUCCESS,
  data: positionData,
});

export const fetchPositionFaided = () => ({
  type: actionTypes.FETCH_POSITION_FAIDED,
});



//role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
      try {
        
        let res = await getAlllCodeServices("ROLE");
        if (res && res.errCode === 0) {
          dispatch(fetchRoleSuccess(res.data));
        } else {
          dispatch(fetchRoleFaided());
        }
      } catch (e) {
        dispatch(fetchRoleFaided());
      }
    };
  };
export const fetchRoleSuccess = (roleData) => ({
  type: actionTypes.FETCH_ROLE_SUCCESS,
  data: roleData,
});

export const fetchRoleFaided = () => ({
  type: actionTypes.FETCH_ROLE_FAIDED,
});

