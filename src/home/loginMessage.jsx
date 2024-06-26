import React from 'react';
import { LoginEvent, Notifier } from './notifier';

export function LoginMessage(props) {
    const userName = props.userName;
    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
        Notifier.addHandler(handleGameEvent);
    
        return () => {
          Notifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event) {
       setEvent([...events, event]);
    }   

    function createMessageArray() {
        const messageArray = [];
        for (const [i, event] of events.entries()) {
          let message = 'unknown';
          if (event.type === LoginEvent.End) {
            message = `scored ${event.value.score}`;
          } else if (event.type === LoginEvent.Start) {
            message = ` has logged in`;
          } else if (event.type === LoginEvent.System) {
            message = event.value.msg;
          }
    
          messageArray.push(
            <div key={i} className='event'>
              <span className={'player-event'}>{event.from.split('@')[0]}</span>
              {message}
            </div>
          );
        }
        return messageArray;
      }

  return (
    <div className='players'>
      You are logged in as: 
      <span className='player-name'>{userName}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
