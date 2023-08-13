const Shimmer = () =>{
    return(
        <div className="flex flex-wrap my-5 p-6">
            {Array(10).fill("").map((e,index)=>(
                <div key={index} className=" w-56 h-80 bg-gray-200 m-4"></div>
            ))}
        </div>
    );
}

export default Shimmer;