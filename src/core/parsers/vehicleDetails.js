export const vehicleDetailsRowsParser = vehicle => {
  const { id, image, price, ...rowFields } = vehicle;

  return Object.keys(rowFields).map(key => ({
    title: key,
    value: vehicle[key]
  }));
}
