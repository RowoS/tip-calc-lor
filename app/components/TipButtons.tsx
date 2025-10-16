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
    <div className="grid grid-cols-3 text-2xl grid-rows-2 gap-2 mt-10 max-w-100">
      {tipPercentages.map((tip) => (
        <button 
          key={tip}
          className={`p-2.5 w-25.3 rounded-md cursor-pointer transition-colors ${
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
        className="bg-input-field-color text-input-text-color text-center rounded-md cursor-pointer 
                    border-2 border-transparent hover:border-input-field-hover-color transition-colors outline-none" 
        placeholder="Custom"
        value={tipProps.customTip}
        onChange={(e) => tipProps.onCustomTipChange?.(e.target.value)}
      />
    </div>
  );
}