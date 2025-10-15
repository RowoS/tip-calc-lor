import Image from "next/image";
import LogoIcon from "../public/logo.svg"
import DollarIcon from "../public/icon-dollar.svg"
import PersonIcon from "../public/icon-person.svg"
import InputField from "./components/InputField";
import OutputField from "./components/OutputField";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image 
          src={LogoIcon}
          alt=""
        />
        <div className="bg-main-container-color max-w-4x1 rounded-3xl p-8 mt-10">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col col-start-1">
              <p className="text-m text-label-text-color">Bill</p>
              <InputField icon={DollarIcon} />

              <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-10"> {/* Button Component to be Implemented */}
                <button className="bg-button-color p-2.5">5%</button>
                <button className="bg-button-color p-2.5">10%</button>
                <button className="bg-button-color p-2.5">15%</button>
                <button className="bg-button-color p-2.5">25%</button>
                <button className="bg-button-color p-2.5">50%</button>
                <button className="bg-button-color p-2.5">Custom</button>
              </div>

              <p className="text-m text-label-text-color mt-10">Number of People</p>
              <InputField icon={PersonIcon} />
            </div>
            <div className="bg-output-container-color flex flex-col col-start-2">
              <div className="pt-4"></div> 
              <OutputField label="Tip Amount" amount={0}/>
              <OutputField label="Total" amount={0} />

              <div className="bg-output-color text-output-container-color flex max-w-50 w-50 p-4 justify-center items-center self-center mt-16 rounded-lg">
                <button className="text-reset-text-color">RESET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
