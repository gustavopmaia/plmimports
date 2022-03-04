import app from './app';
const PORT = 8080;

app.listen(8080, () => {
  console.log(`[server] server running on http://localhost:${PORT}`);
});
