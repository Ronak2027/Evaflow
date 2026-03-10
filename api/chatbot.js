module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'POST') {
    res.status(200).json({
      response: "Based on your shipment data, I recommend optimizing your Mumbai-Delhi route and considering more CNG vehicles to reduce emissions by approximately 15-20%."
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
