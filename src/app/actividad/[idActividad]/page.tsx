import { getLogById } from "@/lib/db";
import React from "react";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { formatDate } from "@/lib/clientLib";
async function ActividadDetail({ params }: any) {
  const log: any = await getLogById(params.idActividad);
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableHeader>Fecha</TableHeader>
            <TableCell>{formatDate(log.fecha)}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>user</TableHeader>
            <TableCell>{log.user}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>lab</TableHeader>
            <TableCell>{log.repo}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>fail</TableHeader>
            <TableCell>{log.fail}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>pass</TableHeader>
            <TableCell>{log.pass}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>resultado</TableHeader>
            <TableCell>
                <pre>{log.fichero}</pre></TableCell>
          </TableRow>
          <TableRow>
            <TableHeader>codigo</TableHeader>
            <TableCell>
                <pre>{log.test}</pre></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ActividadDetail;
