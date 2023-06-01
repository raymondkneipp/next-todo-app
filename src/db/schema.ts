import {
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { InferModel } from "drizzle-orm";
import { db } from ".";

export const todos = sqliteTable("todo", {
  id: integer("id").primaryKey(),
  title: text("title"),
  completed: integer("completed"),
});

export type Todo = InferModel<typeof todos>;
export type InsertTodo = InferModel<typeof todos, "insert">;

migrate(db, { migrationsFolder: "src/db/migrations" });
