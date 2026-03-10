const shipments = [
  { id: 1, origin: 'Mumbai', destination: 'Delhi', co2Emission: 532.50, distance: 1420, weight: 5000, truckType: 'Heavy', fuelType: 'Diesel', carrierName: 'ABC Logistics', shipmentDate: '2026-01-15' },
  { id: 2, origin: 'Delhi', destination: 'Bangalore', co2Emission: 698.25, distance: 2100, weight: 3500, truckType: 'Medium', fuelType: 'Diesel', carrierName: 'XYZ Transport', shipmentDate: '2026-01-20' },
  { id: 3, origin: 'Bangalore', destination: 'Chennai', co2Emission: 66.50, distance: 350, weight: 2000, truckType: 'Light', fuelType: 'CNG', carrierName: 'Green Freight', shipmentDate: '2026-02-05' },
  { id: 4, origin: 'Mumbai', destination: 'Hyderabad', co2Emission: 303.52, distance: 710, weight: 4500, truckType: 'Medium', fuelType: 'Diesel', carrierName: 'ABC Logistics', shipmentDate: '2026-02-10' },
  { id: 5, origin: 'Pune', destination: 'Delhi', co2Emission: 368.10, distance: 818, weight: 6000, truckType: 'Heavy', fuelType: 'Diesel', carrierName: 'Fast Cargo', shipmentDate: '2026-02-15' }
];

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const totalEmissions = shipments.reduce((sum, s) => sum + s.co2Emission, 0);
  const totalDistance = shipments.reduce((sum, s) => sum + s.distance, 0);
  const avgEmission = totalEmissions / shipments.length;
  
  res.status(200).json({
    totalEmissions,
    shipmentCount: shipments.length,
    totalDistance,
    avgEmission
  });
}
