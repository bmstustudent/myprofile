import movies from '../../images/icons/movies.png'

function Projects() {
    return (
        <div className='projects' id='projects'>
            <p className='projects__title'>Мои проекты</p>
            <div className="projects__container">
                <p className="projects__full-title">Fullstack проекты</p>
                <ul className="projects__list">
                    <li className="projects__item projects__item-movies project_width_l project_height_l">
                        <a href="https://github.com/bmstustudent/movies-explorer-frontend" className="projects__overlay"
                           target="_blank">Movies-explorer</a>
                    </li>
                    <li className="projects__item projects__item-mesto project_width_l project_height_l">
                        <a href="https://github.com/bmstustudent/react-mesto-api-full" className="projects__overlay"
                           target="_blank">Mesto</a>
                    </li>
                    <p className="projects__full-title">Адаптивная вёртка</p>
                    <li className="projects__item projects__item-rus project_width_l project_height_l">
                        <a href="https://github.com/bmstustudent/react-mesto-api-full" className="projects__overlay"
                           target="_blank">Петешествия по России</a>
                    </li>
                    <p className="projects__full-title">Одностраницный сайт</p>
                    <li className="projects__item projects__item-how project_width_l project_height_l">
                        <a href="https://github.com/bmstustudent/react-mesto-api-full" className="projects__overlay"
                           target="_blank">Научиться учиться</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;