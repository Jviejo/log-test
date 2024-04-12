"use server"
import { client } from '@/lib/mongoClient';
import { json } from './clientLib';
import { ObjectId } from 'mongodb';


  
export async function getLog() {
  const db = await client.db("logs")
  return json(await db.collection("log").find().toArray())
}

export async function getLogById(id: string) {
  console.log(id)
  const db = await client.db("logs")
  return await db.collection("log").findOne({_id:new ObjectId(id)})
}

export async function addLog(log: any) {
    const db = await client.db("test")
    return json(await db.collection("log").insertOne(log))
}