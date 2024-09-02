import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";

const EventCard = ({ title, name, image }: {title: string, name: string, image: string}) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Image src={image} alt="girl" width={500} height={500} />
        <div className="flex justify-between">
          <h1 className="font-bold">{title}</h1>
          <h2 className="flex gap-1 items-center">
            <CiStar className="text-2xl text-slate-500" />
            <span>5.0</span>
          </h2>
        </div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros.
        </p>
      </div>
    </div>
  );
};

export default EventCard;
