function NavTab() {
  return (
    <ul className='navtab'>
      <li className='navtab__item'>
        <a href='#about-me' className='navtab__link'>Обо мне</a>
      </li>
      <li className='navtab__item'>
        <a href='#projects' className='navtab__link'>Проекты</a>
      </li>
      <li className='navtab__item'>
        <a href='#techs' className='navtab__link'>Стек</a>
      </li>
      <li className='navtab__item'>
        <a href='#contacts' className='navtab__link'>Контакты</a>
      </li>
    </ul>
  )
}

export default NavTab;
