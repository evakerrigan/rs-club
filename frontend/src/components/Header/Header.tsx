import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar, Space } from 'antd';
import './Header.scss';

const userName = 'User';

export function Header() {
  return <header className="footer">
  <Row  align="middle">
       <Col span={8}> </Col>
       <Col span={8}>RS CLUB</Col>
       <Col span={8}>
        <Space >
        <span> Hello, {userName}! </span>
         <Avatar className="avatar" size={42} icon={<UserOutlined />} />
         </Space>
       </Col>
     </Row>
 </header>;
}
