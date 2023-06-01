import * as z from "zod";
import { db } from "@/db";
import { todos } from "@/db/schema";

const todoCreateSchema = z.object({
  title: z.string(),
  completed: z.boolean(),
});

export async function POST(req: Request) {
  const json = await req.json();
  const body = todoCreateSchema.parse(json);

  const newTodo = db.insert(todos).values({
    title: body.title,
    completed: body.completed ? 1 : 0,
  }).returning().get();

  return new Response(JSON.stringify(newTodo));
}
