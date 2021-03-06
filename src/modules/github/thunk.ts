import { Dispatch } from 'redux';
import { getUserProfileAsync } from './actions';
import { getUserProfile } from '../../api/github';

export const getUserProfileThunk = (username: string) => {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};
