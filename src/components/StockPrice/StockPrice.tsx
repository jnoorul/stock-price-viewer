export function StockPrice({ ticker }: { ticker: string }) {
  return (
    <div className="px-4 py-1 sm:w-full md:w-80">
      <LabelValue label="Ticker" value={ticker} />
      <LabelValue label="Open" value="100.0" />
      <LabelValue label="Close" value="100.0" />
      <LabelValue label="Book Value" value="100.0" />
      <LabelValue label="Volume" value="100.0" />
    </div>
  );
}

interface LabelValueProps {
  label: string;
  value?: string;
}

export function LabelValue({ label, value }: LabelValueProps) {
  return (
    <div className="py-2 border-b border-gray-300 flex flex-row justify-between">
      <label>{label}</label>
      <h5 className="font-semibold">{value}</h5>
    </div>
  );
}
