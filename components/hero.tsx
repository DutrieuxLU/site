import { useContext } from 'react'
import { DraggableContext } from '../context/DraggableContext'
import Draggable from 'react-draggable'

const Hero = () => {
  const { draggable } = useContext(DraggableContext);

  return (
    <div className="flex justify-start py-12 lg:py-10 lg:h-screen bg-[#fefae0]">
        <div className="p-4 ml-2 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-[#bc6c25]">


          <h1 className="text-6xl text-[#dda15e] font-bold text-left sm:text-8xl lg:text-9xl">
            Lukas Dutrieux's Homepage
          </h1>
          <div>
            <img
              src="https://media.licdn.com/dms/image/D5603AQFT7KEc4htkjA/profile-displayphoto-shrink_800_800/0/1681150645238?e=1697068800&v=beta&t=fxeWevfcYFg65I-ju4G_roHzgogCQ6h8ftANlrlaeSY"
              alt="Profile"
              className="ml-4 mt-10 sw-40 h-40 lg:w-60 lg:h-60 py-2 px-2 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-[#606c38]"
            />
          </div>
        
        
        </div>
      <div className="ml-4"></div>
      <div className="flex flex-col items-center w-10/14 mx-auto my-auto w-1/2">
        <Draggable disabled={!draggable}>
          <div className="p-4 bg-[#283618] border-4 border-black rounded-sm shadow-blocks shadow-gray-800 mb-4">
          <h3 className="text-lg font-bold sm:text-xl text-[#606c38]">
            <a
              href="http://www.purduehackers.com"
              target="_blank"  // Open link in a new tab
              rel="noopener noreferrer" // Recommended for security
              className="text-[#d9f99d] hover:underline"
            >
              Inspired by 🐐🐐🐐🐐
            </a>
          </h3>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Hero;
