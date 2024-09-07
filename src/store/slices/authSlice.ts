import { createSlice } from "@reduxjs/toolkit";

let teacherDetails = null;

if (typeof window !== "undefined") {
  const storedTeacherDetails = localStorage.getItem("teacherDetails");
  teacherDetails = storedTeacherDetails
    ? JSON.parse(storedTeacherDetails)
    : null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    teacherDetails: teacherDetails,
  },
  reducers: {
    setTeacherDetails: (state, action) => {
      state.teacherDetails = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("teacherDetails", JSON.stringify(action.payload));
      }
    },
    removeTeacherDetails: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("teacherDetails");
        state.teacherDetails = null;
      }
    },
  },
});

export const { setTeacherDetails, removeTeacherDetails } = authSlice.actions;
export default authSlice.reducer;
