

const Summary = ({friends}) => {
    return (
        <div className="container mx-auto gap-6 grid grid-cols-2 md:grid-cols-4">
            <div className="text-center bg-white rounded-lg p-8 border border-gray-100">
                <p className="text-3xl font-semibold text-[#244d3f]">{friends.length}</p>
                <p>Friends</p>
            </div>
            <div className="text-center">
                <p>{friends.length}</p>
                <p>On Track</p>
            </div>
            <div className="text-center">
                <p>{friends.length}</p>
                <p>Need Attention</p>
            </div>
            <div className="text-center">
                <p>{friends.length}</p>
                <p>Friends</p>
            </div>
        </div>
    );
};

export default Summary;