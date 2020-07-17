import React from 'react';
import CSS from 'csstype';
import {
  NewTopicSubmit,
  NewTopicChange,
} from '../types/functionTypes';


// style declarations
interface Styles {
  newTopic: CSS.Properties;
  newTopicForm: CSS.Properties;
  newTopicInput: CSS.Properties;
  newTopicButton: CSS.Properties;
}
const st: Styles = {
  newTopic: {
    margin: '3vh 0 2vh 0',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  newTopicForm: {
    marginRight: '4vw',
    height: '10vh'
  },
  newTopicInput: {
    border: '1px solid gray',
    borderRadius: '3px',
    height: '35px',
    fontSize: '22px'
  },
  newTopicButton: {
    border: 'none',
    margin: '0 0 20px 5px',
    height: '55px',
    width: '100px',
    backgroundColor: 'skyblue',
    cursor: 'pointer',
    color: 'white'
  },
}


interface PropTypes {
  newTopicSubmit: NewTopicSubmit;
  newTopicChange: NewTopicChange;
  newTopicName: string;
}

const NewTopic: React.FC<PropTypes> = ({ newTopicSubmit, newTopicChange, newTopicName }) => {

  return (
    <section style={st.newTopic}>
      <form style={st.newTopicForm} onSubmit={(event) => newTopicSubmit(event)}>
        <input style={st.newTopicInput} type="text" value={newTopicName} onChange={newTopicChange} />
        <input style={st.newTopicButton} type="submit" value="Add Topic"></input>
      </form>
    </section>
  )

}

export default NewTopic;
