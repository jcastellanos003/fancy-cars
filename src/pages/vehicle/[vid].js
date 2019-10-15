import { useRouter } from 'next/router';

import { useFetch } from '../../core';
import * as styled from './styles';
import * as components from '../../components';

const Vehicle = () => {
  const router = useRouter();
  const { vid } = router.query;
  const vehicle = (useFetch(`http://localhost:9003/vehicles/${vid}`, {})).response;
  
  const onBack = () => {
    router.back();
  }

  const rowsSchema = () => {
    const { image, price, ...rowFields } = vehicle;

    return Object.keys(rowFields).map(key => ({
      title: key,
      value: vehicle[key]
    }));
  };

  return (
    <section>
      <components.PageHeader>
        <components.BackButton onClick={onBack}/>
      </components.PageHeader>

      {
        vehicle
        ?
          <styled.StyledVehicleDetail>

            <components.PageTitle>{vehicle.brand} {vehicle.model}</components.PageTitle>

            <components.VehicleCard
              size="large"
              image={vehicle.image}
            >
              <styled.LineSeparator />
              <components.PriceLabel>{vehicle.price}</components.PriceLabel>

              {
                rowsSchema().map((row, idx) => (
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
        : <span>Loading...</span>
      }
    </section>
  )
};

export default Vehicle;
