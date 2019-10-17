import { useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { useStateValue } from '../../state';
import { VEHICLE_ACTIONS } from '../../state/store';

import * as styled from './styles';
import * as components from '../../components';

export const VehicleList = ({ vehicles }) => {
  const [{ vehicle: { selected } }, dispatch] = useStateValue();
  const canCompare = Object.keys(selected).length < 2;

  const handleCompare = useCallback(event => {
    event.stopPropagation();

    dispatch({
      type: VEHICLE_ACTIONS.TOGGLE_SELECTED,
      selected: vehicles[event.target.getAttribute('item')]
    });
  }, [selected]);

  return (
    <styled.StyledVehiclesList>
      {
        vehicles.map(({ id, image, price, year, mileage, brand, model }, idx) => (
          <div className="vehicle-item" key={id}>
          {
            selected[id]
            ?
              <components.VehicleCard
                size="medium"
                image={image}
              >
                <components.PriceLabel>{price}</components.PriceLabel>
                <styled.InfoLabel>{year} | {mileage}</styled.InfoLabel>
                <styled.BrandLabel>{brand}</styled.BrandLabel>
                <styled.ModelLabel>{model}</styled.ModelLabel>

                <components.SelectedCard>
                  {
                    !canCompare &&
                      <Link href="/comparison">
                        <components.CompareLink>Go to compare</components.CompareLink>
                      </Link>
                  }
                  <components.SelectedButton
                    id={idx}
                    onClick={handleCompare}
                    text="Remove selected"
                  ></components.SelectedButton>
                </components.SelectedCard>
              </components.VehicleCard>
            :
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
                  {
                    canCompare && <components.CompareButton onClick={handleCompare} id={idx} />
                  }
                </section>
              </Link>
          }
          </div>
        )) 
      }
    </styled.StyledVehiclesList>
  )
};

VehicleList.propTypes = {
  vehicles: PropTypes.array
};
