import axios from 'axios'

export function initAxios() {
    axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'
    axios.interceptors.request.use((config) => {
        const reqConfig = {...config}
        if (config.url.includes('api.github.com')) {
            reqConfig.headers['Accept'] = 'application/vnd.github.v3+json'
            reqConfig.headers['Authorization'] = 'token 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'
        }
        return reqConfig
    })
}

export async function fetchSingleQuestions() {
    try {
        const res = await axios.get('https://api.github.com/repos/LiXin1993/PicGo/contents/img')
        return res.data || {}
    } catch {
        return {}
    }
}

export async function deleteSingleQuestions(payload) {
    try {
        const res = await axios.delete(`https://api.github.com/repos/LiXin1993/PicGo/contents/${payload.path}`, { params: { ...payload } })
        return res.data || {}
    } catch {
        return {}
    }
} 