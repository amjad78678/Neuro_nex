"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/Common/SubmitButton";
import { handleError } from "@/app/utils/handleError";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
interface LoginFormValues {
  email: string;
  password: string;
}
const LoginComponent = () => {
  const router = useRouter();

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (values: LoginFormValues) => {
      try {
        const res = await axios.post("/api/teacher/login", values);
        console.log("Axios response:", res);
        return res;
      } catch (err) {
        console.log("Axios error:", err);
        throw err;
      }
    },
    onSuccess: (res) => {
      console.log("iam res", res);
      if (res && res.data.success) {
        localStorage.setItem("teacherToken", res.data.accessToken);
        router.push("/teacher/dashboard");
      }
    },
    onError: (error) => {
      handleError(error);
    },
  });

  return (
    <div className="w-full flex justify-center items-center min-h-screen py-10">
      <div className="border border-gray-400 rounded-2xl shadow-xl p-14">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
            mutate(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-10">
              <div>
                <h1 className="text-4xl font-bold text-center">Login with</h1>
                <h2 className="text-xl font-semibold text-center">
                  Your credential
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email here..."
                    className="border border-black rounded-lg px-6 py-2 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password here..."
                    className="border border-black rounded-lg px-6 py-2 w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <SubmitButton
                  {...{
                    isPending,
                    text: "Continue",
                    texting: "Verifying...",
                    type: "submit",
                  }}
                />
              </div>

              <div>
                <p className="text-center">
                  By continuing, you agree to our Terms and Conditions and
                  Privacy Policy
                </p>
              </div>

              <div className="text-center">
                <p>Don't have an account?</p>
                <Link
                  href="/teacher/signup"
                  className="text-blue-600 hover:underline"
                >
                  Sign up here
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginComponent;
