import { Col, Row } from "antd";
import {
  HomeOutlined,
  SearchOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

function Menu() {
  return (
    <Row>
      <Col span={24}>
        <HomeOutlined />
      </Col>
      <Col span={24}>
        <SearchOutlined />
      </Col>
      <Col span={24}>
        <MailOutlined />
      </Col>
      <Col span={24}>
        <UserOutlined />
      </Col>
    </Row>
  );
}

function Tweet({ avatar, user, nickname, text }) {
  return (
    <Row
      style={{
        border: "1px solid #000",
        borderRadius: "10px",
        padding: 10,
      }}
      gutter={[16, 16]}
    >
      <Col span={4}>
        <img src={avatar} width="100%" style={{ borderRadius: "100%" }} />
      </Col>
      <Col span={20}>
        <h2>
          {user} {nickname}
        </h2>
        <p>{text}</p>
      </Col>
    </Row>
  );
}

export default function Home() {
  return (
    <>
      <h1>Hi there Garuda!</h1>

      <Row>
        <Col span={4}>
          <Menu />
        </Col>
        <Col span={14}>
          <Tweet
            avatar="https://pbs.twimg.com/profile_images/1278619568508985344/MCS_SOvw_400x400.jpg"
            user="Jorge"
            nickname="@jgferreiro"
            text="I love you all. Thanks for bringing over Garuda hacks <3"
          />
        </Col>
        <Col span={6}>Sidebar</Col>
      </Row>
    </>
  );
}
