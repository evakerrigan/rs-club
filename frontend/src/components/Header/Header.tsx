import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const userName = 'User';

export function Header() {
  return (
    <header className='header'>
      <Row align='middle'>
        <Col span={8}>
        <nav className='nav'>
          <Space >
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/messages'>Messages</NavLink>
          </Space>
        </nav>
        </Col>
        <Col span={8}>RS CLUB</Col>
        <Col span={8}>
          <Space>
            <span> Hello, {userName}! </span>
            <NavLink to='/profile'>
            <Avatar className='avatar' size={42} icon={<UserOutlined />} />
            </NavLink>
          </Space>
        </Col>
      </Row>
    </header>
  );
}
