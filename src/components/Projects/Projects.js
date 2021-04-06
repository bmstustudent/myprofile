import git from '../../images/icons/git.svg'
import html from '../../images/icons/html.svg'
import css from '../../images/icons/css.svg'
import js from '../../images/icons/javascript.svg'
import node from '../../images/icons/nodes.svg'
import github from '../../images/icons/github.svg'
import coding from '../../images/icons/coding.svg'

function Projects() {
    return (
        <div className='projects' id='projects'>
            <p className='projectss__title'>Стек технологий</p>
            <div className='projects__container'>
                <ul className='projects__list'>
                    <li className='projects__item'>
                        <p className='projects__title'>HTML</p>
                        <img className='projects__image' src={html} alt='ul1' />
                        {/* <p className='projects__text'> */}
                            <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                        {/* </p> */}
                    </li>
                    <li className='projects__item'>
                        <p className='projects__title'>CSS</p>
                        <img className='projects__image' src={css} alt='ul1' />
                        <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='projects__item'>
                        <p className='projects__title'>JAVASCRIPT</p>
                        <img className='projects__image' src={js} alt='ul1' />
                        <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='projects__item'>
                        <p className='projects__title'>REACT</p>
                        <img className='projects__image' src={node} alt='ul1' />
                        <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='projects__item'>
                        <p className='projects__title'>GIT</p>
                        <img className='projects__image' src={git} alt='ul1' />
                        <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='projects__item'>
                        <p className='projects__title'>GITHUB</p>
                        <img className='projects__image' src={github} alt='ul1' />
                        <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='projects__item'>
                        <p className='projects__title'>CODING</p>
                        <img className='projects__image' src={coding} alt='ul1' />
                        <ul className='projects__text-list'>
                                <li className='projects__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='projects__text-item'>Использование семантики тегов</li>
                                <li className='projects__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='projects__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='projects__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    {/* <li className='projects__item'>
                        <p className='projects__title'>HTML</p>
                        <img className='projects__image' src={html} alt='ul1' />
                        <p className='projects__text'>HTML</p>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Projects;