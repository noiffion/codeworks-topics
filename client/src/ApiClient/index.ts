import TopicType from '../types/topicType';


const API_URL = 'http://localhost:3030';

interface FetchOptions {
  method: string;
  headers?: object;
  body?: string;
}

export default {
  getTopics: async () => {
    const init: FetchOptions = {
      method: 'GET',
    }
    return await defaultRequest('topics', init);
  },
  newTopic: async (data: TopicType) => {
    const init: FetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }
    return await defaultRequest('topics', init);
  },
  updateTopic: async (topicId: string, upDown: string) => {
    const init: FetchOptions = {
      method: 'PUT',
    }
    return await defaultRequest(`topics/${topicId}/${upDown}`, init);
  },
  deleteTopic: async (topicId: string) => {
    const init: FetchOptions = {
      method: 'DELETE',
    }
    return await defaultRequest(`topics/${topicId}`, init);
  }
}


const defaultRequest = async (path: string, init: object) => {
  return fetch(`${API_URL}/${path}`, init)
    .then(result => result.status >= 400 ? Promise.reject(result) : result)
    .then(result => result.json())
    .catch(console.error);
}
