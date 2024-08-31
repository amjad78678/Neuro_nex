import React from "react";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <div className="py-10 px-5">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-bold">What Our Student Say</h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              className="px-4 py-2 border border-black mt-auto rounded-md"
              placeholder="Enter your reviews"
              type="text"
              name=""
              id=""
            />
            <button className="px-4 py-2 border border-black mt-auto rounded-md">
              Submit
            </button>
          </div>
        </div>


<div className="grid grid-cols-3 gap-6">
<FeedbackCard/>
<FeedbackCard/>
<FeedbackCard/>
</div>

      </div>
    </div>
  );
};

export default Feedback;
