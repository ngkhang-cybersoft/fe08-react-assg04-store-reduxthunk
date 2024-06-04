import { Col, Row } from 'antd';
import CardItem from './CardItem/CardItem';

const contentCard = [
  {
    id: 1,
    title: 'User',
    to: 'user',
    disabled: true,
    img: '',
    alt: 'role-user',
  },
  {
    id: 2,
    title: 'Admin',
    to: 'admin/store',
    disabled: false,
    img: '',
    alt: 'role-admin',
  },
];

const Home = () => {
  return (
    <div className="container vh-100">
      <Row align="middle" justify="space-around" className="h-100" gutter={16}>
        {contentCard.map((item) => {
          return (
            <Col key={item.id} span={8}>
              <CardItem data={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
