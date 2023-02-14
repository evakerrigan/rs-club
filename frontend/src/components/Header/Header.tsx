import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar, Space, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Header.scss';

const userName = 'User';

export function Header() {

  const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    // withCredentials: true,
  })

  const onClickReg = () => instance.get('auth',
    {
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods': 'GET, OPTIONS',
      //   'Access-Control-Allow-Credentials': 'true',
      // }
    }
  )

  // const onClickReg = () => {
  // eslint-disable-next-line no-restricted-globals
  //   location.href = 'http://localhost:8000/auth/callback';
  // }

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
          <Button onClick={onClickReg}>Reg Github</Button>&nbsp;&nbsp;&nbsp;
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
