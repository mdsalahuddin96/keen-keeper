import Banner from "@/components/Banner";
import FriendCard from "@/components/FriendCard";
import Summary from "@/components/Summary";
import { promises as fs } from "fs";
import path from "path";

export default async function Home() {
  const jsonPath = path.join(process.cwd(), "public", "friends.json");
  const file = await fs.readFile(jsonPath, "utf8");
  const friends = JSON.parse(file);
  return (
    <div className="container mx-auto">
      {/* banner */}
      <Banner />

      {/* Summary Section */}
      <Summary friends={friends}></Summary>

      {/* Friends Section */}
      <div className="pt-10 border-t space-y-4 border-[#e9e9e9]">
        <h1 className="text-2xl text-[#1f2937]">Your Friends</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend}></FriendCard>
          ))}
        </div>
      </div>
    </div>
  );
}
