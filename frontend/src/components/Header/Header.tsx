import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar, Space, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Header.scss';

const userName = 'User';

export function Header() {

  const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
  })

  const onClick = () => axios.get('auth/callback',
    // {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, OPTIONS',
    //   }
    // }
  )
  return (
    <header className='header'>
      <Row align='middle'>
        <Col span={8}>
          <nav className='nav'>
            <NavLink to='/messages'>Messages</NavLink>
          </nav>
        </Col>
        <Col span={8}>
          <NavLink to='/'>RS CLUB</NavLink>
        </Col>
        <Col span={8}>
          <Button onClick={onClick}>Reg Github</Button>
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
