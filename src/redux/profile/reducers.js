import actions from './actions';
import toData from '../../demoData/friends.json';

const initialState = {
  friends: toData,
  loading: false,
  error: null,
};

const { PROFILE_FRIENDS_BEGIN, PROFILE_FRIENDS_SUCCESS, PROFILE_FRIENDS_ERR } = actions;

const ProfileReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case PROFILE_FRIENDS_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case PROFILE_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: data,
        sLoading: false,
      };
    case PROFILE_FRIENDS_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
