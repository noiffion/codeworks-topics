import TopicType from '../types/topicType';


const API_URL = 'http://localhost:3030';

export default {
  getTopics: async () => {
    const init: RequestInit = {
      method: 'GET',
    }
    return await defaultRequest('topics', init);
  },
  newTopic: async (data: TopicType) => {
    const init: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }
    return await defaultRequest('topics', init);
  },
  updateTopic: async (topicId: string, upDown: string) => {
    const init: RequestInit = {
      method: 'PUT',
    }
    return await defaultRequest(`topics/${topicId}/${upDown}`, init);
  },
  deleteTopic: async (topicId: string) => {
    const init: RequestInit = {
      method: 'DELETE',
    }
    return await defaultRequest(`topics/${topicId}`, init);
  }
}


const defaultRequest = async (path: string, init: RequestInit) => {
  return fetch(`${API_URL}/${path}`, init)
    .then(result => result.status >= 400 ? Promise.reject(result) : result)
    .then(result => result.json())
    .catch(console.error);
}
