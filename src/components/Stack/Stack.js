import git from '../../images/icons8-git.svg';
import node from '../../images/icons8-nodejs.svg'
import react from '../../images/icons8-react-native.svg'

function Stack() {
    return (
        <div className='stack' id='techs'>
            <p className='stack__title'>Раздел Технологии</p>
            <div className='stack__container'>
                <ul className='stack__list'>
                    <li className='stack__item'>
                        <img className='stack__image' src={git} alt='stack-1' />
                        <p className='stack__text'><span>HTML</span> Спектр основных тегов и атрибутов для создания секций сайта и корректной работы HTML-кода;
                        - Использование семантики тегов;
                        - Владение мета-тегами, работа с favicon, og-тегами, подключение шрифтов;
                        - Владение компонентным подходом к созданию элементов проекта;
- Умение создавать компоненты для переиспользования и избегать дублирования кода.</p>
                    </li>
                    <li className='stack__item'>
                        <img className='stack__image' src={git} alt='stack-1' />
                        <p className='stack__text'><span>HTML</span> Основные концепции и технологии: типы элементов, позиционирование, flexbox, grid-вёрстка media queries, работа с формами, анимациями, трансформации;
- Способы именования элементов/компонент — БЭМ;
- adaptive/responsive подход, создание кросс-браузерных сайтов для всех популярных разрешений экрана, использование media queries;
- Работа с префиксами, знание [caniuse.com](http://caniuse.com/) и особенностей браузеров.</p>
                    </li>
                    <li className='stack__item'>
                        <img className='stack__image' src={git} alt='stack-1' />
                        <p className='stack__text'><span>JS</span> Cинтаксис ES5;
- Концепции: переменная, условие, цикл, функция;
- Разные типы и структуры данных, умение осознанного (явно и неявно) приведения одного типа данных к другому;
- Понимание лексической области видимости (функциональной и блочной), осознанное использование замыканий;
- Работа с объектами браузера и событиями;
- Чтение и анализ ошибок, умение «ловить» исключения;
- Cпособы установки this, жесткая привязка и потеря контекста;
- ООП парадигма (в контексте JS: функция-конструктор, прототип,  ссылка __proto__, Object.create, .setPrototypeOf, .getPrototypeOf);
- Написание асинхронного кода, при использовании коллбеков, промисов, async/await;
- Однопоточность, "main thread" и "event loop queue";
- AJAX, работа с запросами к API и обработка ответов / классические XMLHttpRequest и fetch / обработка JSON ответов;
- Концепция модулей. ES6 модули;
- Принципы работы с JS-фреймворком для создания интерфейсов.</p>
                    </li>
                    <li className='stack__item'>
                        <img className='stack__image' src={git} alt='stack-1' />
                        <p className='stack__text'><span>GIT</span> Понимание принципа: сохранение версий, ветвление проекта;
- Базовые команды: push, pull, add, commit, branch, merge;
- Деплой на github pages;
- Работа с github через приложение и терминал;
- Совместная работа над проектом;
- Навык чтения readme, создание issue и pull requests.</p>
                    </li>
                    <li className='stack__item'>
                        <img className='stack__image' src={react} alt='stack-1' />
                        <p className='stack__text'><span>РАБОЧЕЕ ОКРУЖЕНИЕ</span> Основы bash (создание папки, перемещение, изменение файлов), основы PowerShell (windows);
- Создание окружения под проект (npm);
- Настройка сборки проекта (webpack).</p>
                    </li>
                    <li className='stack__item'>
                        <img className='stack__image' src={node} alt='stack-1' />
                        <p className='stack__text'><span>DESIGN x CODE</span> Работа с Visual Studio Code;
- Работа с макетом — основной инструмент Figma.com;
- Работа с dev tools внутри браузера (Yandex-браузер, Chrome);
- Работа с дебаггингом в js-консоли.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Stack;