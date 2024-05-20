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
import { formatDate, formatRepo } from "@/lib/clientLib";
async function ActividadDetail({ params }: any) {
  const log: any = await getLogById(params.idActividad);
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>{formatDate(log.fecha)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>user</TableCell>
            <TableCell>
            <a target="_blank" href={`${formatRepo(log)}`}>
                  {log.user}{log.repo}
                </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>lab</TableCell>
            <TableCell>{log.repo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>fail</TableCell>
            <TableCell>{log.fail}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>pass</TableCell>
            <TableCell>{log.pass}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>resultado</TableCell>
            <TableCell>
                <pre>{log.fichero}</pre></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>codigo</TableCell>
            <TableCell>
                <pre>{log.test}</pre></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default ActividadDetail;
