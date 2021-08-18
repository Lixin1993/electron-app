import React, { useState } from 'react'
import { Radio, Row, Col, Input } from 'antd'

const Form = (props) => {
    const { changeType, changeLevel, selectedType, selectedLevel } = props
    const [type, setType] = useState(selectedType)
    const [level, setLevel] = useState(selectedLevel)

    const onChangeType = (e) => {
        const value = e.target.value
        changeType(value)
        setType(value)
    }

    const onChangeLevel = (e) => {
        const value = e.target.value
        changeLevel(value)
        setLevel(value)
    }

    return (
        <Row>
            <Col span={5}>
                <Input placeholder="试卷名称搜索" />
            </Col>
            <Col push={2} span={5}>
                <Radio.Group value={type} onChange={onChangeType}>
                    <Radio.Button value="convention">常规</Radio.Button>
                    <Radio.Button value="competition">竞赛</Radio.Button>
                </Radio.Group>
            </Col>
            <Col push={2} span={8}>
                <Radio.Group value={level} onChange={onChangeLevel}>
                    <Radio.Button value="easy">简单</Radio.Button>
                    <Radio.Button value="normal">正常</Radio.Button>
                    <Radio.Button value="hard">困难</Radio.Button>
                </Radio.Group>
            </Col>
        </Row>
    )
}

export default Form