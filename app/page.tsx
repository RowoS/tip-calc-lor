"use client";

import Image from "next/image";
import LogoIcon from "../public/logo.svg"
import DollarIcon from "../public/icon-dollar.svg"
import PersonIcon from "../public/icon-person.svg"
import InputField from "./components/InputField";
import OutputField from "./components/OutputField";
import TipButtons from "./components/TipButtons";

import { useState } from "react";
import { calculateTipPerPerson, calculateTotalPerPerson, showErrorMessage, isValidNumberInput } from "./utils/TipCalcs";
import { calculationProps } from "./types";

export default function Home() {

  const [ billAmount, setBillAmount ] = useState<string>("");
  const [ tipPercentage, setTipPercentage ] = useState<number>(0);
  const [ numberOfPeople, setNumberOfPeople ] = useState<string>("");
  const [ customTip, setCustomTip] = useState<string>("");
  const [ errorMessage, setErrorMessage ] = useState<boolean>(false);
  
  const calcHelper: calculationProps = {
    billAmount: billAmount,
    tipPercentage: tipPercentage,
    customTip: customTip,
    numberOfPeople: numberOfPeople
  }

  const handleBillChange = (value: string) => {
    if (isValidNumberInput(value, true)) {
      setBillAmount(value);
    }
    
  };

  const handlePeopleChange = (value: string) => {
    if (isValidNumberInput(value, false))
    {
      setNumberOfPeople(value);
      setErrorMessage(showErrorMessage(value));
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
    if (isValidNumberInput(value, true) && !Number.isNaN(parseFloat(value)))
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

  const handleReset = () => {
    setBillAmount("");
    setTipPercentage(0);
    setNumberOfPeople("");
    setCustomTip("");
    setErrorMessage(false);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-4">
        <Image 
          src={LogoIcon}
          alt=""
          className="mb-6 sm:mb-0"
        />
        <div className="bg-main-container-color w-full max-w-4xl rounded-3xl p-6 sm:p-8 mt-6 sm:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col">
              
              <p className="text-sm sm:text-base text-label-text-color mb-2">Bill</p>
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
              
              <div className="mt-8 sm:mt-10">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm sm:text-base text-label-text-color">Number of People</p>
                  {errorMessage && (
                    <p className="text-xs text-red-500">Can`t be zero</p>
                  )}       
                </div>

                <InputField
                  icon={PersonIcon}
                  value={numberOfPeople}
                  onChange={handlePeopleChange}
                  type="text"
                  error={errorMessage}
                />
                
              </div>
            
            </div>
            <div className="bg-output-container-color flex flex-col rounded-2xl p-6 sm:p-8">
              
              <OutputField 
                label="Tip Amount" 
                amount={calculateTipPerPerson(calcHelper)}
              />
              <OutputField 
                label="Total" 
                amount={calculateTotalPerPerson(calcHelper)} 
              />

              <div className="mt-8 sm:mt-16">
                <button 
                  className="bg-output-color text-output-container-color w-full p-3 sm:p-4 rounded-lg text-reset-text-color cursor-pointer hover:bg-button-hover-color transition-colors font-bold"
                  onClick={handleReset}
                >
                  RESET
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
