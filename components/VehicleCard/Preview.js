import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent  } from '../Card';
import * as components from './styles';

export const VehiclePreviewCard = ({ className, data:
    { price, year, mileage, brand, model, image: src }
  }) => (
  <Card size="medium" className={className}>

    <CardHeader>
      <components.VehicleImage src={src} />
    </CardHeader>

    <CardContent>
      <components.PriceLabel>{price}</components.PriceLabel>
      <components.InfoLabel>{year} | {mileage}</components.InfoLabel>

      <components.BrandLabel>{brand}</components.BrandLabel>
      <components.ModelLabel>{model}</components.ModelLabel>
    </CardContent>

  </Card>
);

VehiclePreviewCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    mileage: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired
};
