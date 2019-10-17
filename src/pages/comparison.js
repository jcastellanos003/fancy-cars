import { useStateValue } from '../state';

import { vehicleDetailsRowsParser } from '../core';
import { VehicleDetail } from '../containers';
import { HorizontalPane } from '../components';

const Comparison = () => {
  const [{ vehicle: { selected } }] = useStateValue();
  const itemsToCompare = Object.keys(selected).map(key => ({
    vehicle: selected[key],
    rowsSchema: vehicleDetailsRowsParser(selected[key])
  }));

  return (
    <HorizontalPane>
      {
        itemsToCompare
        && itemsToCompare.length > 0
        && itemsToCompare.map(({ vehicle, rowsSchema }) => (
          <VehicleDetail key={vehicle.id} vehicle={vehicle} rowsSchema={rowsSchema} />
        ))
      }
    </HorizontalPane>
  );
};

export default Comparison;
