import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderAntd from '../components/HeaderAntd/HeaderAntd';
import FooterAntd from '../components/FooterAntd/FooterAntd';

import { Layout, Menu } from 'antd';
import icons from '../utils/icons';
const { Content, Sider } = Layout;

const navList = [
  {
    key: 'sub1',
    icon: icons.Dashboard,
    label: 'Dashboard',
    url: 'admin',
    disable: true,
  },
  {
    key: 'sub2',
    icon: icons.Cart,
    label: 'Product',
    url: 'admin/product',
    disable: true,
  },
  {
    key: 'sub3',
    icon: icons.Store,
    label: 'Stores',
    url: 'admin/store',
    disable: false,
    children: [
      {
        key: '1',
        label: 'List',
        icon: icons.List,
        url: 'store',
      },
      {
        key: '2',
        label: 'Add new store',
        icon: icons.Add,
        url: 'store/add-store',
      },
    ],
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const itemsMenuSider = navList.map((nav) => {
  const children = nav.children?.map((child) => {
    return {
      key: child.key,
      icon: child.icon,
      // label: child.label,
      label: (
        <NavLink className="text-decoration-none" to={child.url}>
          {child.label}
        </NavLink>
      ),
    };
  });

  return {
    key: nav.key,
    icon: nav.icon,
    // label: nav.label,
    label: nav.disable ? (
      nav.label
    ) : (
      <NavLink to={nav.url}>{nav.label}</NavLink>
    ),
    disabled: nav.disable,
    children,
  };
});

const levelKeys = getLevelKeys(itemsMenuSider);

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [stateOpenKeys, setStateOpenKeys] = useState(['sub3', '1']);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1,
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Layout className="vh-100">
      <HeaderAntd />
      <Layout>
        <Sider
          onCollapse={(value) => setCollapsed(value)}
          collapsible
          collapsed={collapsed}
          width={250}
          className="bg-white"
        >
          <Menu
            mode="inline"
            openKeys={stateOpenKeys}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            onOpenChange={onOpenChange}
            className="h-100"
            items={itemsMenuSider}
          />
        </Sider>
        <Layout className="p-4 pb-0">
          <Content
            className="m-0 p-4 rounded-3 bg-white"
            style={{ overflowY: 'scroll' }}
          >
            <Outlet />
          </Content>
          <FooterAntd />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
