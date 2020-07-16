import React, {useState, useEffect } from 'react';
import ApiClient from '../ApiClient';
import CSS from 'csstype';
import TopicType from '../types/topicType';
import Topic from './Topic';


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

  useEffect((): void => {
    ApiClient.getTopics()
      .then(topics => setTopicList(topics))
      .catch(console.error);
  }, []);

  const topicBoxes = topicList.map(topic => <Topic key={topic._id} topic={topic}/>);
  return (
    <main style={st.main}>
      {topicBoxes}
    </main>
  );
}

export default TopicList;
