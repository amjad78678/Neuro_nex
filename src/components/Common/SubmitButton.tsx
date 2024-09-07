import React from "react";
import { Button } from "../ui/button";

const SubmitButton = ({
  isPending,
  onClick,
  className,
  text,
  texting,
  type,
}: {
  isPending: boolean;
  text: string;
  texting: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <Button
      type={type}
      disabled={isPending}
      className={`${isPending && "cursor-not-allowed"}  ${className}`}
      onClick={onClick}
    >
      {isPending ? texting : text}
    </Button>
  );
};

export default SubmitButton;
