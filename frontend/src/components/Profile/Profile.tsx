import { Col, Image, Row, Space, Tag, Divider, Typography, Button } from 'antd';
import { useUser } from '../../hooks/useUser';
import './Profile.scss';
import { technologiesList } from '../../constants';

const { Title, Paragraph, Text, Link } = Typography;

export function Profile() {
  const { userData, errorMessage } = useUser();
  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      {userData && (
        <Row align='middle'>
          <Col span={12}>
            <Image src={userData.profilePicture} width={400} />
            <br />
            <Space size={[0, 8]} wrap style={{ marginTop: '25px' }}>
              {userData.technology.map((technology) => (
                <Tag key={technology} color='gold'>
                  {technologiesList.map((stack) => stack.key === technology && stack.label)}
                </Tag>
              ))}
            </Space>
          </Col>
          <Col span={12}>
            <Button href={`https://t.me${userData.telegramLink}`} type="primary">Telegram</Button>
          </Col>
        </Row>
      )}
    </>
  );
}
