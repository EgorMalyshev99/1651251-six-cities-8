import './not-found.css';

function NotFound(): JSX.Element {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Страница не найдена</h1>
      <img className="not-found__img" src="https://www.bbitrix.ru/upload/medialibrary/1d4/1d4bc838a0107b1b52418ce53e6715e8.png" alt="" />
      <p className="not-found__text">Похоже, что по этому адресу ничего нет :(</p>
      <a href="/" className="not-found__link">На главную</a>
    </div>
  );
}

export default NotFound;
