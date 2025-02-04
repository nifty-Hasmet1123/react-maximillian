import TableRow from "./TableRow";
import { TABLE_HEADINGS } from "./data";

export default function TableHead() {
  return (
    <thead>
      <TableRow tableRow={TABLE_HEADINGS} isHeader={true}/>
    </thead>
  );
}