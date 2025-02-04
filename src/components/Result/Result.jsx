import RenderTable from "./RenderTable";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function Result({investments}) {
  return (
    <section>
      <RenderTable id="result">
        <TableHead />
        <TableBody investments={investments}/>
      </RenderTable>
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