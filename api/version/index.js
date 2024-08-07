module.exports = (req, res) => {
  if (req.method === 'GET') {
    res.json({ version: "3.1" });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
