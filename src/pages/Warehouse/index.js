import React, { useState, useEffect } from 'react'
import Form from './Form'
import UploadImage from './UploadImage'
import { Divider, Table, Button, Image, Spin } from 'antd'
import { fetchSingleQuestions } from '../../model'

import './index.css'

const urlHost = 'https://cdn.jsdelivr.net/gh/LiXin1993/PicGo/'

const Warehouse = () => {
  const [type, setType] = useState('convention')
  const [level, setLevel] = useState('easy')
  const [isScan, setIsScan] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])

  const tableTitle = [
    {
      title: '试题名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作',
      key: 'action',
      render: (tags) => {
        return(
          <>
            <Button className='btn-action' onClick={() => setIsScan(true)}>预览</Button>
            <Button className='btn-action' danger>删除</Button>
            {isScan && <Image.PreviewGroup preview={{ visible: isScan, onVisibleChange: show => setIsScan(show) }}>
              <Image src={`${urlHost}/${tags.path}`} alt='' style={{ display: 'none' }} />
            </Image.PreviewGroup>}
          </>
        )
      }
    }
  ];

  const fetchData = async (path) => {
    setLoading(true)
    const list = await fetchSingleQuestions(path) || []
    const data = list.map(item => {
        item.key = item.sha
        return item
    })
    setDataSource(data)
    setLoading(false)
  }

  useEffect(() => {
    const path = `${type}/${level}`
    fetchData(path)
  }, [type, level])

  return (
    <div className='paper'>
      <UploadImage />
      <Form
        selectedType={type}
        selectedLevel={level}
        changeType={setType}
        changeLevel={setLevel}
      />
      <Divider />
      <Spin spinning={loading}>
        <Table dataSource={dataSource} columns={tableTitle} />
      </Spin>
    </div>
  )
}
export default Warehouse