import React from 'react'
import ReactMarkdown from 'react-markdown'


const Dummy = () => {
  const text5 =`
  # Сделать компонент - часы

  Одно поле в котором задаются минуты. И одна кнопка Старт.
  Как только пользователь нажимает старт, появляются два дива один
  с двумя дивами с большими цифрами - минуты и секунды другой с кнопкой паузы

  Каждую секунду идет отсчет назад

  - 01 : 59
  -  01 : 58
  - и так далее.

  В любой момент можно нажать на кнопку паузу -
  таймер остановится и снова на нее нажать таймер начнется
  Как только таймер доходит до 00 : 00 - таймер останавливается -
  выводится сообщение FINISHED под часами

## Для шрифтов используйте шрифт

### Roboto - typeface-roboto
Для форматирования 0 впереди используйте
функцию https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

# План действий

- 1. Создать кнопку и поле для ввода с типом number(type=number)
- 2. Создать два стейта для минут и секунд
- 3. При нажатии на кнопку устанавливать стейты в начальное значение например для двух минут - 1 : 59
- 4. Создать useEffect который будет зависеть от стейта минут и секунд внутри которого - выполнить setTimeout, который вычтет секунду и проверит нужно жи вычитать минуты
- 5. Создать стейт для идентификатора таймаута, чтобы можно было в любой момент остановить таймер clearTimeout(timeoutIdtimeoutId)
- 6. Добавить логику остановки таймера на 00 00 в юзЭффекте
- 7. Добавить логику остановки - старта таймера на клик кнопки - остановить  clearTimeout(timeoutId) - запустить запустить еще раз таймаут
- 8. вынести функцию перехода на -1 секунду отдельно и использовать внутри юзэффекта и кнопки (продолжить)
- 9. проверять timeoutId - если null  показать свг иконку плей , иначе показать паузу на кнопке пауза продолжить

Для решения используйте  setTimeout

чтиво по теме -

https://learn.javascript.ru/settimeout-setinterval

использование setInterval в подобных задачах - считается ошибкой, тк setInterval не гарантирует выховы в равные интервалы времены и чем дольше работает setInterval, тем больше смещение будет.`

  return (
    <div className=" w-ful p-2">
      <ReactMarkdown source={text5} />

    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
