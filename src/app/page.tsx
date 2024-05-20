import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"

const proyectos = [
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "HTML BASICO",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "SQL BASICO",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "SQL AVANZADO",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "JS BASICO ",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "JS EXPRESIONES ",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "JS ESTRUCTURAS ",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "JS ARRAYS Y OBJETOS ",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "JS ORIENTACION A OBJETOS ",
  },
  {
    github: "https://github.com/Jviejo/sql_0010.git",
    descripcion: "JS ASYNC / AWAIT ",
  },
];

export default function Home() {
  return (
    <div className=" m-10  h-50">
      <h1 className="text-xl mb-5">Lista de test</h1>
     
      <ul>
        {proyectos.map((item, index) => (
          <li key={index}>
            <Link className=" text-blue-800" target="_blank" href={item.github}>{item.descripcion}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
