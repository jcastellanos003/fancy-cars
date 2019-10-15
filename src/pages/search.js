import { useRouter } from 'next/router';

import * as components from '../components';
import { VehicleList } from '../containers';
import { useFetch } from '../core';

const Search = () => {
  const router = useRouter();
  const brand = router.query.brand || '';
  const vehicles = (useFetch(`http://localhost:9003/vehicles?brand_like=${brand}`, {})).response;

  const onBack = () => {
    router.back();
  }

  return (
    <section>
      <components.PageHeader>
        <components.BackButton onClick={onBack}/>
        <components.Chip name={brand} onClose={onBack} />
      </components.PageHeader>

      <VehicleList vehicles={vehicles}/>
    </section>
  );
};

export default Search;
