import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar, Space, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const userName = 'User';

const onClickReg = () => {
  if (process.env.NODE_ENV === 'development') {
    window.location.href = 'http://localhost:8000/api/auth/';
  } else {
    window.location.href = '/api/auth/'
  }
}

type Props = {
  isAuthenticated: boolean;
}

export function Header({isAuthenticated}:Props) {

  console.log('header isAuthenticated =', isAuthenticated);

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
          {
            isAuthenticated === false ?
              <Button onClick={onClickReg}>Reg Github</Button>
              : <Space>
                <span> Hello, {userName}! </span>
                <NavLink to='/profile'>
                  <Avatar className='avatar' size={42} icon={<UserOutlined />} />
                </NavLink>
              </Space>
          }
        </Col>
      </Row>
    </header >
  );
}
