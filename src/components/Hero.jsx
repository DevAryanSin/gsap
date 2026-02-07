import { useState } from "react";

function Hero() {

  const [currentIndex, setCurrentIndex] = useState(1)

  const handleMiniVidClick = () =>{

  }
  
  return (
    <div className = "relative h-dvh w-screen overflow-x-hidden">
      <div id = "video-frame" className = "relative z-10 h-dvh w-screen overflow-hidden bg-blue-75 rounded-lg">
      <div> 
        <div className = "mask-clip-path absolute-center absolute z-50 size-64 overflow-hidden cursor-pointer rounded-lg">
        <div> 
          Mini video player

        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero