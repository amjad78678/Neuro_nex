import Image from "next/image";
import React from "react";

const FeedbackCard = () => {
  return (
    <div className="border border-black rounded-md p-5 flex flex-col gap-4">
      <div>
        <Image src={"/Stars.png"} alt="girl" width={100} height={50} />
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare."
      </p>
      <div className="flex gap-4">
        <Image src="/Avatar Image.png" alt="girl" width={50} height={50} />
        <div className="">
          <h1 className="font-bold">Wade Warren</h1>
          <p>Position, Company name</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
