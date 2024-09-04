"use client";

import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const Otp = ({
  isOpen,
  closeDialog,
}: {
  isOpen: boolean;
  closeDialog: () => void;
}) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const router = useRouter();
  console.log("iam otp", otp);
  const { mutate, isPending, error } = useMutation({
    mutationFn: async () => {25
      try {
        console.log("before giveing clicked mutate");
        const res = await axios.post("/api/teacher/verifyOtp", {
          otp: Number(otp.join("")),
        });
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
        console.log("Success! Navigating to login page...");
        router.push("/teacher/login");
        closeDialog();
      }
    },
    onError: (error) => {
      console.log("Error signing up", error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (!isNaN(Number(value)) && value.length === 1) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div>
              <h1 className="text-3xl font-bold text-center pb-6">
                Enter your OTP
              </h1>
            </div>
          </DialogTitle>
          <DialogDescription>
            <div className="flex justify-center space-x-2 ">
              {Array(6)
                .fill("")
                .map((_, index: number) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button
              disabled={isPending}
              className={`${isPending && "cursor-not-allowed"} mx-auto mt-6`}
              onClick={() => mutate()}
            >
              {isPending ? "Verifying..." : "Verify"}
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Otp;
