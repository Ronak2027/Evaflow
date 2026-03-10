export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    insights: [
      "Consider optimizing routes between Mumbai and Delhi for better fuel efficiency",
      "CNG trucks show 20% lower emissions on average",
      "Heavy trucks contribute 60% of total emissions"
    ]
  });
}
