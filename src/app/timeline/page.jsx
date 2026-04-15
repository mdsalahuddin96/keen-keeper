import TimelinesData from "@/components/timlinesdata/TimelinesData";
import React from "react";

const TimelinesPage = () => {
  return (
    <div className="bg-[#f8fafc] p-8 md:px-60 md:py-20 ">
      <div className="container mx-auto">
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
