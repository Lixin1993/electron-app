import {
    DesktopOutlined,
    PieChartOutlined,
    CloudUploadOutlined,
    FileSearchOutlined,
  } from '@ant-design/icons'
import Competition from '../pages/competition'
import Convention from '../pages/convention'
import Rule from '../pages/rule'
import CompetitionQuestions from '../pages/CompetitionQuestions'
import ConventionQuestions from '../pages/ConventionQuestions'

const config = [
    { name: '竞赛题库', title: 'competition', page: Competition, icon: <DesktopOutlined /> },
    { name: '常规题库', title: 'convention', page: Convention, icon: <PieChartOutlined /> },
    { name: '题库上传', title: 'questions', icon: <CloudUploadOutlined />, children: [{
        name: '竞赛题库', title: 'competitionQuestions', page: CompetitionQuestions,
    }, {
        name: '常规题库', title: 'conventionQuestions', page: ConventionQuestions,
    }]},
    { name: '使用说明', title: 'rule', page: Rule, icon: <FileSearchOutlined /> },
]

export default config