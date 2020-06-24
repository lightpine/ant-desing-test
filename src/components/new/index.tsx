import React from "react"
import "./New.css"
import { Form, Input, Button, Checkbox, Row, Col } from "antd"

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

export const New = () => {
  return (
    <Form {...layout} name="basic" initialValues={{ remember: true }}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tell"
        name="tell"
        rules={[{ required: true, message: "Please input your Tell!" }]}
      >
        <Input.Group size="large">
          <Row gutter={16}>
            <Col span={6}>
              <Input maxLength={3} />
            </Col>
            <Col span={6}>
              <Input maxLength={4} />
            </Col>
            <Col span={6}>
              <Input maxLength={4} />
            </Col>
          </Row>
        </Input.Group>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
