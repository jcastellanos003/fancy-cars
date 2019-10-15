import { useRouter } from 'next/router';

import * as components from '../components';
import { useFetch, useForm } from '../core';

const Index = () => {
  const onSearch = () => {
    if (!form.search) {
      return;
    }

    router.push({
      pathname: '/search',
      query: { brand: form.search }
    });
  };
  const onCompare = () => {
    console.log('on add compare');
  }

  const router = useRouter();
  const vehicles = (useFetch('http://localhost:9003/vehicles', {})).response;
  const { fields: form, onChange, onSubmit } = useForm(onSearch);

  return (
    <section>
      <components.PageHeader>
        <components.SearchBox
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </components.PageHeader>

      <components.VehiclesList>
        {
          vehicles
          && vehicles.length > 0
          && vehicles.map(vehicle => (
            <components.VehiclePreviewCard
              key={vehicle.id}
              className="vehicle-card"
              data={vehicle}
              onCompare={onCompare}
            />
          )) 
        }
      </components.VehiclesList>
    </section>
  )
};

export default Index;
