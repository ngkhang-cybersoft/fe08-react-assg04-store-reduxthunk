import {
  IoCartOutline,
  IoHomeOutline,
  IoListOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
  IoSearchOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { BiStore } from 'react-icons/bi';
import { AiOutlineEdit, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';

const icons = {
  Dashboard: <MdOutlineDashboard />,
  Login: <AiOutlineLogin />,
  Logout: <AiOutlineLogout />,
  Home: <IoHomeOutline />,
  Cart: <IoCartOutline />,
  Store: <BiStore />,
  Search: <IoSearchOutline />,
  Person: <IoPersonOutline />,
  List: <IoListOutline />,
  Add: <IoAddCircleOutline />,
  Edit: <AiOutlineEdit />,
  Del: <IoRemoveCircleOutline />,
};

export default icons;
