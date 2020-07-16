import React from 'react';
import CSS from 'csstype';


// style declarations
interface Styles {
  newTopic: CSS.Properties;
  newTopicForm: CSS.Properties;
}
const st: Styles = {
  newTopic: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  newTopicForm: {
    marginRight: '12vw',
  },
}

interface PropTypes {
  newTopicSubmit: any;
  newTopicChange: any;
  newTopicName: any;
}

const NewTopic: React.FC<PropTypes> = ({ newTopicSubmit, newTopicChange, newTopicName }) => {

  return (
    <section style={st.newTopic}>
      <form style={st.newTopicForm} onSubmit={(event) => {
          console.log('hello');
          newTopicSubmit(event);
        }}>
        <input type="text" value={newTopicName} onChange={newTopicChange} />
        <input type="submit" value="Add Topic"></input>
      </form>
    </section>
  )

}

export default NewTopic;
