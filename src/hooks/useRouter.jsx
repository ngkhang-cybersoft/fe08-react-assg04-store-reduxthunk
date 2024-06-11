import { useNavigate, useParams } from 'react-router-dom';

const useRouter = (paramKey = '') => {
  const navigate = useNavigate();
  const params = useParams();
  return [paramKey ? params[paramKey] : params, navigate];
};

export default useRouter;
