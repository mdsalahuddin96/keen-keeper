import React from "react";
import callImage from "@/assets/call.png";
import textImage from "@/assets/text.png";
import videoImage from "@/assets/video.png";
import Image from "next/image";
const InteractionCard = ({ interaction }) => {
  const { name, date, interactionType } = interaction;
  return (
    <div className="flex gap-4 border border-[#e9e9e9] rounded-lg p-4 bg-white">
      {interactionType === "Call" ? (
        <Image src={callImage} alt="Call Icon" />
      ) : interactionType === "Text" ? (
        <Image src={textImage} alt="Text icon" />
      ) : (
        <Image src={videoImage} alt="Video Icon" />
      )}
      <div className="flex flex-col">
        <h1 className="text-lg text-[#64748B]">
         <span className="text-xl font-semibold text-[#244D3F]"> {interactionType} </span> with {name}
        </h1>
        <p className="font-medium text-[#64748B]">{date}</p>
      </div>
    </div>
  );
};

export default InteractionCard;
