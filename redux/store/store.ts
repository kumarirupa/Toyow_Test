import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "@redux/reducers/rootReducer";

// middleware
const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer, // Replace with your root reducer
  middleware: [...middleware], // Add any middleware you need
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default store;
