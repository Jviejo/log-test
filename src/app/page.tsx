import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

/**
 * 
 * 
js_0010_basico_test
js_0020_expresiones_test
js_0030_algo_test
js_0040_arr_obj_test
js_0045_oo_test
js_0050_async_await_test
 */

const categorias = [
  {
    nombre: "sql",
    descripcion: "sql",
  },
  {
    nombre: "js",
    descripcion: "javascript",
  },
];
const proyectos = [
  {
    categoria: "sql",
    github: "https://github.com/codecrypto-academy/sql_0010_basico_test.git",
    descripcion: "sql_0010_basico_test",
  },
  {
    categoria: "sql",
    github: "https://github.com/codecrypto-academy/sql_0020_avanzado_test.git",
    descripcion: "sql_0020_avanzado_test",
  },
  {
    categoria: "js",
    github: "https://github.com/codecrypto-academy/js_0010_basico_test.git",
    descripcion: "js_0010_basico_test",
  },
  {
    categoria: "js",
    github:
      "https://github.com/codecrypto-academy/js_0020_expresiones_test.git",
    descripcion: "js_0020_expresiones_test",
  },
  {
    categoria: "js",
    github: "https://github.com/codecrypto-academy/js_0030_algo_test.git",
    descripcion: "js_0030_algo_test",
  },
  {
    categoria: "js",
    github: "https://github.com/codecrypto-academy/js_0040_arr_obj_test.git",
    descripcion: "js_0040_arr_obj_test",
  },
  {
    categoria: "js",
    github: "https://github.com/codecrypto-academy/js_0045_oo_test.git",
    descripcion: "js_0045_oo_test",
  },
  {
    categoria: "js",
    github:
      "https://github.com/codecrypto-academy/js_0050_async_await_test.git",
    descripcion: "js_0050_async_await_test",
  },
];

export default function Home() {
  return (
    <div className=" m-10  h-50">
      <h1 className="text-2xl mb-5">Lista de test</h1>
      {categorias.map((item, index) => (
        <>
          <h2 className="text-xl">{item.descripcion}</h2>
          <ul className="mb-3 mt-2">
            {proyectos.filter(i => i.categoria == item.nombre).map((item, index) => (
              <li key={index}>
                <Link
                  className=" text-blue-800"
                  target="_blank"
                  href={item.github}
                >
                  {item.descripcion}
                </Link>
              </li>
            ))}
          </ul>
        </>
      ))}
     
    </div>
  );
}
