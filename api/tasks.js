import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  // GET /api/tasks — load every task
  if (req.method === "GET") {
    const tasks = await sql`SELECT * FROM tasks ORDER BY created_at ASC`;
    return res.json(tasks);
  }

  // POST /api/tasks — create a new task
  if (req.method === "POST") {
    const { title, col, tag, date } = req.body;
    const result = await sql`
      INSERT INTO tasks (title, col, tag, date)
      VALUES (${title}, ${col}, ${tag}, ${date})
      RETURNING *
    `;
    return res.json(result[0]);
  }

  // PATCH /api/tasks — update complete status
  if (req.method === "PATCH") {
    const { id, complete } = req.body;
    const result = await sql`
      UPDATE tasks SET complete = ${complete}
      WHERE id = ${id} RETURNING *
    `;
    return res.json(result[0]);
  }

  // DELETE /api/tasks — remove a task
  if (req.method === "DELETE") {
    const { id } = req.body;
    await sql`DELETE FROM tasks WHERE id = ${id}`;
    return res.json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
