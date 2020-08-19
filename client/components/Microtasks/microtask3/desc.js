import React from 'react'
import ReactMarkdown from 'react-markdown'

const Dummy = () => {

  const text3 = `
  # Дан такой код.

  \`
  import React from 'react'

const /USERS_URL = 'http://5f32c583ec83300016137a8e.mockapi.io/api/v1/users?limit=10';
const /NUMBER_OF_USERS = 75
export default function Table () {
    return (
        <div>
            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
                <tbody></tbody>
            </table>
        <section className="pagination">
            <button className="first-page-btn">first</button>
            <button className="previous-page-btn">previous</button>
            <button className="next-page-btn">next</button>
            <button className="last-page-btn">last</button>
        </section>
    </div>
    );
};
\`
https://example.com/api/users принимает параметр page
http://5f32c583ec83300016137a8e.mockapi.io/api/v1/users?limit=10&page=0
http://5f32c583ec83300016137a8e.mockapi.io/api/v1/users?limit=10&page=1

## Лимит всегда должен быть равен 10

*1. Задание
Получить данные с помощью fetch (для этого надо создать стейт с числовым параметром page и добавить его в запрос )
fetch(url).then(r => r.json()).then(body => {})

*2. Вывести данные текущей страницы в таблицу. Структура тегов table>tbody>tr(строка таблицы)>td(ячейка таблицы)

*3. Сделать возможность перемещения по страницам с помощью кнопок
На первую страницу
На страницу назад
На страницу вперед
На последнюю страницу

Для переходово надо менять параметр стейта  page

*4. Кнопки должны иметь аттрибут disabled
- если это первые две кнопки и страница 0
- если это последние две кнопки и страница последняя

Для работы вам надо будет использовать математические функции
- Mathmax - вычислить максимальоне число из двух
- Mathceil - округление наверх не целого числа

Из реакта нужно использовать useState (для хранения страницы), useEffect

Например
Mathceil(7.5) === 8`

  return (
    <div className="p-2">
      <ReactMarkdown source={text3} />
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
