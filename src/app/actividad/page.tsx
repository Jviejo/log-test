import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { getLog } from "@/lib/db";
import { formatDate } from "@/lib/clientLib";
import React from "react";
import Link from "next/link";
import { formatRepo } from "@/lib/clientLib";
async function Actividad() {
  const logs = await getLog();
 
  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{"fecha"}</TableHead>
            <TableHead>{"user repo"}</TableHead>
            <TableHead>{"lab"}</TableHead>
            <TableHead>{"pass"}</TableHead>
            <TableHead>{"fail"}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((item: any) => (
            <TableRow key={item._id}>
              <TableCell>
                <Link href={`/actividad/${item._id}`}>
                  {formatDate(new Date(item.date))}
                </Link>
              </TableCell>
              
              <TableCell>
                <a target="_blank" href={`${formatRepo(item)}`}>
                  {item.user}{item.repo}
                </a>
              </TableCell>
              <TableCell>{item.repo}</TableCell>
              <TableCell className="text-blue-800">{item.pass}</TableCell>
              <TableCell className="text-red-800">{item.fail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Actividad;
