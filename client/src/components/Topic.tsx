import React from 'react';
import moment from 'moment';
import TopicType from '../types/topicType';
import CSS from 'csstype';
import upImgSrc from "../assets/images/up.png";
import downImgSrc from "../assets/images/down.png";
import recBinSrc from "../assets/images/recycle_bin.png";
import {
  DeleteTopic,
  UpdateScore
} from '../types/functionTypes';


// style declarations
interface Styles {
  topicCard: CSS.Properties;
  voting: CSS.Properties;
  score: CSS.Properties;
  scoreImg: CSS.Properties;
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreImg: {
    cursor: 'pointer',
  },
  scoreNumber: {
    margin: '1.2vh 0',
    padding: '0',
    fontWeight: 'bold',
    fontSize: '1.2rem',
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
  deleteTopic: DeleteTopic;
  updateScore: UpdateScore;
}

const Topic: React.FC<PropTypes> = ({ topic, deleteTopic, updateScore }) => {
  return (
    <div style={st.topicCard}>
      <div style={st.voting}>
        <div style={st.score}>
          <img
            style={st.scoreImg}
            src={upImgSrc}
            height="20"
            width="40"
            alt="up vote"
            onClick={() => updateScore(topic._id, true)}
          />
          <p style={st.scoreNumber}>{topic.score}</p>
          <img
            style={st.scoreImg}
            src={downImgSrc}
            height="20"
            width="40"
            alt="down vote"
            onClick={() => updateScore(topic._id, false)}
          />
        </div>
        <div style={st.topicInfo}>
          <h3 style={st.topicInfoH3}>{topic.topicName}</h3>
          <p style={st.topicInfoP}>
            <span style={st.createdOn}>Created on:</span>
            {moment(topic.createdDate).format('Do MMM')}
          </p>
        </div>
      </div>
      <img
        style={st.bin}
        src={recBinSrc}
        height="30"
        width="60"
        alt="recycle bin"
        onClick={() => deleteTopic(topic._id)}
      />
    </div>
  );
}

export default Topic;
