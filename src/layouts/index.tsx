import {FC} from "react";
import {IRouteComponentProps} from 'umi';
import FrontLayout from './FrontLayout';
import BackLayout from './BackLayout';

/**
 你可能需要针对不同路由输出不同的全局 layout，Umi 不支持这样的配置，但你仍可以在 src/layouts/index.tsx 中对 location.path 做区分，渲染不同的 layout 。
 */

const Layout: FC<IRouteComponentProps> = (props) => {
  const {children, location} = props;
  if (/admin/.test(location.pathname)) {
    return <BackLayout children={children}/>
  }
  return <FrontLayout children={children}/>
}

export default Layout;



/*
export default function Layout({children, location, route, history, match}: IRouteComponentProps) {
  console.log(location.pathname)
  if (/admin/.test(location.pathname)) {
    return <BackLayout children={children}/>
  }
  return <FrontLayout children={children}/>
}
*/
