import { useRouter } from 'next/router';

import { API_ROUTES, vehicleDetailsRowsParser } from '../../core';
import { PageHeader, BackButton } from '../../components';
import { VehicleDetail } from '../../containers';

const Vehicle = ({ vehicle }) => {
  const router = useRouter();
  const rowsSchema = vehicleDetailsRowsParser(vehicle);

  return (
    <section>
      <PageHeader>
        <BackButton onClick={router.back}/>
      </PageHeader>

      <VehicleDetail vehicle={vehicle} rowsSchema={rowsSchema} />
    </section>
  )
};

Vehicle.getInitialProps = async function(context) {
  const { vid } = context.query;
  const res = await fetch(`${API_ROUTES.DETAILS}${vid}`);

  return { vehicle: (await res.json()) };
};

export default Vehicle;
