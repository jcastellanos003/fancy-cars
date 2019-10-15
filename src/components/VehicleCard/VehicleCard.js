import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent  } from '../Card';
import { VehicleImage } from './styles';

export const VehicleCard = ({
    image,
    size,
    children
  }) => (
    <section>
      <Card size={size}>

        <CardHeader>
          <VehicleImage src={image} />
        </CardHeader>

        <CardContent>
          {children}
        </CardContent>

      </Card>
    </section>
);

VehicleCard.propTypes = {
  size: PropTypes.oneOf(['medium', 'large']).isRequired,
  image: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
