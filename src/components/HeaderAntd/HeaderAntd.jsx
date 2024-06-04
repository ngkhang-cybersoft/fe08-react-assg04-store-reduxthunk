import { Avatar, Badge, Layout, Menu, Space } from 'antd';
import { Link } from 'react-router-dom';
import icons from '../../utils/icons';

const { Header } = Layout;

const itemsHeader = [
  {
    key: 1,
    label: (
      <Space size={24}>
        <Badge count={1}>
          <Avatar shape="circle" icon={icons.Person} />
        </Badge>
      </Space>
    ),
  },
  {
    key: 2,
    label: (
      <Link className="fs-5" to="/">
        {icons.Logout}
      </Link>
    ),
  },
];

const HeaderAntd = () => {
  return (
    <Header className="d-flex align-items-center bg-white">
      <Link to="/" className="fs-5">
        {icons.Home}
      </Link>
      <Menu
        mode="horizontal"
        items={itemsHeader}
        className="flex-grow-1 justify-content-end"
      />
    </Header>
  );
};

export default HeaderAntd;
