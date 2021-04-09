import git from '../../images/icons/git.svg'
import html from '../../images/icons/html.svg'
import css from '../../images/icons/css.svg'
import js from '../../images/icons/javascript.svg'
import node from '../../images/icons/nodes.svg'
import github from '../../images/icons/github.svg'
import coding from '../../images/icons/coding.svg'

function Tech() {
    return (
        <div className='tech' id='tech'>
            <p className='tech__title-mode'>Стек технологий</p>
            <div className='tech__container'>
                <ul className='tech__list'>
                    <li className='tech__item'>
                        <p className='tech__title'>HTML</p>
                        <img className='tech__image' src={html} alt='html' />
                        {/* <p className='projects__text'> */}
                            <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                        {/* </p> */}
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>CSS</p>
                        <img className='tech__image' src={css} alt='css' />
                        <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>JAVASCRIPT</p>
                        <img className='tech__image' src={js} alt='js' />
                        <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>REACT</p>
                        <img className='tech__image' src={node} alt='node' />
                        <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>GIT</p>
                        <img className='tech__image' src={git} alt='git' />
                        <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>GITHUB</p>
                        <img className='tech__image' src={github} alt='github' />
                        <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
                            </ul>
                    </li>
                    <li className='tech__item'>
                        <p className='tech__title'>CODING</p>
                        <img className='tech__image' src={coding} alt='code' />
                        <ul className='tech__text-list'>
                                <li className='tech__text-item'>Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода</li>
                                <li className='tech__text-item'>Использование семантики тегов</li>
                                <li className='tech__text-item'>Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов</li>
                                <li className='tech__text-item'>Владение компонентным подходом к созданию элементов проекта</li>
                                <li className='tech__text-item'>Умение создавать компоненты для переиспользования и избегать дублирования кода</li>
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

export default Tech;
