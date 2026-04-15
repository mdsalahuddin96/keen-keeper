import TimelinesData from "@/components/timlinesdata/TimelinesData";
import React from "react";

const TimelinesPage = () => {
  return (
    <div className="bg-[#f8fafc] px-60 py-20 ">
      <div className="container mx-auto border border-amber-500">
        <h1 className="text-5xl font-bold text-[#1f2937]">Timeline</h1>
        <div>

        </div>
        <div>
            <TimelinesData></TimelinesData>
        </div>
      </div>
    </div>
  );
};

export default TimelinesPage;
