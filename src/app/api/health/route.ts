import { count } from "drizzle-orm";
import { getDb } from "@/db";
import { users } from "@/db/schema";

export async function GET() {
  const [{ value }] = await getDb().select({ value: count() }).from(users);
  return Response.json({ db: "ok", users: value });
}
