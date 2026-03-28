import axios from 'axios'

// Use environment variable or fallback to localhost for dev
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const createLead = (leadData) => api.post('/api/leads/', leadData)
export const getLeads = () => api.get('/api/leads/')
