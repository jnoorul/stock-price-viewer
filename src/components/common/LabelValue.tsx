interface LabelValueProps {
  label: string;
  value?: string | number;
}

export function LabelValue({ label, value = '' }: LabelValueProps) {
  return (
    <div className="py-2 border-b border-gray-300 flex flex-row justify-between">
      <label>{label}</label>
      <h5 className="font-semibold">{value}</h5>
    </div>
  );
}
