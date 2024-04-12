import { NextRequest, NextResponse } from 'next/server'
import { client } from "@/lib/mongoClient";

export async function POST(request: NextRequest,  ) {
  // const fichero = await request.text()
  const url = new URL(request.url)
  const user = url.searchParams.get("user")
  const respo = url.searchParams.get("repo")
  const pass = url.searchParams.get("pass")
  const fail = url.searchParams.get("fail")
  console.log(user, respo, pass, fail)



  const formData = await request.formData()
  const f = await formData.get("file")
  const t = await formData.get("test")
  
  await client.db("logs").collection("log").insertOne({ 
    user: user,
    repo: respo,
    pass: pass,
    fail: fail,
    date: new Date(),
    fichero: f,
    test: t
   })
  // console.log(formData);
  // const fichero = formData.keys()

  const r = new Response(t)
  r.headers.set('Content-Type', 'text/plain')
  return r
}