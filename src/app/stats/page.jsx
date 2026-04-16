"use client";
import { InteractionsContext } from "@/context/InteractionsContext";
import { useContext } from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function StatsPage() {
  let text = 0;
  let call = 0;
  let video = 0;
  const { interactions } = useContext(InteractionsContext);
  for (let item of interactions) {
    if (item.interactionType === "Text") {
      text++;
    } else if (item.interactionType === "Call") {
      call++;
    } else {
      video++;
    }
  }
  const data = [
    { name: "Text", value: text, fill: "#0088FE" },
    { name: "Call", value: call, fill: "#00C49F" },
    { name: "Video", value: video, fill: "#FF8042" },
  ];
  return (
    <div className="mt-10 border border-[#e9e9e9] rounded-xl bg-white p-5">
        <p className="">By Interaction Type</p>
      <div className="w-full h-150  flex justify-center items-center">
        
        <ResponsiveContainer width="80%" height="60%">
          <PieChart>
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
