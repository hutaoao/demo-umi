import {FC} from "react";
import {Layout, Menu} from 'antd';
import styles from './FrontLayout.less';

const {Header, Content, Footer} = Layout;

interface IProps {
  children?: any
}

const FrontLayout: FC<IProps> = (props) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header>
      <Content className={styles.content}>{props.children}</Content>
      <Footer className={styles.footer}>footer</Footer>
    </Layout>
  )
}

export default FrontLayout;

