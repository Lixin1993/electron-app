import React, { Fragment } from 'react'
import Form from './Form'
import { Divider, Table, Button } from 'antd'
import dayjs from 'dayjs'
import './index.css'
import { deleteSingleQuestions } from '../../model'

const data = [
  {
    key: '1',
    name: '高一年级 下期',
    type: '竞赛',
    time: '2021-05-20 15:20',
  },
  {
    key: '2',
    name: '高二年级 上期',
    type: '常规',
    time: '2021-05-20 15:21',
  },
];

const tableTitle = [
  {
    title: '试卷名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '试卷类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '生成时间',
    dataIndex: 'time',
    key: 'time',
    sorter: {
      compare: (a, b) => dayjs(a.time) - dayjs(b.time),
    },
  },
  {
    title: '操作',
    key: 'action',
    render: (tags) => {
      return(
        <>
          <Button className='btn-action'>预览</Button>
          <Button className='btn-action' onClick={() => deleteSingleQuestions({
            message: 'delete image',
            path: 'img/u=1088987845,4135509379&fm=26&fmt=auto&gp=0.webp',
            sha: 'd3d7fbb7b66e13d61706fbee49d1d41cb3577984',
          })} danger>删除</Button>
        </>
      )
    }
  }
];

const Paper = () => {
  return (
    <div className='paper'>
      <Form />
      <Divider />
      <Table dataSource={data} columns={tableTitle} />;
    </div>
  )
}
export default Paper