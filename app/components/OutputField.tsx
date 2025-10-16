interface OutputFieldProps {
  label: string;
  amount: number;
}

export default function OutputField({ label, amount }: OutputFieldProps) {
  return (
    <div className="flex justify-between items-center py-4 sm:py-6">
      <div className="flex flex-col text-xs sm:text-sm">
        <p className="font-semibold text-white">{label}</p>
        <p className="text-[10px] sm:text-xs opacity-50 text-white">/ person</p>
      </div>
      <p className="text-3xl sm:text-4xl text-output-color font-bold">
        ${amount.toFixed(2)}
      </p>
    </div>
  )
};