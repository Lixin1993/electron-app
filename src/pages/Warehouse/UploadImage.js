import React, { useState, memo } from 'react'
import { Upload, Button, message, Modal, Checkbox, Form, Input, Radio, Divider } from 'antd'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { uploadSingleQuestions } from '../../model'
import { getBase64 } from '../../utils'

const urlHost = 'https://cdn.jsdelivr.net/gh/LiXin1993/PicGo/'

const formItemLayout = {
    labelCol: { span: 4 }
  };

const UploadButton = () => (
    <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);

const UploadImage = (props) => {
    const { type = 'competition', level = 'normal', data, visible, setVisible, successCb } = props
    const { name, answer } = data
    const [fileList, setFileList] = useState([])
    const [form] = Form.useForm()

    const beforeUpload = (file) => {
        const { type, name } = file
        if (type.indexOf('image/') > -1) {
            return false
        }
        message.error(`文件 ${name} 格式不对`)
        return Upload.LIST_IGNORE
    }

    const onChange = ({file}) => {
        setFileList([...fileList, file])
        form.setFieldsValue({ name: file.name })
    }

    const onRemove = (file) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList)
    }

    const upload = async () => {
        try {
            const formData = await form.validateFields()
            debugger
            const name = `${formData.answer.join('')}@${formData.name}`
            const path = `${formData.type}/${formData.level}/${name}`
            if (!fileList.length) {
                return message.warn('请选择图片')
            }
            let content = await getBase64(fileList[0])
            content = content.split(',')[1]
            await uploadSingleQuestions({ content, path })
            message.success('上传成功')
            closeModal()
            successCb()
        } catch (e) {
            if (e.errorFields) return
            message.error('上传失败')
        }
    }

    const closeModal = () => {
        setFileList([])
        form.resetFields()
        setVisible(false)
    }

    return (
        <>
            <Button style={{ marginBottom: 24 }} shape='round' onClick={() => setVisible(true)} icon={<UploadOutlined />}>试题上传</Button>

            <Modal
                destroyOnClose
                width={'60%'}
                title='试题上传'
                visible={visible}
                onOk={upload}
                maskClosable={false}
                onCancel={closeModal}
            >
                <Upload
                    maxCount={1}
                    onRemove={onRemove}
                    onChange={onChange}
                    beforeUpload={beforeUpload}
                    listType={'picture-card'}
                >
                    {<UploadButton />}
                </Upload>
                <Divider />
                <Form name='dynamic_rule' form={form} initialValues={{ name, type, level, answer }}>
                    <Form.Item name={'name'} {...formItemLayout} label={'试题名称'} rules={[{ required: true, message: '请输入试题名称' }]}>
                        <Input placeholder='试题名称' />
                    </Form.Item>
                    <Form.Item name={'type'} {...formItemLayout} label={'试题类型'} rules={[{ required: true }]}>
                        <Radio.Group>
                            <Radio value={'competition'}>竞赛</Radio>
                            <Radio value={'convention'}>常规</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name={'level'} {...formItemLayout} label={'试题难度'} rules={[{ required: true }]}>
                        <Radio.Group>
                            <Radio value={'easy'}>简单</Radio>
                            <Radio value={'normal'}>正常</Radio>
                            <Radio value={'hard'}>困难</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name={'answer'} {...formItemLayout} label={'正确答案'} rules={[{ required: true }]}>
                        <Checkbox.Group options={['A', 'B', 'C', 'D']} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default memo(UploadImage)