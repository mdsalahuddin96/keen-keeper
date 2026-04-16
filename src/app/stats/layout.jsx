import SortedButton from "@/components/SortedButton";

const StatsLayout = ({children}) => {
  return (
    <div className="bg-[#f8fafc] p-8 md:px-60 md:py-20 ">
      <h1 className="text-5xl font-bold text-[#1f2937]">Friendship Analytics</h1>
      <div>
        {children}
      </div>
    </div>
  );
};

export default StatsLayout;
