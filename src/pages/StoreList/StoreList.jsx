import {
  Table,
  Input,
  Flex,
  Row,
  Col,
  Button,
  ConfigProvider,
  Space,
} from 'antd';

import useRedux from '../../hooks/useRedux';
import { useEffect, useState } from 'react';
import {
  getStoresAsync,
  delStoreAsync,
} from '../../redux/reducers/storeReducer';
import { GLOBAL_STATES, REDUCERS } from '../../utils/constants';
import tableProps from './tableProps';

const { Search } = Input;
const { storeReducer } = REDUCERS;
const { lstStore } = GLOBAL_STATES;

const onSearch = (value, _e, info) => console.log(info?.source, value, info);

const StoreList = () => {
  const [stores, dispatch] = useRedux(storeReducer, lstStore);
  const [loading, setLoading] = useState(true);

  const btnAction = [
    {
      id: 1,
      title: 'View',
      btnColor: {
        colorPrimary: `rgb(0 123 255)`,
        colorPrimaryHover: `rgb(0 105 217)`,
      },
      callback: ({ alias }) => {
        console.log('Store alias: ', alias);
      },
    },
    {
      id: 2,
      title: 'Edit',
      btnColor: {
        colorPrimary: `rgb(255 193 7)`,
        colorPrimaryHover: `rgb(224 168 0)`,
      },
      callback: ({ id }) => {
        console.log('Edit', id);
      },
    },
    {
      id: 3,
      title: 'Delete',
      btnColor: {
        colorPrimary: `rgb(220 53 69)`,
        colorPrimaryHover: `rgb(200 35 51)`,
      },
      callback: async ({ id }) => {
        const actionThunk = delStoreAsync(id);
        let { content } = await dispatch(actionThunk);
        console.log(content);
        // TODO: Toast mess when delete success
      },
    },
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      hidden: true,
      ellipsis: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
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
      ellipsis: true,
    },
    {
      title: 'Action',
      key: 'action',
      ellipsis: true,
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
                  onClick={() => btn.callback(record)}
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

  useEffect(() => {
    setLoading(true);
    const action = getStoresAsync();
    dispatch(action);
    setLoading(false);
  }, [dispatch]);

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
        {...tableProps}
        loading={loading}
        dataSource={stores}
        columns={columns}
      />
    </>
  );
};

export default StoreList;
