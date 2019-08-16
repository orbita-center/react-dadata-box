# React Dadata
React компонент для подсказок с помощью сервиса DaData.ru

Поддерживаются подсказки адресов, организаций, банков.

### Установка
```
npm install react-dadata-box
```
или
```
yarn react-dadata-box
```

### Пример
```javascript
import ReactDadataBox from 'react-dadata-box';

// ...

<ReactDadataBox token="API_KEY" query="Москва" />
```

### Свойства

| Свойство  | Обязательный | Тип | Описание | По умолчанию |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| token  | Да  | string  | Авторизационный токен DaData.ru | |
| type | Нет | string | Тип данных, которые необходимо запросить: адрес(address), организация(party) или банк(bank), почта(email), фио(fio), паспорт-подразделение(fms_unit) | "address" |
| placeholder  | Нет  | string  | Текст placeholder | |
| query  | Нет  | string  | Начальное значение поля ввода  | |
| onChange  | Нет  | function | Функция, вызываемая при выборе подсказки  | |
| autocomplete  | Нет  |string  | Параметр описывающий автозаполнение поля, например street-address, если не задан, будет установлен как off  | "off" |
| count | Нет | string | Кол-во возвращаемых записей | 10 |
| className | Нет | string | Дополнительный класс стилей | |
| allowClear | Нет | boolean | Показывать иконку для очищения текущего значения | false |
| showNote| Нет | boolean | Показывать подсказку по возможностям управления для пользователя в выпадающем списке | true |

