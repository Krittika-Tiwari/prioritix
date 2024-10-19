import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", async (c) => {
  return c.text("hello");
});

app.get("/hello/:name", async (c) => {
  const name = c.req.param("name");
  return c.text(`hello ${name}`);
});
export const GET = handle(app);
