import Draggable from 'react-draggable'
import { useContext } from 'react'

import { DraggableContext } from '../context/DraggableContext'

const Hero = () => {
  const { draggable } = useContext(DraggableContext);

  return (
    <div className="flex flex-col items-center justify-between py-12 lg:py-10 lg:h-screen bg-amber-100">
      <Draggable disabled={!draggable}>
        <div className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-amber-400 lg:w-auto">
          <h1 className="text-6xl font-bold text-center sm:text-8xl lg:text-9xl">
            Lukas Dutrieux's Homepage
          </h1>
        </div>
      </Draggable>
      <Draggable disabled={!draggable}>
        <div className="w-10/12 p-6 border-4 border-black rounded-sm shadow-blocks shadow-gray-800 bg-amber-400 lg:w-auto">
          <img src="styles\ikxlrhog.bmp" alt="Mihawk" />
        </div>
      </Draggable>
      <div className="flex flex-col items-center">
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2 mb-4">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                💛⚡️ a community of students who collaborate, learn, and build
                kick-ass technical projects
              </p>
            </div>
          </div>
        </Draggable>
        <Draggable disabled={!draggable}>
          <div className="w-10/12 mx-auto sm:w-1/2">
            <div className="p-4 bg-white border-4 border-black rounded-sm shadow-blocks shadow-gray-800">
              <p className="text-lg font-bold sm:text-xl">
                Heavily inspired by the hard work of Purdue Hackers and the Purdue Computer Science Community
              </p>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  );
};


export default Hero
