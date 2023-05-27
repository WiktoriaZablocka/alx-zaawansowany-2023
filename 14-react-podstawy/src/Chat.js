import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Chat() {

    const [messageValue, setMessageValue] = useState('')
    const [authorValue, setAuthorValue] = useState('');
    const [Informations, setInformation] = useState([]);
  
    const handleSubmit = (event) => {
    event.preventDefault();
  
      setInformation([
        ...Informations,
        {
          id: uuidv4(),
          author: authorValue,
          message: messageValue
        }
      ])
  
      setAuthorValue('');
      setMessageValue('')
    }
  
const handleAuthorChange = (event) => {
   
    setAuthorValue(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessageValue(event.target.value);
  }

    return(
        <form onSubmit={handleSubmit}>
        <label>
          Author
          <input
            type="text"
            value={authorValue}
            onChange={handleAuthorChange}
          />
        </label>
        <label>
          Message
          <input
            type="text"
            value={messageValue}
            onChange={handleMessageChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
    )
}


export default Chat;
