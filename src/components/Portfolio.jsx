import React from "react";
import compose from "../../public/jetpack.png"

const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            logo:compose,
            name:"JetpackCompose",
            disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
        {
            id:2,
            logo:compose,
            name:"JetpackCompose",
            disc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        },
    ]
  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
          <span className="underline font-semibold">Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 space-x-5 my-5">
            {
                cardItem.map(({id,logo,name,disc})=>(
                    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                        <div>
                            <div className="font-bold px-2 text-xl mb-2">{name}</div>
                            <p className="px-2 text-gray-600">{disc}</p>
                        </div>
                        <div className="flex justify-between px-2 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Perview</button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
