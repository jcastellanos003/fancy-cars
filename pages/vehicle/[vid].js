import { useRouter } from 'next/router';

import * as components from '../../components';

const Vehicle = () => {
  const router = useRouter();
  const { vid } = router.query;
  // const vehicles = (useFetch('http://localhost:9003/vehicles', {})).response;

  return (
    <section>
      <components.PageHeader>
        <h3>This is the details</h3>
      </components.PageHeader>

      <h2>Vehicle Id: {vid}</h2>
    </section>
  )
};

export default Vehicle;
