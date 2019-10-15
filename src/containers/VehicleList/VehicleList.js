import Link from 'next/link';
import PropTypes from 'prop-types';

import * as styled from './styles';
import * as components from '../../components';

export const VehicleList = ({ vehicles }) => {
  const onCompare = (event) => {
    event.stopPropagation();
    console.log('on add compare');
  };

  return (
    <styled.StyledVehiclesList>
      {
        vehicles
        && vehicles.length > 0
        && vehicles.map(({ id, image, price, year, mileage, brand, model }) => (
          <div className="vehicle-item" key={id}>
            <Link href="/vehicle/[vid]" as={`/vehicle/${id}`}>
              <section>
                <components.VehicleCard
                  size="medium"
                  image={image}
                >
                  <components.PriceLabel>{price}</components.PriceLabel>
                  <styled.InfoLabel>{year} | {mileage}</styled.InfoLabel>
            
                  <styled.BrandLabel>{brand}</styled.BrandLabel>
                  <styled.ModelLabel>{model}</styled.ModelLabel>
                </components.VehicleCard>
                <span onClick={onCompare}>
                  <components.CompareButton />
                </span>
              </section>
            </Link>
          </div>
        )) 
      }
    </styled.StyledVehiclesList>
  )
};

VehicleList.propTypes = {
  vehicles: PropTypes.array
};
