import React, { useState } from 'react'
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadImage = () => {
    const [list, setList] = useState([])
    const beforeUpload = (info) => {
        console.log('====================================');
        console.log(info);
        console.log('====================================');
        // if (file.type !== 'image/webp') {
        //     message.error(`${file.name} is not a png file`);
        // }
        // return file.type === 'image/webp' ? true : Upload.LIST_IGNORE;
    }
    return (
        <Upload beforeUpload={beforeUpload} defaultFileList={list} directory style={{ marginBottom: 24 }}>
            <Button icon={<UploadOutlined />}>Upload Directory</Button>
        </Upload>
    )
}

export default UploadImage