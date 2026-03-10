export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json([
    { month: '2026-01', totalEmissions: 1230.75, shipmentCount: 2 },
    { month: '2026-02', totalEmissions: 738.12, shipmentCount: 3 }
  ]);
}
