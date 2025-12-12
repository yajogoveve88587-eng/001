import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const query = req.query;
  // 拼接 Google API 地址
  const params = new URLSearchParams(query).toString();
  const googleUrl = `https://www.googleapis.com/customsearch/v1?${params}`;

  try {
    const response = await fetch(googleUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
