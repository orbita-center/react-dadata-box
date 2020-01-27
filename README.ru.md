# react-dadata-box
[![GitHub](https://img.shields.io/github/license/orbita-center/react-dadata-box)](https://github.com/orbita-center/react-dadata-box/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/react-dadata-box)](https://www.npmjs.com/package/react-dadata-box)
[![npm](https://img.shields.io/npm/dm/react-dadata-box)](https://www.npmjs.com/package/react-dadata-box)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-dadata-box)](https://bundlephobia.com/result?p=react-dadata-box)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-dadata-box/peer/react?logo=react)](https://www.npmjs.com/package/react)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-dadata-box/peer/react-dom?logo=react)](https://www.npmjs.com/package/react-dom)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![](https://img.shields.io/badge/TypeScript-types-blue?logo=typescript)](https://www.typescriptlang.org/)


#### Язык документации
<u>*Russian*</u> | [English](README.md)
___

React компонент для использования API сервиса [DaData](https://dadata.ru/api/#suggestv), реализованный в виде поля ввода с выпадающим списком загруженных с сервиса "подсказок",
запрашиваемых и уточняющихся по мере пользовательского ввода. Компонент предоставлет удобные средства навигации и управления с клавиатуры в дополнение к возможности выбора мышью.

#### Демонстрация 
[![](https://img.shields.io/badge/CodeSandbox-playground-black?logo=codesandbox)](https://codesandbox.io/s/react-dadata-box-example-g9xb0)

в верхней части скринкаста отображаются клавиатурные нажатия выведенные при помощи [keycastr](https://github.com/keycastr/keycastr) приложения для MacOS

![](proof_of_cocept.gif)

[![](https://img.shields.io/badge/SHAREWARE-WARNING-orange)](https://en.wikipedia.org/wiki/Shareware&logo=wikipedia)


 [DatData](https://dadata.ru/api/#suggestv) сервис является [shareware](https://img.shields.io/badge/SHAREWARE-gray?link=https://en.wikipedia.org/wiki/Shareware&logo=wikipedia) (т.е. условно-бесплатный), для его использования необходим токен (персональный или для организации).
Для персонального использования необходимо зарегестрировать [Account](https://dadata.ru/#registration_popup), ваш персональный токен позволяет осуществлять не более 10000 запросов к API в сутки.

### Утсановка
```
npm install react-dadata-box
```

### Пример использования
```javascript
import ReactDadataBox from 'react-dadata-box';

// ...

<ReactDadataBox token="API_KEY" query="Москва" />
```

### Свойства компонента (Props)

#### allowClear ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-false-lightgrey)
```typescript
allowClear?: boolean;
```
определяет отображение элемента UI для очищения выбранного значения (при 'очистке' вызываются соотв. события изменения значения)
___

#### autocomplete ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-"off"-lightgrey)
```typescript
allowClear?: 'on' | 'off';
```
значение свойства 'autocomplete' передаваемого в поле ввода 
___
#### customActions ![](https://img.shields.io/badge/optional-green)
Компонент\[ы] или функция его возвращающая, для определения 'произвольных действий' (custom actions)
которые размещаются обособленной отдельной группой в конце выпадающего списка подсказок.  
```typescript
customActions?: ((suggestions: DadataSuggestion[]) => React.ReactNode) | React.ReactNode;
```
___

#### customStyles ![](https://img.shields.io/badge/optional-green)
пользовательская стилизация для встроенных компонентов: выпадающий список, отдельно взятая подсказка, помощь по управлению, произвольное действие
Объект ключами которого выступают встроенные css классы для соответствующих встроенных компонентов, а в качестве занчения может быть установлена строка которая будет использована как дополнительное имя класса css, или объект с описанием стилей который будет передан в style свойство соответвующего react примитива. 
```typescript
  customStyles?: {
    'react-dadata__custom-action'?: string | React.CSSProperties;
    'react-dadata__suggestion'?: string | React.CSSProperties;
    'react-dadata__suggestion-note'?: string | React.CSSProperties;
    'react-dadata__suggestions'?: string | React.CSSProperties;
  }
```
___
#### customEndpoint ![](https://img.shields.io/badge/optional-green)
пользовательский URI для запроса сервиса DaData (если он расположен за прокси сервером или развернут локально в собственной инфраструктуре). Может быть строкой, в таком случае воспринимается как путь до расположения корня сервиса DaData (путь к конкретному вызову API будет добавляться автоматически),
так же может быть установлен в качестве объекта с полями 'host' и/или 'api', воспринимаемых как путь к корню расположения сервиса и подмена пути вызова API, соответственно.
```typescript
customEndpoint?: string | { host?: string; api?: string };
```
![](https://img.shields.io/badge/default-object-lightgrey) 
```javascript
{
  host: 'https://suggestions.dadata.ru',
  api: 'suggestions/api/4_1/rs/suggest'
}
```
___
#### customInput ![](https://img.shields.io/badge/optional-green)
функция принимающая аргументом объект (свойства передаваемые во встроенный input), возвращающая пользовательскую реализацию input компонента или другой компонент реализующий схожий интерфейс.
```typescript
interface BaseInputProps<T = HTMLInputElement> {
  autoComplete: boolean | 'off';
  className: string;
  onBlur: React.FocusEventHandler<T>;
  onChange: React.ChangeEventHandler<T>;
  onFocus: React.FocusEventHandler<T>;
  onKeyDown: React.KeyboardEventHandler<T>;
  placeholder: string;
  value: string;
}
...
customInput?: (props: BaseInputProps) => React.ReactNode;
```
___
#### debounce ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-350-lightgrey)
задержка перед запросом данных с сервиса во время непрерывного пользовательского ввода (debounce) в милисекундах
```typescript
debounce?: number;
```
___
#### onChange ![](https://img.shields.io/badge/optional-green)
обработчик события выбора подсказки пользователем (клик по элементу в списке или Enter для элемента который в данный момент выделен), принимает объект отражающий выбранную 'подсказку' в качестве аргумента 
```typescript
onChange?: (suggestion: DadataSuggestion) => void;
```
___
#### onIdleOut ![](https://img.shields.io/badge/optional-green)
обработчик события вызываемого в случаях когда по текущему запросу пользователя сервис не возвращает подсказок, принимает в качестве аргумента текущую строку запроса.
```typescript
 onIdleOut?: (query: string) => void;
```
___
#### payloadModifier ![](https://img.shields.io/badge/optional-green)
патч-объект или функция возвращающая патч-объект, объединяемый с сформированным автоматически объектом нагрузки (payload) для сервиса DaData. Таким образом можно формировать запросы со сложной фильтрацией и использовать прочие возможности предоставляемые API сервиса (не реализованные в интерфейсе компонента) 
```typescript
interface BasePayload {
  query: string;
  count?: number;
}
...
object | ((payload: BasePayload) => BasePayload & object);
```
___
#### placeholder ![](https://img.shields.io/badge/optional-green)
значение свойства 'placeholder' передаваемого в поле ввода
```typescript
placeholder?: string;
```
___
#### query ![](https://img.shields.io/badge/optional-green)
непосредственно строка запроса для сервиса DaData (query свойство в payload)
```typescript
query?: string;
```
___
#### showNote ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-true-lightgrey)
определяет отображение "подсказки" по управлению с клавиатуры (отображаемую вверху выпадающего списка)
```typescript
showNote?: boolean;
```
___
#### silentQuery ![](https://img.shields.io/badge/optional-green)
специальная строка запроса (не отображаемая в поле ввода) определяющая набор запрашиваемых значений, если основная строка поиска не установлена или пуста
(если основная строка поиска установлена - значение этого свойства игнорируется)
```typescript
silentQuery?: string;
```
___
#### token ![](https://img.shields.io/badge/required-important)
авторизационный токен сервиса [DaData](https://dadata.ru/api/#suggestv)
```typescript
token: string;
```
___
#### type ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-"address"-lightgrey)
тип запрашиваемых "подсказок" (в терминологии сервиса DaData): 'address' (адреса), 'bank' (банки), 'email' (электронная почта), 'fio' (ФИО + определение пола), 'fms_unit' (отделение выдавшее паспорт РФ) 
```typescript
type?: 'address' | 'party' | 'bank' | 'email' | 'fio' | 'fms_unit';
```
___
