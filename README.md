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

| Свойство  | Обязательный | Тип | Описание |
| ------------- | ------------- | ------------- | ------------- |
| token  | Да  | string  | Авторизационный токен DaData.ru  |
| type | Нет | string | Тип данных, которые необходимо запросить: адрес(address), организация(party) или банк(bank), почта(email), фио(fio)
| placeholder  | Нет  | string  | Текст placeholder  |
| query  | Нет  | string  | Начальное значение поля ввода  |
| onChange  | Нет  | function(suggestion: ReactDadata.DadataSuggestion)  | Функция, вызываемая при выборе подсказки  |
| autocomplete  | Нет  |string  | Параметр описывающий автозаполнение поля, например street-address, если не задан, будет установлен как off  |
| count | Нет | string | Кол-во возвращаемых записей, по умолчанию 10
| className | Нет | string | Дополнительный класс стилей
| allowClear | Нет | boolean | Показывать иконку для очищения текущего значения, по-умолчанию false

