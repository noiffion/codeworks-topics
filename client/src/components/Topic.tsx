import React from 'react';
import TopicType from '../types/topicType';
import CSS from 'csstype';


// style declarations
interface Styles {
  topicCard: CSS.Properties;
  voting: CSS.Properties;
  score: CSS.Properties;
  scoreImg: CSS.Properties;
  scoreP: CSS.Properties;
  topicInfo: CSS.Properties;
  topicInfoP: CSS.Properties;
  topicInfoH3: CSS.Properties;
  scoreNumber: CSS.Properties;
  createdOn: CSS.Properties;
  bin: CSS.Properties;
}
const st: Styles = {
  topicCard: {
    border: '1px solid gray',
    width: '70vw',
    marginTop: '3vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  voting: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreImg: {
    cursor: 'pointer',
  },
  scoreP: {
    margin: '0.5vh 0',
    padding: '0',
  },
  topicInfo: {
    marginLeft: '5vw',
  },
  topicInfoP: {
    fontSize: '0.7rem',
    fontStyle: 'italic',
  },
  topicInfoH3: {
    cursor: 'pointer',
  },
  scoreNumber: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  createdOn: {
    color: 'slategray',
  },
  bin: {
    marginTop: '2vh',
    marginRight: '2vw',
    cursor: 'pointer',
  },
}


interface PropTypes {
  topic: TopicType;
}

const Topic: React.FC<PropTypes> = ({ topic }) => {
  return (
    <div style={st.topicCard}>
      <div style={st.voting}>
        <div style={st.score}>
          <img style={st.scoreImg} src="../../assets/images/up.png" height="20" width="40" alt="up vote"/>
          <p style={st.scoreNumber}>{topic.score}</p>
          <img style={st.scoreImg} src="../../assets/images/down.png" height="20" width="40" alt="down vote"/>
        </div>
        <div style={st.topicInfo}>
          <h3 style={st.topicInfoH3}>{topic.topicName}</h3>
          <p style={st.topicInfoP}><span style={st.createdOn}>Created on:</span> {topic.createdDate}</p>
        </div>
      </div>
      <img style={st.bin} src="../../assets/images/recycle_bin.png" height="30" width="60" alt="recycle bin"/>
    </div>
  );
}

export default Topic;


/*

*/