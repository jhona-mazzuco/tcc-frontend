import firebase from "firebase/compat/app";

export const SOCIAL_MEDIA_PROVIDERS = {
  facebook: new firebase.auth.FacebookAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider(),
  twitter: new firebase.auth.TwitterAuthProvider()
};
