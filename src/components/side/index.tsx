import React from "react"
import "antd/dist/antd.css"
import { Row, Col, Menu } from "antd"

export const SideBar = () => {
  return (
    <Menu mode={"inline"} theme="dark">
      <Row>
        <Col flex="auto">회원</Col>
      </Row>
      <Row>
        <Col flex="auto">지점</Col>
      </Row>
    </Menu>
  )
}
