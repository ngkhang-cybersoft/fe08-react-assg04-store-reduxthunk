import {
  Button,
  Space,
  Table,
  Input,
  Flex,
  Row,
  Col,
  ConfigProvider,
} from 'antd';

const { Search } = Input;

const dataSource = [
  {
    id: '1',
    name: 'Khải Sneaker',
    alias: 'khai-sneaker',
    latitude: '10.771663',
    longtitude: '106.669631',
    description: '379 sư vạn hạnh quận 10',
    image:
      'https://apistore.cybersoft.edu.vn/images/https://localhost:44366/images/store1.jpg',
    deleted: false,
  },
  {
    id: 2,
    name: 'Hiếu Sneakers',
    alias: 'hieu-sneakers',
    latitude: '10.766579',
    longtitude: '106.665268',
    description: '589 3 tháng 2 quận 10',
    image: 'https://apistore.cybersoft.edu.vn/images/store2.jpg',
    deleted: false,
  },
];

const btnAction = [
  {
    id: 1,
    title: 'View',
    btnColor: {
      colorPrimary: `#6253E1`,
      colorPrimaryHover: `#3E1`,
      colorPrimaryActive: `#6253A1`,
    },
    callback: (id) => {
      console.log('View', id);
    },
  },
  {
    id: 2,
    title: 'Edit',
    btnColor: {
      colorPrimary: `#6253E1`,
      colorPrimaryHover: `#3E1`,
      colorPrimaryActive: `#6253A1`,
    },
    callback: (id) => {
      console.log('Edit', id);
    },
  },
  {
    id: 3,
    title: 'Delete',
    btnColor: {
      colorPrimary: `#6253E1`,
      colorPrimaryHover: `#3E1`,
      colorPrimaryActive: `#6253A1`,
    },
    callback: (id) => {
      console.log('Delete', id);
    },
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    hidden: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    showSorterTooltip: {
      target: 'full-header',
    },
    // TODO: Refactor sort function
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle" wrap={true}>
        {btnAction.map((btn) => {
          return (
            <ConfigProvider
              key={btn.id}
              theme={{
                components: {
                  Button: btn.btnColor,
                },
              }}
            >
              <Button
                type="primary"
                size="middle"
                onClick={() => btn.callback(record.id)}
              >
                {btn.title}
              </Button>
            </ConfigProvider>
          );
        })}
      </Space>
    ),
  },
];

const onSearch = (value, _e, info) => console.log(info?.source, value, info);

const StoreList = () => {
  return (
    <>
      <Flex className="mb-4">
        <Row
          className="w-100"
          gutter={16}
          align={'stretch'}
          justify="space-between"
        >
          <Col flex={2}>
            <h2>List Store</h2>
          </Col>
          <Col flex={1}>
            <Search
              size="large"
              placeholder="Enter search store name"
              onSearch={onSearch}
              allowClear
              enterButton="Search"
            />
          </Col>
        </Row>
      </Flex>

      <Table
        loading={false}
        tableLayout="fixed"
        columns={columns}
        dataSource={dataSource}
        pagination={{
          position: ['bottomRight'],
          defaultCurrent: 1,
          total: 200,
        }}
        showSorterTooltip={{
          target: 'sorter-icon',
        }}
      />
    </>
  );
};

export default StoreList;
