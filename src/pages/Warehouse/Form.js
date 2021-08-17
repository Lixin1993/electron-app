import React, { useState } from 'react'
import { Radio, Row, Col, Input } from 'antd'

const Form = () => {
    const [size, setSize] = useState('large')
    // const [difficulty, setDifficulty] = useState('hard')
    return (
        <Row>
            <Col span={5}>
                <Input placeholder="试卷名称搜索" />
            </Col>
            <Col push={2} span={5}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="large">常规</Radio.Button>
                    <Radio.Button value="default">竞赛</Radio.Button>
                </Radio.Group>
            </Col>
            {/* <Col span={4}>
                <Radio.Group value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                    <Radio.Button value="hard">困难</Radio.Button>
                    <Radio.Button value="normal">正常</Radio.Button>
                    <Radio.Button value="easy">简单</Radio.Button>
                </Radio.Group>
            </Col> */}
        </Row>
    )
}

export default Form