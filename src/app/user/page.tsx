import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { groupByUser } from "@/lib/db";
import Link from "next/link";

async function User() {
  const logs = await groupByUser();
  console.log(logs);
  return (
    <div className="w-100">
        <h1 className="text-2xl">Lista usuarios</h1>
  
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{"user"}</TableHead>
            <TableHead>Contador</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <Link href={`/user/${encodeURIComponent(item._id)}`}>{item._id}</Link>
              </TableCell>
              <TableCell>{item.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default User;
