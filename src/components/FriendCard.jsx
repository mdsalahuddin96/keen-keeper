import Image from "next/image";
import React from "react";

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, status, tags,} = friend;
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-base-100 border border-gray-200 rounded-lg">
      <Image
        className="rounded-full"
        src={picture}
        alt={name}
        width={100}
        height={100}
      />
      <div className="card-body items-center text-center">
        <h2 className="text-[20px] font-semibold text-[#1f2937]">{name}</h2>
        <p className="text-[#64748B]">{days_since_contact}d ago</p>
        <div className="flex gap-2 justify-center items-center">
          {tags.map((tag, ind) => (
            <span
              key={ind}
              className="bg-[#cbfadb] px-2 py-1.5 rounded-full text-[#244D3F] font-medium"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        <span
          className={`font-medium px-2 py-1.5 text-white rounded-full ${status === "On-track" ? "bg-[#244D3F]" : status === "Overdue" ? "bg-[#ef4444]" : "bg-[#efad44]"}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
