import {
    DesktopOutlined,
    PieChartOutlined,
    FileSearchOutlined,
  } from '@ant-design/icons'
import Paper from '../pages/Paper'
import Warehouse from '../pages/Warehouse'
import Rule from '../pages/Rule'

const config = [
    { name: '成品试卷', title: 'paper', component: Paper, icon: <DesktopOutlined />, path: '/paper' },
    { name: '单题题库', title: 'warehouse', component: Warehouse, icon: <PieChartOutlined />, path: '/warehouse' },
    { name: '使用说明', title: 'rule', component: Rule, icon: <FileSearchOutlined />, path: '/rule' },
]

export default config