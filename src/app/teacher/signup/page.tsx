"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Otp from "@/components/Common/Otp";
import { handleError } from "@/app/utils/handleError";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm Password is required"),
});

interface SignupFormValues {
  username: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { teacherDetails } = useSelector((state: RootState) => state.auth);

  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  const { mutate, isPending, error } = useMutation({
    mutationFn: async (values: SignupFormValues) => {
      try {
        const res = await axios.post("/api/teacher/signup", values);
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
        setIsOpen(true);
      }
    },
    onError: (error) => {
      handleError(error);
    },
  });

  useEffect(() => {
    if (teacherDetails) {
      router.push("/teacher");
    }
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen py-10">
        <div className="border border-gray-400 rounded-2xl shadow-xl p-14">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-4xl font-bold text-center">Signup with</h1>
              <h2 className="text-xl font-semibold text-center">
                Your credential
              </h2>
            </div>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("iam values", values);
                mutate(values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-6">
                  <div>
                    <Field
                      className="border border-black rounded-lg px-6 py-2 w-full"
                      type="text"
                      name="username"
                      placeholder="Enter your username here..."
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      className="border border-black rounded-lg px-6 py-2 w-full"
                      type="email"
                      name="email"
                      placeholder="Enter your email here..."
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      className="border border-black rounded-lg px-6 py-2 w-full"
                      type="password"
                      name="password"
                      placeholder="Enter your password here..."
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <div>
                    <Field
                      className="border border-black rounded-lg px-6 py-2 w-full"
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter your confirm password here..."
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-600"
                    />
                  </div>
                  <button
                    className={`${
                      isPending
                        ? "cursor-not-allowed opacity-50 bg-black"
                        : "bg-black"
                    } text-white px-5 py-2 rounded-lg`}
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Create"}
                  </button>
                </Form>
              )}
            </Formik>
            <div>
              <p className="text-center">
                By continuing, you agree to our Terms and conditions and Privacy
                Policy.
              </p>
            </div>
            <div className="text-center">
              <p>Already have an account?</p>
              <Link
                href="/teacher/login"
                className="text-blue-600 hover:underline"
              >
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Otp {...{ isOpen, closeDialog }} />
    </>
  );
};

export default SignupPage;
