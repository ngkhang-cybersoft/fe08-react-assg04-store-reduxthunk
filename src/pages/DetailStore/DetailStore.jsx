import FormAntd from '../../components/FormAntd/FormAntd';
import { useEffect, useState } from 'react';
import httpStore from '../../utils/config';
import { API_STORE } from '../../utils/constants';
import useRouter from '../../hooks/useRouter';

const DetailStore = () => {
  const [slugStore, navigate] = useRouter('slugStore');
  const [store, setStore] = useState({});

  const getStore = async (slugStore) => {
    const res = await httpStore.get(API_STORE.GET_STORES);
    const data = res.data.content.find((store) => store.alias === slugStore);
    if (!data) navigate('/*');
    setStore(data);
  };

  useEffect(() => {
    getStore(slugStore);
  }, [slugStore]);
  return (
    <FormAntd initialValues={store} callback={() => navigate('/admin/store')} />
  );
};

export default DetailStore;
