import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
const page = async ({ params }) => {
  const { friendId } = await params;
  const jsonPath = path.join(process.cwd(), "public", "friends.json");
  const file = await fs.readFile(jsonPath, "utf8");
  const friends = JSON.parse(file);
  const selectedFriend=friends.find(friedn=>friedn.id===parseInt(friendId))
  return <div>{selectedFriend.name}</div>;
};

export default page;
