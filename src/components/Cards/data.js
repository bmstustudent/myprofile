import how from "../../images/how.png";
import russian from "../../images/russian.png";
import mesto from "../../images/mesto.png";
import movies from "../../images/movies.png";
import me from "../../images/me.png";

const DATA = [
  {
    title: "Научиться учиться",
    description:
      "Мой первый код. Старница не адаптивная. Первое погружение в языки HTML и CSS",
    githubUrl: "https://github.com/bmstustudent/how-to-learn",
    url: "https://bmstustudent.github.io/how-to-learn/",
    imgUrl: how,
    id: 1,
  },
  {
    title: "Russian Travel",
    description:
      "Второй, более серьёзный проект. Страница полностью адаптивна ко всем разрешениям. Первое знакомство с flex",
    githubUrl: "https://github.com/bmstustudent/russian-travel",
    url: "https://bmstustudent.github.io/russian-travel/",
    imgUrl: russian,
    id: 2,
  },
  {
    title: "Mesto Russian",
    description:
      "Место- сайт, где можно делиться фотографиями. Есть функция удаления, увеличения фото. Страница адаптивная.",
    githubUrl: "https://github.com/bmstustudent/mesto-react",
    url: "https://bmstustudent.github.io/mesto-react/",
    imgUrl: mesto,
    id: 3,
  },
  {
    title: "Movies Explorer",
    description:
      "Полноценный сайт - сервис по поиску фильмов. Есть регистрация. Валидация форм.",
    githubUrl: "https://github.com/bmstustudent/movies-explorer-frontend",
    url: "https://movies-project.ru",
    imgUrl: movies,
    id: 4,
  },
  {
    title: "Profile-shulz",
    description:
      "Просто космос.",
    githubUrl: "https://github.com/bmstustudent/myprofile",
    url: "https://profile-shulz.ru/",
    imgUrl: me,
    id: 5,
  },
];

export { DATA };
