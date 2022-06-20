import {FC} from "react";
import styles from './BackLayout.less';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import React, {useState} from 'react';

const {Header, Sider, Content} = Layout;

interface IProps {
  children?: any
}

const menuItem = [
  {
    key: '1',
    icon: <UserOutlined/>,
    label: 'nav 1',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined/>,
    label: 'nav 2',
  },
  {
    key: '3',
    icon: <UploadOutlined/>,
    label: 'nav 3',
  },
]

const BackLayout: FC<IProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className={styles.layout}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className={styles.logo}/>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItem}
        />
      </Sider>
      <Layout>
        <Header className={styles.header}/>
        <Content className={styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default BackLayout;
