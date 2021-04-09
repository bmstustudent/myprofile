import mail from '../../images/icons/mail.svg';
import github_me from '../../images/icons/github_me.svg';
import telegram from '../../images/icons/telegram.svg';
import gif from '../../images/icons/contacts.gif';

function Contacts() {
    return (
        <div className='contacts' id='contacts' >
            <p className='contacts__title'>Контакты</p>
                <div className="contacts__container">
                    <a href="mailto:bmstustudent@yandex.ru" className="contacts__link" target='_blank'>
                        <img className='contacts__image' src={mail} alt='ul1' />
                    </a>
                    <a href="https://github.com/bmstustudent" className="contacts__link" target='_blank'>
                        <img className='contacts__image' src={github_me} alt='ul1' />
                    </a>
                    <a href="https://t.me/therealshulc" className="contacts__link" target='_blank'>
                        <img className='contacts__image' src={telegram} alt='ul1' />
                    </a>
                </div>
        </div>
    )
}

export default Contacts;