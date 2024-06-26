import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatRepo } from "@/lib/clientLib";
import { getLogByLab } from "@/lib/db";
import Link from "next/link";

async function ActividadLab({params}:any) {

  const logs = await  getLogByLab(params.idLab);

  return ( <div className="w-100">
    <h1 className="text-2xl">Lista de test realizados en {params.idLab}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{"fecha"}</TableHead>
            <TableHead>{"user"}</TableHead>
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

export default ActividadLab;
