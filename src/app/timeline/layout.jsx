import SortedButton from "@/components/SortedButton";

const TimelineLayout = ({children}) => {
  return (
    <div className="bg-[#f8fafc] p-8 md:px-60 md:py-20 ">
      <h1 className="text-5xl font-bold text-[#1f2937]">Timeline</h1>
      <div>
        <SortedButton/>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default TimelineLayout;
