import me from '../../images/portfolio.jpg';

function Profile() {
    return (
        <div className='profile' id='about-me'>
            <div className='profile__text'>Привет, меня зовут Павел и я начинающий web разработчик</div>

            <div className='profile__container'>
                <div className='profile__title'>Какой то рандомный текст.Какой то рандомный текст.
                Какой то рандомный текст.
                Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.
                Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.
                Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.
                Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.
                Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.
                Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.Какой то рандомный текст.
                </div>
                <img className='profile__image' src={me} alt='me' />
            </div>
        </div>
    )
}

export default Profile;