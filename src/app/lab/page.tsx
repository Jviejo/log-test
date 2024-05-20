import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { groupByLab } from "@/lib/db";
import Link from "next/link";

async function Lab() {
  const logs = await groupByLab();
  console.log(logs);
  return (
    <div className="">
        <h1 className="text-2xl">Lista Labs</h1>
  
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{"Lab"}</TableHead>
            <TableHead>Contador</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <Link href={`/lab/${item._id}`}>{item._id}</Link>
              </TableCell>
              <TableCell>{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Lab;
