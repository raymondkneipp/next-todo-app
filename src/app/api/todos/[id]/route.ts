import * as z from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { todos } from "@/db/schema";

const routeContextSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});

const todoUpdateScheme = z.object({
  title: z.string(),
  completed: z.number(),
});

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  const { params } = routeContextSchema.parse(context);

  const json = await req.json();
  const body = todoUpdateScheme.parse(json);

  const updatedTodo = db.update(todos)
    .set({ title: body.title, completed: body.completed })
    .where(eq(todos.id, parseInt(params.id))).returning().get();

  return new Response(JSON.stringify(updatedTodo));
}
