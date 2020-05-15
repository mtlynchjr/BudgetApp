import axios from 'axios'

const base_url = '/api/record'

export default {
    getAllRecords() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    }
}