import React from 'react';
import Profile from '../Profile/Profile'
import Projects from '../Projects/Projects'
import Tech from '../Tech/Tech'
import Contacts from '../Contacts/Contacts'


function Main() {
  return (
    <>
      <main className='main'>
        <Profile />
          <Projects />
        <Tech />
        <Contacts />
      </main>
    </>
  )
}

export default Main;
