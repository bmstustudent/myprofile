import React from 'react';
import Profile from '../Profile/Profile'
import Stack from '../Stack/Stack'
import Projects from '../Projects/Projects'
import Contacts from '../Contacts/Contacts'

function Main() {
  return (
    <>
      <main className='main'>
      <Profile />
      <Projects />
      <Stack />
      <Contacts />
      </main>
    </>
  )
}

export default Main;
