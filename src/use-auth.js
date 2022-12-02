import { toRefs, reactive } from "@vue/composition-api";
import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

// initialize firebase, this is directly from the firebase documentation
// regarding getting started for the web
if (firebase.apps.length === 0) {
  const firebaseConfig = {
    apiKey: "AIzaSyBGgdRFvVrCLvsSvuCwmz1wNTAbiBdKMGE",
    authDomain: "la-herreria-dev.firebaseapp.com",
    databaseURL: "https://la-herreria-dev-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "la-herreria-dev",
    storageBucket: "la-herreria-dev.appspot.com",
    messagingSenderId: "968683705447",
    appId: "1:968683705447:web:3521c581543b1a170370c2",
  };
  firebase.initializeApp(firebaseConfig);
}

export default function () {
  // eslint-disable-next-line no-console
  console.log("use auth");

  let state = reactive({
    user: null,
    loading: true,
    error: null,
  });

  firebase.auth().onAuthStateChanged((_user) => {
    // eslint-disable-next-line no-console
    console.log("onAuthStateChanged", _user);

    if (_user) {
      state.user = _user;
      // eslint-disable-next-line no-console
      console.log("_user state.user ", state.user);
    } else {
      state.user = null;
    }
    state.loading = false;
    // eslint-disable-next-line no-console
    console.log("_user state.loading ", state);
  });

  return {
    ...toRefs(state),
  };
}
