import Image from "next/image";
import LogoIcon from "../public/logo.svg"
import DollarIcon from "../public/icon-dollar.svg"
import PersonIcon from "../public/icon-person.svg"

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
              <p className="text-2xl text-label-text-color">Bill</p>
              <div className="bg-input-field-color flex flex-row border-black w-full justify-between"> {/*Input Field Component*/}
                <Image
                  src={DollarIcon}
                  alt=""
                />
                <input className="ml-4 text-input-text-color text-right text-4x1" 
                  type="text"
                  placeholder="0"
                />
              </div> {/*Input Field Component*/}

              <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-10"> {/* Button Component to be Implemented */}
                <button className="bg-button-color p-2.5">5%</button>
                <button className="bg-button-color p-2.5">10%</button>
                <button className="bg-button-color p-2.5">15%</button>
                <button className="bg-button-color p-2.5">25%</button>
                <button className="bg-button-color p-2.5">50%</button>
                <button className="bg-button-color p-2.5">Custom</button>
              </div>

              <p className="text-2xl text-label-text-color mt-10">Number of People</p>
              <div className="bg-input-field-color flex flex-row border-black w-full justify-between"> {/*Input Field Component*/}
                <Image
                  src={PersonIcon}
                  alt=""
                />
                <input className="ml-4 text-input-text-color text-right text-4x1" 
                  type="text"
                  placeholder="0"
                />
              </div> {/*Input Field Component*/}
            </div>
            <div className="bg-output-container-color flex flex-col col-start-2"> 
              <div className="grid grid-cols-2 p-8 pt-10 justify-between"> {/* Output Field Component to Implement */}
                <div className="col-start-1">
                  <div className="flex flex-col text-xs">
                    <p className="font-semibold">Tip Amount</p>
                    <p className="text-[10px] opacity-50">/ person</p>
                  </div>
                </div>
                <div className="col-start-2">
                  <p className="text-2xl text-right text-output-color">$0.00</p>
                </div>
              </div> {/* Output Field Component to Implement */}
              <div className="grid grid-cols-2 pr-8 pl-8 justify-between mt-2"> {/* Output Field Component to Implement */}
                <div className="col-start-1">
                  <div className="flex flex-col text-xs">
                    <p className="font-semibold">Total</p>
                    <p className="text-[10px] opacity-50">/ person</p>
                  </div>
                </div>
                <div className="col-start-2">
                  <p className="text-2xl text-right text-output-color">$0.00</p>
                </div>
              </div> {/* Output Field Component to Implement */}

              <div className="bg-output-color text-output-container-color flex p-4 justify-center items-center mt-16">
                <button className="text-reset-text-color">RESET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
