import { promises as fs } from "fs";
import Image from "next/image";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import path from "path";
import CheckIn from "@/components/CheckIn";
const page = async ({ params }) => {
  const { friendId } = await params;
  const jsonPath = path.join(process.cwd(), "public", "friends.json");
  const file = await fs.readFile(jsonPath, "utf8");
  const friends = JSON.parse(file);
  const selectedFriend = friends.find(
    (friend) => friend.id === parseInt(friendId),
  );
  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
    email,
  } = selectedFriend;
  return (
    <div className="container mx-auto p-20">
      <div className="grid grid-cols-5 grid-rows-7 gap-4">
        <div className="grid col-span-2 row-span-7 gap-4">
          <div className="row-span-4 ">
            <div className="flex flex-col justify-center items-center p-6 bg-base-100 border border-gray-200 rounded-lg">
              <Image
                className="rounded-full"
                src={picture}
                alt={name}
                width={100}
                height={100}
              />
              <div className="card-body items-center text-center">
                <h2 className="text-[20px] font-semibold text-[#1f2937]">
                  {name}
                </h2>
                <span
                  className={`font-medium px-2 py-1.5 text-white rounded-full ${status === "On-track" ? "bg-[#244D3F]" : status === "Overdue" ? "bg-[#ef4444]" : "bg-[#efad44]"}`}
                >
                  {status}
                </span>
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
                <p className="text-[#64748b]">{`" ${bio} "`}</p>
                <p className="text-[#64748b]">Email: {email}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 font-medium bg-base-100 p-4 border border-gray-200 rounded-lg">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </div>
          <div className="flex items-center justify-center gap-1 font-medium bg-base-100 p-4 border border-gray-200 rounded-lg">
            <FiArchive /> Archive
          </div>
          <div className="flex items-center justify-center gap-1 font-medium text-[#ef4444] bg-base-100 p-4 border border-gray-200 rounded-lg">
            <RiDeleteBin6Line /> Delete
          </div>
        </div>

        <div className="row-span-2 flex flex-col justify-center items-center bg-white rounded-lg border border-gray-100">
          <p className="text-3xl font-semibold text-[#244d3f]">
            {days_since_contact}
          </p>
          <p className="text-lg text-[#64748B]">Days Since Contact</p>
        </div>
        <div className="row-span-2 flex flex-col justify-center items-center bg-white rounded-lg  border border-gray-100">
          <p className="text-3xl font-semibold text-[#244d3f]">{goal}</p>
          <p className="text-lg text-[#64748B]">Goal (Days)</p>
        </div>
        <div className="row-span-2 flex flex-col justify-center items-center bg-white rounded-lg  border border-gray-100">
          <p className="text-3xl font-semibold text-[#244d3f]">
            {`${new Date(next_due_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}`}
          </p>
          <p className="text-lg text-[#64748B]">Next Due</p>
        </div>

        <div className="col-span-3 row-span-2 flex justify-between bg-white rounded-lg p-4 border border-gray-100">
          <div className="space-y-4">
            <p className="text-xl font-medium text-[#244d3f]">
              Relationship Goal
            </p>
            <p className="text-lg text-[#64748B]">Connect every {goal} days</p>
          </div>
          <button className="btn">Edit</button>
        </div>

        <div className="col-span-3 row-span-3 bg-white rounded-lg p-4 border border-gray-100">
          <p className="text-xl font-medium text-[#244d3f]">Quick Check-In</p>
          <CheckIn selectedFriend={selectedFriend}></CheckIn>
        </div>
      </div>
    </div>
  );
};

export default page;
