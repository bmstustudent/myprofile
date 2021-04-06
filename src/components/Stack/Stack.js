// import git from '../../images/icons8-git.svg';
// import node from '../../images/icons8-nodejs.svg'
// import react from '../../images/icons8-react-native.svg'

// import git from '../../images/icons/git.svg'
// import html from '../../images/icons/html.svg'
// import css from '../../images/icons/css.svg'
// import js from '../../images/icons/javascript.svg'
// import node from '../../images/icons/nodes.svg'
// import github from '../../images/icons/github.svg'
import video from '../../images/icons/codes.mp4'

function Stack() {
    return (
        <div className='stack' id='techs'>
            <p className='stack__title'>Раздел Технологии</p>
            <video  controls autoPlay>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Stack;