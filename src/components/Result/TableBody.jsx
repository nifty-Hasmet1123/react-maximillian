import { calculateInvestmentResults } from "../../util/investment";
import TableRow from "./TableRow";

export default function TableBody({ investments, bodyResult }) {
  // const bodyResult = calculateInvestmentResults(investments);
  
  return (
    <tbody>
      <TableRow tableRow={bodyResult} initialInvestment={investments.initialInvestment} />
    </tbody>
  );
}