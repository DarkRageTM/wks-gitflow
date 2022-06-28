import useSWR from 'swr';

import { swGet } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Credit cost',
    dataIndex: 'cost_in_credits',
    key: 'cost_in_credits',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'Max speed',
    dataIndex: 'max_atmosphering_speed',
    key: 'max_atmosphering_speed',
  },
  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer',
    key: 'manufacturer',
  },
];

const Vehicles = () => {
  const { data, error } = useSWR('/vehicles', swGet);

  if (error) {
    return <div className="px-2">Oh oh!</div>;
  }
  if (!data) {
    return <div className="px-2">Loading...</div>;
  }

  return (
    <div>
      <Table columns={columns} data={data.results} /* :D */ />
    </div>
  );
};

export default Vehicles;
