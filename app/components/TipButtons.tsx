'use client'

interface TipButtonsProps {
  onTipSelect?: (percentage: number) => void;
  selectedTip?: number;
  customTip?: string;
  onCustomTipChange?: (value: string) => void;
}

export default function TipButtons(tipProps : TipButtonsProps) {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div className="mt-6 sm:mt-10">
      <p className="text-sm sm:text-base text-label-text-color mb-2">Select Tip %</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {tipPercentages.map((tip) => (
          <button 
            key={tip}
            className={`p-2 sm:p-2.5 text-xl sm:text-2xl rounded-md cursor-pointer transition-colors font-bold ${
              tipProps.selectedTip === tip && !tipProps.customTip
                ? 'bg-output-color text-output-container-color'
                : 'bg-button-color hover:bg-button-hover-color hover:text-output-container-color'
            }`}
            onClick={() => tipProps.onTipSelect?.(tip)}
          >
            {tip}%
          </button>
        ))}
        <input 
          type="text"
          className="bg-input-field-color text-input-text-color text-center text-xl sm:text-2xl rounded-md cursor-pointer 
                    border-2 border-transparent hover:border-input-field-hover-color transition-colors outline-none p-2 sm:p-2.5 font-bold placeholder:font-normal" 
          placeholder="Custom"
          value={tipProps.customTip}
          onChange={(e) => tipProps.onCustomTipChange?.(e.target.value)}
        />
      </div>
    </div>
  );
}