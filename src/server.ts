import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "Hello!" }));

app.post("/courses", (request, response) => {
  const { name } = request.body;
  return response.json({ name });
});

app.listen(3333, () => {
  console.log("🚀 server started on port 3333!");
});
