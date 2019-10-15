import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent  } from '../Card';
import { CompareButton } from '../CompareButton';
import * as styled from './styles';

export const VehiclePreviewCard = ({
    className,
    onCompare,
    data: { price, year, mileage, brand, model, image: src }
  }) => (
  <Card size="medium" className={className}>

    <CardHeader>
      <styled.VehicleImage src={src} />
    </CardHeader>

    <CardContent>
      <styled.PriceLabel>{price}</styled.PriceLabel>
      <styled.InfoLabel>{year} | {mileage}</styled.InfoLabel>

      <styled.BrandLabel>{brand}</styled.BrandLabel>
      <styled.ModelLabel>{model}</styled.ModelLabel>
    </CardContent>

    <CompareButton onClick={onCompare} />

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
  }).isRequired,
  onCompare: PropTypes.func.isRequired
};
