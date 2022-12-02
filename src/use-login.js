import { toRefs, reactive, computed } from "@vue/composition-api";
import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

export default function () {
  let state = reactive({
    error: null,
    username: null,
    password: null,
    user: null,
  });
  // eslint-disable-next-line no-console
  // console.log("state", state);

  let isValid = computed(() => {
    let { username, password } = state;
    // eslint-disable-next-line no-console
    console.log("isValid state, ", state);
    return username !== null && username.length !== 0 && password !== null && password.length !== 0;
  });

  const login = () => {
    // eslint-disable-next-line no-console
    console.log("login", state);
    firebase
      .auth()
      .signInWithEmailAndPassword(state.username, state.password)
      .then(
        () => {},
        (error) => (state.error = error)
      )
      .catch((error) => {
        // Handle Errors here.
        state.error = error;
      });
  };

  const logout = () => {
    // eslint-disable-next-line no-console
    console.log("logout");
    firebase
      .auth()
      .signOut()
      .then(
        () => {},
        (error) => (state.error = error)
      )
      .catch((error) => {
        // Handle Errors here.
        state.error = error;
      });
  };

  // eslint-disable-next-line no-console
  console.log("stat", state);

  return {
    ...toRefs(state),
    isValid,
    login,
    logout,
  };
}
