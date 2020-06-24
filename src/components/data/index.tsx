import React from "react"
import { Table } from "antd"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tel",
    dataIndex: "tel",
    key: "tel",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    key: "action",
  },
]

const data = [
  {
    key: "1",
    name: "John Brown",
    tel: "010-0000-1111",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "010-0000-2222",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    tel: "010-0000-3333",
    address: "Sidney No. 1 Lake Park",
  },
]
export const TableData = () => {
  return <Table columns={columns} dataSource={data} />
}
