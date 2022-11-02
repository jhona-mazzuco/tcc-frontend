import { createAction, props } from "@ngrx/store";
import firebase from "firebase/compat/app";

export const UserCredentialActions = {
  save: createAction('[User Credential] save', props<{ credentials: firebase.auth.UserCredential }>()),
  getToken: createAction('[User Credential] get token'),
  reset: createAction('[User Credential] reset')
};
