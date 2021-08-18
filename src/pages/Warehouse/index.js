import React, { useState, useEffect } from 'react'
import Form from './Form'
import UploadImage from './UploadImage'
import { Divider, Table, Button, Image, Spin, Modal, message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { fetchSingleQuestions, deleteSingleQuestions } from '../../model'

import './index.css'

const urlHost = 'https://cdn.jsdelivr.net/gh/LiXin1993/PicGo/'

const Warehouse = () => {
  const [type, setType] = useState('competition')
  const [level, setLevel] = useState('easy')
  const [actionItem, setActionItem] = useState({})
  const [loading, setLoading] = useState(true)
  const [dataSource, setDataSource] = useState([])
  const [path, setPath] = useState('')
  const [visible, setVisible] = useState(false)

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
        const isScan = (actionItem.name === tags.name) && actionItem.isScan
        return(
          <>
            <Button className='btn-action' onClick={() => setActionItem({ ...tags, isScan: true })}>预览</Button>
            <Button className='btn-action' onClick={() => editItem(tags)}>编辑</Button>
            <Button className='btn-action' danger onClick={() => deleteItem(tags)}>删除</Button>
            {isScan && <Image.PreviewGroup preview={{ visible: isScan, onVisibleChange: () => setActionItem({}) }}>
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
    const data = list.length && list.map((item, index) => {
        const name = item.name
        item.key = `${item.name}-${index}`
        item.name = name.split('@')[1] || name.split('@')[0]
        item.answer = name.split('@')[1] ? name.split('@')[0].split('') : ['A']
        return item
    })
    setDataSource(data)
    setLoading(false)
  }

  const editItem = (tags) => {
    setActionItem(tags)
    setVisible(true)
  }

  const deleteItem = async (item) => {
    const path = item.path
    Modal.confirm({
      title: '确认删除',
      icon: <ExclamationCircleOutlined />,
      content: item.name,
      okText: '确认',
      cancelText: '取消',
      onOk: async () => {
        try {
          await deleteSingleQuestions({ path, sha: item.sha })
          message.success('删除成功')
          setTimeout(() => fetchData(`${type}/${level}`), 2000)
        } catch {
          message.error('删除失败')
        }
      }
    });
  }

  useEffect(() => {
    const path = `${type}/${level}`
    setPath(path)
    fetchData(path)
  }, [type, level])

  return (
    <div className='paper'>
      <UploadImage
        visible={visible}
        type={type}
        level={level}
        data={actionItem}
        setVisible={setVisible}
        successCb={() => fetchData(path)}
      />
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