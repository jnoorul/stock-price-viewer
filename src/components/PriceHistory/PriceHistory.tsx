import { ReactNode } from 'react';
import { Price } from '../../api/stock-price';

export function PriceHistory({ prices }: { prices: Price[] }) {
  return (
    <div>
      <h1 className="font-bold text-lg">Price History</h1>
      <table className="mt-4">
        <PriceHeader />
        {prices.map((price) => (
          <PriceRow price={price} />
        ))}
      </table>
    </div>
  );
}

function PriceRow({ price }: { price: Price }) {
  return (
    <tr className="py-4 text-gray-700 text-sm border-b">
      <DataCell>{price.date}</DataCell>
      <DataCell>{price.open}</DataCell>
      <DataCell>{price.close}</DataCell>
      <DataCell>{price.high}</DataCell>
      <DataCell>{price.low}</DataCell>
    </tr>
  );
}

function PriceHeader() {
  return (
    <tr className="py-4 text-gray-900 text-sm font-semibold border-b-2 text-left">
      <HeaderCell>Date</HeaderCell>
      <HeaderCell>Open</HeaderCell>
      <HeaderCell>Close</HeaderCell>
      <HeaderCell>High</HeaderCell>
      <HeaderCell>Low</HeaderCell>
    </tr>
  );
}

const HeaderCell = ({ children }: { children: ReactNode }) => (
  <th className="pr-4 py-2">{children}</th>
);
const DataCell = ({ children }: { children: ReactNode }) => (
  <td className="pr-4 py-2">{children}</td>
);
