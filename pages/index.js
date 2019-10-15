import { useRouter } from 'next/router';

import * as components from '../components';
import VehicleList from '../containers/VehicleList';
import { useFetch, useForm } from '../core';

const Index = () => {
  const router = useRouter();
  const vehicles = (useFetch('http://localhost:9003/vehicles', {})).response;

  const onSearch = () => {
    if (!form.search) {
      return;
    }

    router.push({
      pathname: '/search',
      query: { brand: form.search }
    });
  };

  const { fields: form, onChange, onSubmit } = useForm(onSearch);

  return (
    <section>
      <components.PageHeader>
        <components.SearchBox
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </components.PageHeader>

      <VehicleList vehicles={vehicles}/>
    </section>
  )
};

export default Index;
