import React from "react"
import { Row, Col, Button } from "antd"
import { SideBar } from "../side"
import "./Main.css"

const Main: React.FC = () => {
  return (
      <Row gutter={[16, 16]}>
        <Col span={2}>
          <SideBar />
        </Col>
        <Col flex="auto"></Col>
      </Row>
  )
}

export default Main
