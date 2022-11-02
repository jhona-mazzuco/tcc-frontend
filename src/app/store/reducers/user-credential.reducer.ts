import { createReducer, on } from "@ngrx/store";
import { STORAGE_KEYS } from "@shared/constants/storage-keys.constant";
import { UserCredentialActions } from "../actions/user-credential.actions";

const initialState = {}

export const userCredentialReducer = createReducer(
  initialState,
  on(UserCredentialActions.save, (state, { credentials }) => {
    localStorage.setItem(STORAGE_KEYS.USER_CREDENTIAL, credentials!.user!.refreshToken);
    return credentials;
  }),
  on(UserCredentialActions.reset, () => {
    localStorage.removeItem(STORAGE_KEYS.USER_CREDENTIAL);
    return {};
  }),
);
