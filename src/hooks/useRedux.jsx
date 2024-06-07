import { useDispatch, useSelector } from 'react-redux';

const useRedux = (reducerKey = '', stateKey = '') => {
  let state = useSelector((state) => (reducerKey ? state[reducerKey] : state));
  const dispatch = useDispatch();

  if (stateKey) state = state[stateKey];
  return [state, dispatch];
};

export default useRedux;
