interface OutputFieldProps {
  label: string;
  amount: number;
}

export default function OutputField({ label, amount }: OutputFieldProps) {
  return (
    <div className="grid grid-cols-2 p-4 justify-between">
      <div className="col-start-1">
        <div className="flex flex-col text-xs ml-3">
          <p className="font-semibold">{label}</p>
          <p className="text-[10px] opacity-50">/ person</p>
        </div>
      </div>
      <div className="col-start-2">
        <p className="text-4xl text-right text-output-color mr-3">
          ${amount.toFixed(2)}
        </p>
      </div>
    </div>
  )
};