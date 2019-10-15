import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { StyledVehiclesList } from './styles/VehicleListStyles';
import * as components from '../../components';

const VehicleList = ({ vehicles }) => {
  const router = useRouter();

  const onDetails = id => {
    router.push({
      pathname: `/vehicle/${id}`
    });
  };

  const onCompare = () => {
    console.log('on add compare');
  };

  return (
    <StyledVehiclesList>
      {
        vehicles
        && vehicles.length > 0
        && vehicles.map(vehicle => (
          <div className="vehicle-item" key={vehicle.id}>
            <components.VehiclePreviewCard
              data={vehicle}
              onSelected={() => onDetails(vehicle.id)}
            />
            <span onClick={onCompare}>
              <components.CompareButton />
            </span>
          </div>
        )) 
      }
    </StyledVehiclesList>
  )
};

VehicleList.propTypes = {
  vehicles: PropTypes.array
};

export default VehicleList;
