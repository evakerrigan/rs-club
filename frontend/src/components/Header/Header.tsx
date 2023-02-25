import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Avatar, Space, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { IAuthorizationResponse } from '../../types/Types';
import { getCookie } from '../../utils/getCookie';
import { BASE_URL } from '../Constants/Constants';
import './Header.scss';

type Props = {
  isAuthenticated: boolean;
  userName: string;
  userAvatar: string;
};

export function Header({ isAuthenticated, userName = 'User', userAvatar }: Props) {
  const onClickReg = () => {
    const rsAccessToken = getCookie('rsAccessToken');
    const AUTH_VALIDATE = `${BASE_URL}/auth/validate`;
    const getUser = async () => {
      try {
        const response = await fetch(AUTH_VALIDATE, {
          headers: {
            Authorization: `Bearer ${rsAccessToken}`,
          },
        });
        /* если 200 то все ок, если 401, то реконект на логин */
        const data: IAuthorizationResponse = await response.json();
        if (data.statusCode === 401) {
          window.location.href = `${BASE_URL}/auth/`;
        }
      } catch (error) {
        console.error('Authorization failed!')
      }

    };
    getUser();
  };

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
          {isAuthenticated === false ? (
            <Button onClick={onClickReg}>Reg Github</Button>
          ) : (
            <Space>
              <span> Hello, {userName}! </span>
              <NavLink to='/profile'>
                <Avatar
                  className='avatar'
                  size={42}
                  icon={<UserOutlined />}
                  src={userAvatar || ''}
                />
              </NavLink>
            </Space>
          )}
        </Col>
      </Row>
    </header>
  );
}
