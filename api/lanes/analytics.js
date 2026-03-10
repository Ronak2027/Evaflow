const shipments = [
  { id: 1, origin: 'Mumbai', destination: 'Delhi', co2Emission: 532.50, distance: 1420, weight: 5000, truckType: 'Heavy', fuelType: 'Diesel', carrierName: 'ABC Logistics', shipmentDate: '2026-01-15' },
  { id: 2, origin: 'Delhi', destination: 'Bangalore', co2Emission: 698.25, distance: 2100, weight: 3500, truckType: 'Medium', fuelType: 'Diesel', carrierName: 'XYZ Transport', shipmentDate: '2026-01-20' },
  { id: 3, origin: 'Bangalore', destination: 'Chennai', co2Emission: 66.50, distance: 350, weight: 2000, truckType: 'Light', fuelType: 'CNG', carrierName: 'Green Freight', shipmentDate: '2026-02-05' },
  { id: 4, origin: 'Mumbai', destination: 'Hyderabad', co2Emission: 303.52, distance: 710, weight: 4500, truckType: 'Medium', fuelType: 'Diesel', carrierName: 'ABC Logistics', shipmentDate: '2026-02-10' },
  { id: 5, origin: 'Pune', destination: 'Delhi', co2Emission: 368.10, distance: 818, weight: 6000, truckType: 'Heavy', fuelType: 'Diesel', carrierName: 'Fast Cargo', shipmentDate: '2026-02-15' }
];

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  const laneData = {};
  const shipments = [
    { id: 1, origin: 'Mumbai', destination: 'Delhi', co2Emission: 532.50, distance: 1420 },
    { id: 2, origin: 'Delhi', destination: 'Bangalore', co2Emission: 698.25, distance: 2100 },
    { id: 3, origin: 'Bangalore', destination: 'Chennai', co2Emission: 66.50, distance: 350 },
    { id: 4, origin: 'Mumbai', destination: 'Hyderabad', co2Emission: 303.52, distance: 710 },
    { id: 5, origin: 'Pune', destination: 'Delhi', co2Emission: 368.10, distance: 818 }
  ];
  shipments.forEach(s => {
    const lane = `${s.origin} → ${s.destination}`;
    if (!laneData[lane]) {
      laneData[lane] = { totalEmissions: 0, count: 0, totalDistance: 0 };
    }
    laneData[lane].totalEmissions += s.co2Emission;
    laneData[lane].count += 1;
    laneData[lane].totalDistance += s.distance;
  });
  
  const result = Object.entries(laneData).map(([lane, data]) => ({
    lane,
    totalEmissions: data.totalEmissions,
    shipmentCount: data.count,
    avgEmission: data.totalEmissions / data.count,
    totalDistance: data.totalDistance
  }));
  
  res.status(200).json(result);
};
