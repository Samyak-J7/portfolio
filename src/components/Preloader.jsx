import { useEffect } from "react";
import { preLoaderAnim } from "../utils/loaderanim.js";

const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  },)



  return (
    <div className="preloader">
      <div className="texts-container items-center text-lg hidden sm:flex">
        <span>Welcome </span> <span>to Portfolio of</span> <span className="font-bold text-[#915eff]">Samyak Jain</span>
      </div>
      <div className="texts-container flex items-center text-lg sm:hidden">
        <span>Welcome </span> <span>to Portfolio of</span> <span className="font-bold text-[#915eff]">Samyak Jain</span>
      </div>
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader;