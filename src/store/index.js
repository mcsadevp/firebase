import { createStore } from "vuex";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

export default createStore({
  state: {
    newUser: {
      name: "",
      email: "",
    },
    users: [],
  },
  mutations: {
    setNewUser(state, user) {
      state.newUser = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    addUserToState(state, user) {
      const existingUserIndex = state.users.findIndex(
        (u) => u.email === user.email
      );
      if (existingUserIndex === -1) {
        state.users.push(user);
      }
    },
    removeUserFromState(state, userId) {
      state.users = state.users.filter((user) => user.id !== userId);
    },
  },
  actions: {
    async addUser({ commit, state }) {
      if (
        state.newUser.name.trim() === "" ||
        state.newUser.email.trim() === ""
      ) {
        return;
      }

      const db = getFirestore(firebaseApp);
      const userRef = collection(db, "users");
      const docRef = await addDoc(userRef, {
        name: state.newUser.name,
        email: state.newUser.email,
      });

      commit("addUserToState", {
        id: docRef.id,
        name: state.newUser.name,
        email: state.newUser.email,
      });

      commit("setNewUser", { name: "", email: "" });
    },
    async deleteUser({ commit }, userId) {
      const db = getFirestore(firebaseApp);
      const userRef = doc(db, "users", userId);
      await deleteDoc(userRef);
      commit("removeUserFromState", userId);
    },
    fetchUsers({ commit }) {
      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, "users");

      commit("setUsers", []);

      onSnapshot(usersRef, (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("setUsers", users);
      });
    },
  },
});
