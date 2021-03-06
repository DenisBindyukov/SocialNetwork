import {AppStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getAuth = (state: AppStateType) => {
    return state.auth.isAuth;
};

export const getUsers = (state: AppStateType) => {
    return state.usersPage.user;
};

export const getUsersPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize;
};

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage;
};

export const getTotalCount = (state: AppStateType) => {
    return state.usersPage.totalCount;
};

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress;
};

export const getUserSelector = createSelector(getUsers, getAuth,(user, isAuth) => {
  return user.filter((u) => true)
})