import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginEvent, Notifier } from '../home/notifier';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });

    sendLogout();
  }

  async function sendLogout() {
    try{
      Notifier.broadcastEvent(userName, LoginEvent.End, "");
    }
    catch{
      console.log("yeah that didn't work bruh");
    }
  }
  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button variant='primary' onClick={() => navigate('/home')}>
        Continue
      </Button>
      <Button variant='secondary' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
