'use client'

interface TipButtonsProps {
  onTipSelect?: (percentage: number) => void;
  selectedTip?: number;
}

export default function TipButtons({ onTipSelect, selectedTip }: TipButtonsProps) {
  const tipPercentages = [5, 10, 15, 25, 50];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-10">
      {tipPercentages.map((tip) => (
        <button 
          key={tip}
          className="bg-button-color p-2.5"
          onClick={() => onTipSelect?.(tip)}
        >
          {tip}%
        </button>
      ))}
      <button 
        className="bg-button-color p-2.5"
        onClick={() => onTipSelect?.(0)}
      >
        Custom
      </button>
    </div>
  );
}