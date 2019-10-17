import { useRouter } from 'next/router';

import * as components from '../components';
import { VehicleList } from '../containers';
import { API_ROUTES } from '../core';

const Search = ({vehicles, brand}) => {
  const router = useRouter();

  return (
    <section>
      <components.PageHeader>
        <components.BackButton onClick={router.back}/>
        <components.Chip name={brand} onClose={router.back} />
      </components.PageHeader>

      <VehicleList vehicles={vehicles}/>
    </section>
  );
};

Search.getInitialProps = async function(context) {
  const { brand } = context.query;
  const res = await fetch(`${API_ROUTES.SEARCH}${brand}`);

  return { vehicles: (await res.json()), brand };
};

export default Search;
