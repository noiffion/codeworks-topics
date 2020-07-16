import React, {useState, useEffect, ReactEventHandler } from 'react';
import ApiClient from '../ApiClient';
import CSS from 'csstype';
import TopicType from '../types/topicType';
import Topic from './Topic';
import NewTopic from './NewTopic';


// style declarations
interface Styles {
  main: CSS.Properties;
}
const st: Styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}


interface PropTypes { }

const TopicList: React.FC<PropTypes> = () => {

  const [topicList, setTopicList] = useState<TopicType[]>([]);
  const [newTopicName, setNewTopicName] = useState<string>('');

  useEffect((): void => {
    ApiClient.getTopics()
      .then(topics => setTopicList(topics))
      .catch(console.error);
  }, []);

  const newTopicSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newTopic: TopicType = {
      topicName: newTopicName,
      createdDate: (new Date()).toLocaleDateString(),
      score: 0,
    }
    ApiClient.newTopic(newTopic)
      .then(newTopic => setTopicList(topicList => [...topicList, newTopic]))
      .catch(console.error);
  }

  const newTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newName = event.target.value;
    setNewTopicName(newTopicName => newName);
  }

  const topicBoxes = topicList.map(topic => <Topic key={topic._id} topic={topic}/>);
  return (
    <main style={st.main}>
      <NewTopic
        newTopicSubmit={newTopicSubmit}
        newTopicChange={newTopicChange}
        newTopicName={newTopicName}
      />
      {topicBoxes}
    </main>
  );
}

export default TopicList;
