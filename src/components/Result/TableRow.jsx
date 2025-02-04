import { formatter } from "../../util/investment";

export default function TableRow({ tableRow, initialInvestment, isHeader }) {
  if (isHeader && tableRow) {
    return <tr>
      {
        tableRow.map((value, index) => <td key={`${value}${index}`}>{value}</td>)
      }
    </tr>
  }

  return (
    <>
      {
        tableRow.map((listObjects, index) => {
          listObjects["initialInvestment"] = initialInvestment;

          return <tr key={index} className="center">
            <ExtractedData objects={listObjects} />
          </tr>
        })
      }
    </>
  );
}

function ExtractedData({ objects }) {
  const { year, interest, valueEndOfYear, annualInvestment, initialInvestment } = objects;
  const { format } = formatter;

  const totalInterest = (valueEndOfYear - annualInvestment * year) - initialInvestment;
  const totalAmountInvested = valueEndOfYear - totalInterest;

  return (
    <>
      <td>{year}</td>
      <td>{format(valueEndOfYear)}</td>
      <td>{format(interest)}</td>
      <td>{format(totalInterest)}</td>
      <td>{format(totalAmountInvested)}</td>
    </>
  );
}