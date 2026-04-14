

const Summary = ({friends}) => {
    const date=new Date();
    const day=date.getDate();
    return (
        <div className="container mx-auto gap-6 grid grid-cols-2 md:grid-cols-4 my-10">
            <div className="text-center bg-white rounded-lg p-8 border border-gray-100">
                <p className="text-3xl font-semibold text-[#244d3f]">{friends.length}</p>
                <p className="text-lg text-[#64748B]">Friends</p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 border border-gray-100">
                <p className="text-3xl font-semibold text-[#244d3f]">{friends.reduce((total,cur)=>{
                    if(cur.status==='On-track'){
                        return total+1;
                    }
                    else{
                        return total
                    }
                },0)}</p>
                <p className="text-lg text-[#64748B]">On Track</p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 border border-gray-100">
                <p className="text-3xl font-semibold text-[#244d3f]">{friends.reduce((total,cur)=>{
                    if(cur.status==='Overdue'){
                        return total+1;
                    }
                    else{
                        return total
                    }
                },0)}</p>
                <p className="text-lg text-[#64748B]">Need Attention</p>
            </div>
            <div className="text-center bg-white rounded-lg p-8 border border-gray-100">
                <p className="text-3xl font-semibold text-[#244d3f]">{friends.reduce((total,cur)=>{
                    if(cur.days_since_contact<=day){
                        return total+1;
                    }
                    else{
                        return total;
                    }
                },0)}</p>
                <p className="text-lg text-[#64748B]">Interactions This Month</p>
            </div>
        </div>
    );
};

export default Summary;