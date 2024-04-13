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
  return await db.collection("log").findOne({ _id: new ObjectId(id) })
}

export async function getLogByUser(user: string) {
  const user2 = decodeURIComponent(user)
  const db = await client.db("logs")
  const data = await db.collection("log").find({ user: user2 }).toArray()
  console.log(data)
  return await json(data)
}

export async function getLogByLab(repo: string) {
  const repo2 = decodeURIComponent(repo)
  const db = await client.db("logs")
  const data = await db.collection("log").find({ repo: repo2 }).toArray()
  console.log(data)
  return await json(data)
}
export async function addLog(log: any) {
  const db = await client.db("logs")
  return json(await db.collection("log").insertOne(log))
}

export async function groupByUser() {
  const db = await client.db("logs")
  const r =  await db.collection("log").aggregate([
    {
      $group: {
          _id: "$user",
          count: {
              $sum: 1
          }
      }
  }
  ]).toArray()
  return json(r)
}

export async function groupByLab() {
  const db = await client.db("logs")
  const r =  await db.collection("log").aggregate([
    {
      $group: {
          _id: "$repo",
          count: {
              $sum: 1
          }
      }
  }
  ]).toArray()
  return json(r)
}