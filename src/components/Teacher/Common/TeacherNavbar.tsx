"use client";
import getAxiosInstance from "@/app/utils/axiosInstance";
import { handleError } from "@/app/utils/handleError";
import SubmitButton from "@/components/Common/SubmitButton";
import { removeTeacherDetails } from "@/store/slices/authSlice";
import { RootState } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const axiosInstance = getAxiosInstance("teacher");
const TeacherNavbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { teacherDetails } = useSelector((state: RootState) => state.auth);
  const { isPending, mutate } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      try {
        const res = await axiosInstance.post("/logout");
        return res;
      } catch (err) {
        console.log("iam err", err);
        throw err;
      }
    },
    onSuccess: (response) => {
      console.log("iam res", response);
      if (response.data.success) {
        dispatch(removeTeacherDetails());
        router.replace("/teacher/login");
      }
    },
    onError: (err) => {
      handleError(err);
    },
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex justify-between bg-gray-100 items-center px-6 pt-4">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold">Teacher Panel </h1>
        <h2>
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </h2>
      </div>

      {isMounted && teacherDetails && (
        <SubmitButton
          isPending={isPending}
          text="Logout"
          texting="Logging out..."
          onClick={() => mutate()}
        />
      )}
    </div>
  );
};

export default TeacherNavbar;
