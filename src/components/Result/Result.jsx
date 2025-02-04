import RenderTable from "./RenderTable";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { calculateInvestmentResults } from "../../util/investment";

function Result({ investments }) {
  const bodyResult = calculateInvestmentResults(investments);
  
  return (
    <section>
      {
        bodyResult.length > 0
          ? (
            <RenderTable id="result">
              <TableHead />
              <TableBody investments={investments} bodyResult={bodyResult} />
            </RenderTable>
          )
          : <h1 className="center">Please Enter a valid duration value</h1>
      }
    </section>
  );
}


// function sample() {
//   return (
//     <table id="result">
//       <thead>
//         <tr>
//           <td>hello</td>
//           <td>hello</td>
//           <td>hello</td>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>asdf</td>
//           <td>asdf</td>
//           <td>asdf</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// }


export default Result;