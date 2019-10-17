import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import * as components from '../components';
import { VehicleList } from '../containers';
import { useForm, API_ROUTES } from '../core';

const Index = ({ vehicles }) => {
  const router = useRouter();

  const onSearch = () => {
    if (!fields.search) {
      return;
    }

    router.push({
      pathname: '/search',
      query: { brand: fields.search }
    });
  };

  const { fields, onChange, onSubmit } = useForm(onSearch);

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

Index.getInitialProps = async function() {
  const res = await fetch(API_ROUTES.VEHICLES);

  return {
    vehicles: (await res.json())
  };
};

export default Index;
