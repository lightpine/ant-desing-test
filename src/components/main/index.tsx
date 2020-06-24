import React, { useState } from "react"
import { New } from "../new"
import "./Main.css"
import { Layout, Menu, Breadcrumb, Button, Modal } from "antd"
import { TableData } from "../data"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons"

const { Header, Content, Sider } = Layout

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [check, setCheck] = useState(false)

  const onCollapse = () => {
    setCollapsed(collapsed)
  }

  const onClickcheck = () => {
    setCheck(true)
  }

  const handleOk = () => {
    setCheck(false)
  }

  const handleCancel = () => {
    setCheck(false)
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="horizontal">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            회원
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            회원가입
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            지점
          </Menu.Item>
          <Menu.Item key="4" icon={<DesktopOutlined />}>
            지점가입
          </Menu.Item>
          <Menu.Item key="9" icon={<FileOutlined />}>
            파일다운로드
          </Menu.Item>
        </Menu>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>회원</Breadcrumb.Item>
          </Breadcrumb>
          <Button type="primary" size={"large"} onClick={onClickcheck}>
            추가
          </Button>
          <Modal
            title="회원가입"
            visible={check}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <New />
          </Modal>
          <TableData />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
