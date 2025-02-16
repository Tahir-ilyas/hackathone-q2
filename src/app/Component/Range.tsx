
import React from 'react';

const Range = () => {
  return (
    <div className="max-w-[1183px] w-full mt-10 mx-auto px-4">
      <div className="text-center">
        <h3 className="font-bold text-[32px] font-poppins">Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Dining */}
        <div className="flex flex-col items-center">
          <img 
            src="/image/dining.png" 
            alt="Dining" 
            width={381} 
            height={480} 
            className="w-full max-w-[381px] h-auto object-cover"
          />
          <span className="mt-2 font-semibold font-poppins">Dining</span>
        </div>

        {/* Living */}
        <div className="flex flex-col items-center">
          <img 
            src="/image/living.png" 
            alt="Living" 
            width={381} 
            height={480} 
            className="w-full max-w-[381px] h-auto object-cover"
          />
          <span className="mt-2 font-semibold font-poppins">Living</span>
        </div>

        {/* Bedroom */}
        <div className="flex flex-col items-center">
          <img 
            src="/image/bedroom.png" 
            alt="Bedroom" 
            width={381} 
            height={480} 
            className="w-full max-w-[381px] h-auto object-cover"
          />
          <span className="mt-2 font-semibold font-poppins text-[#333333]">Bedroom</span>
        </div>
      </div>
    </div>
  );
};

export default Range;
