import { createSlice } from "@reduxjs/toolkit";

let teacherDetails = null;
let studentDetails = null;

if (typeof window !== "undefined") {
  const storedTeacherDetails = localStorage.getItem("teacherDetails");
  teacherDetails = storedTeacherDetails
    ? JSON.parse(storedTeacherDetails)
    : null;
}

if (typeof window !== "undefined") {
  const storedStudentDetails = localStorage.getItem("studentDetails");
  studentDetails = storedStudentDetails
    ? JSON.parse(storedStudentDetails)
    : null;
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    teacherDetails: teacherDetails,
    studentDetails: studentDetails,
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
    setStudentDetails: (state, action) => {
      state.studentDetails = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("studentDetails", JSON.stringify(action.payload));
      }
    },
    removeStudentDetails: (state) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("studentDetails");
        state.studentDetails = null;
      }
    },
  },
});

export const {
  setTeacherDetails,
  removeTeacherDetails,
  setStudentDetails,
  removeStudentDetails,
} = authSlice.actions;
export default authSlice.reducer;
