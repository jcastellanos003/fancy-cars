import PropTypes from 'prop-types';

import * as styled from './styles';
import * as components from '../../components';

export const VehicleDetail = ({ vehicle, rowsSchema }) => (
  <styled.StyledVehicleDetail>

  <components.PageTitle>{vehicle.brand} {vehicle.model}</components.PageTitle>

  <components.VehicleCard
    size="large"
    image={vehicle.image}
  >
    <styled.LineSeparator />
    <components.PriceLabel>{vehicle.price}</components.PriceLabel>

    {
      rowsSchema.map((row, idx) => (
        <div key={idx}>
          <styled.DetailRow>
            <span className="title">{ row.title }</span>
            <span className="info">{row.value}</span>
          </styled.DetailRow>
        </div>
      ))
    }
  </components.VehicleCard>

</styled.StyledVehicleDetail>
);

VehicleDetail.propTypes = {
  vehicle: PropTypes.shape({
    brand: PropTypes.string,
    model: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.any,
  }),
  rowsSchema: PropTypes.array
};
