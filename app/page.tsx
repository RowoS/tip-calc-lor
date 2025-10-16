"use client";

import Image from "next/image";
import LogoIcon from "../public/logo.svg"
import DollarIcon from "../public/icon-dollar.svg"
import PersonIcon from "../public/icon-person.svg"
import InputField from "./components/InputField";
import OutputField from "./components/OutputField";
import TipButtons from "./components/TipButtons";

import { useState } from "react";
import { calculateTipPerPerson, calculateTotalPerPerson } from "./utils/TipCalcs";
import { calculationProps } from "./types";

export default function Home() {

  const [ billAmount, setBillAmount ] = useState<string>("");
  const [ tipPercentage, setTipPercentage ] = useState<number>(0);
  const [ numberOfPeople, setNumberOfPeople ] = useState<string>("");
  const [ customTip, setCustomTip] = useState<string>("");
  
  const calcHelper: calculationProps = {
    billAmount: billAmount,
    tipPercentage: tipPercentage,
    customTip: customTip,
    numberOfPeople: numberOfPeople
  }

  const handleBillChange = (value: string) => {
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setBillAmount(value);
    }
    
  };

  const handlePeopleChange = (value: string) => {
    if (value === "" || /^\d+$/.test(value))
    {
      setNumberOfPeople(value);
    }
  };

  const handleTipSelect = (percent: number) => {
    setTipPercentage(percent);
    if (percent !== 0)
    {
      setCustomTip("");
    }
  };

  const handleCustomTipChange = (value: string) => {
    if ((value === "" || /^\d*\.?\d*$/.test(value)) && !Number.isNaN(parseFloat(value)))
    {
      setCustomTip(value);
      const val = parseFloat(value);
      setTipPercentage(val);
    }
    else {
      setTipPercentage(0);
      setCustomTip("");
    }
    
  };

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
              <InputField 
                icon={DollarIcon}
                value={billAmount}
                onChange={handleBillChange}
                type="text" 
              />
              
              <TipButtons 
                onTipSelect={handleTipSelect}
                selectedTip={tipPercentage}
                customTip={customTip}
                onCustomTipChange={handleCustomTipChange}
              />
              
              <p className="text-m text-label-text-color mt-10">Number of People</p>
              
              <InputField
               icon={PersonIcon}
               value={numberOfPeople}
               onChange={handlePeopleChange}
               type="text"
              />
            
            </div>
            <div className="bg-output-container-color flex flex-col col-start-2">
              
              <div className="pt-4"></div> 
              
              <OutputField 
                label="Tip Amount" 
                amount={calculateTipPerPerson(calcHelper)}
              />
              <OutputField 
                label="Total" 
                amount={calculateTotalPerPerson(calcHelper)} 
              />

              <div className="bg-output-color text-output-container-color flex max-w-50 w-50 p-4 justify-center items-center self-center mt-16 rounded-lg">
                <button 
                  className="text-reset-text-color"
                >RESET</button>
              
              </div>
            </div>
          </div>
        </div>

        <div className="text-input-text-color">
          Bill = {billAmount}
          Tip Percent = {tipPercentage}
          Number of PPL = {numberOfPeople}
        </div>
      </div>
    </>
  );
}
