import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent  } from '../Card';
import * as styled from './styles';

export const VehiclePreviewCard = ({
    onSelected,
    data: { price, year, mileage, brand, model, image: src }
  }) => (
    <section onClick={onSelected}>
      <Card size="medium">
    
        <CardHeader>
          <styled.VehicleImage src={src} />
        </CardHeader>
    
        <CardContent>
          <styled.PriceLabel>{price}</styled.PriceLabel>
          <styled.InfoLabel>{year} | {mileage}</styled.InfoLabel>
    
          <styled.BrandLabel>{brand}</styled.BrandLabel>
          <styled.ModelLabel>{model}</styled.ModelLabel>
        </CardContent>
    
      </Card>
    </section>
);

VehiclePreviewCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    mileage: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
  }).isRequired,
  onSelected: PropTypes.func.isRequired
};
