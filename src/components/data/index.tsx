import React from "react"
import { Table, Space } from "antd"
import { ColumnType } from "antd/es/table"
import { data } from "../../data"

export interface User {
  key: number
  name: string
  tel: string
  address: string
}

const columns: ColumnType<User>[] = [
  {
    title: "이름",
    dataIndex: "name",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: any, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "전화번호",
    dataIndex: "tel",
    filterMultiple: false,
    onFilter: (value: any, record) => record.address.indexOf(value) === 0,
    // sorter: (a, b) => a.tel - b.tel,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "등록지점",
    dataIndex: "address",
    filterMultiple: false,
    onFilter: (value: any, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "속성",
    key: "action",
    render: () => (
      <Space size="middle">
        <button>수정</button>
        <button>삭제</button>
      </Space>
    ),
  },
]

export const TableData = () => {
  return <Table columns={columns} dataSource={data} />
}
