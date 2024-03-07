import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../helpers/axios";
import { apiRoutes } from "../../constants";
import { notify } from "../../helpers/commonFunctions";

// Request to user login
export const reqToUserLogin = createAsyncThunk(
  "reqToUserLogin",
  async ({ data }) => {
    try {
      const response = await Axios.post(apiRoutes, data);
      return response;
    } catch (error) {
      return error;
    }
  }
);

// Create initial state
const initialUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  loader: false,
  user: initialUser,
  error: "",
};

// Create user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reqToUserLogout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(reqToUserLogin.pending, (state) => {
      state.loader = true;
    });
    builder.addCase(reqToUserLogin.fulfilled, (state, action) => {
      state.loader = false;
      if (action.payload.status === 200) {
        state.user = action.payload.data;
        const authToken = action.payload.headers["authorization"];
        localStorage.setItem("token", JSON.stringify(authToken));
        localStorage.setItem(
          "user",
          JSON.stringify(...action.payload.data)
        );
      } else if (
        action.payload.response &&
        action.payload.response.status !== 200
      ) {
        notify(action.payload.response.data, "error");
      } else {
        notify(action.payload.message, "error");
      }
    });
    builder.addCase(reqToUserLogin.rejected, (state, action) => {
      state.loader = false;
      state.error = action.payload;
    });
  },
});

export const { reqToUserLogout } =  userSlice.actions;
export default userSlice.reducer;
