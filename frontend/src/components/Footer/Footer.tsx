import GithubOutlined from '@ant-design/icons/lib/icons/GithubOutlined';
import { Col, Row, Space } from 'antd';
import './Footer.scss';

export function Footer() {
  return <footer className="footer">
 <Row  align="middle">
      <Col span={8}><a href="https://rs.school/js/" className="footer__link" target="_blank" rel="noreferrer">RS School</a></Col>
      <Col span={8}>2023</Col>
      <Col span={8}><Space direction='vertical'>
          <a href="https://github.com/JohnGlod" className="footer__link" target="_blank" rel="noreferrer"><GithubOutlined /> JohnGlod</a>
          <a href="https://github.com/evakerrigan" className="footer__link" target="_blank" rel="noreferrer"> <GithubOutlined /> evakerrigan</a>
          <a href="https://github.com/osipikav" className="footer__link" target="_blank" rel="noreferrer"> <GithubOutlined /> osipikav</a>
      </Space></Col>
    </Row>
</footer>;}
