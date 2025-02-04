import { formatter } from "../../util/investment";

export default function TableRow({ tableRow, isHeader }) {
  if (isHeader) {
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
          return <tr key={index} className="center">
            <ExtractedData objects={listObjects}/>
          </tr>
        })
      }
    </>
  );
}

function ExtractedData({ objects }) {
  const { year, interest, valueEndOfYear, annualInvestment } = objects;
  const { format } = formatter;

  return (
    <>
      <td>{year}</td>
      <td>{format(interest)}</td>
      <td>{format(valueEndOfYear)}</td>
      <td>{format(annualInvestment)}</td>
    </>
  );
}