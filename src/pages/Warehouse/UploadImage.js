import React, { useState } from 'react'
import { Upload, Button, message, Modal } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const UploadImage = () => {
    const [visible, setVisible] = useState(false)
    const [list, setList] = useState([])
    const beforeUpload = (info) => {
        const date = dayjs().format().valueOf()
        let filenName = info.webkitRelativePath.split('/')
        filenName = filenName[filenName.length - 2]
        const fileInfo = {name: filenName + '-' + date, ...info}
        console.log('====================================');
        console.log(fileInfo);
        console.log('====================================');
        // if (file.type !== 'image/webp') {
        //     message.error(`${file.name} is not a png file`);
        // }
        // return file.type === 'image/webp' ? true : Upload.LIST_IGNORE;
    }
    return (
        <div style={{ marginBottom: 24 }}>
            <Button shape="round" onClick={() => setVisible(true)} icon={<UploadOutlined />}>试题上传</Button>
            <Modal
                width={'60%'}
                title="试题上传"
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
            >
                <Upload
                    beforeUpload={beforeUpload}
                    defaultFileList={list}
                    directory
                >
                    <Button shape="round" icon={<UploadOutlined />}>Upload Directory</Button>
                </Upload>
            </Modal>
        </div>
    )
}

export default UploadImage