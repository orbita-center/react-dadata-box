![](https://img.shields.io/badge/ATTENTION-red)

**FOR TYPESCRIPT USERS!!!** in **1.3.4** release failed refactoring of types, it will be fixed in **1.3.5** version, at now please use previous version **1.3.3** for correct typings

# react-dadata-box
[![GitHub](https://img.shields.io/github/license/orbita-center/react-dadata-box)](https://github.com/orbita-center/react-dadata-box/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/react-dadata-box)](https://www.npmjs.com/package/react-dadata-box)
[![npm](https://img.shields.io/npm/dm/react-dadata-box)](https://www.npmjs.com/package/react-dadata-box)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-dadata-box)](https://bundlephobia.com/result?p=react-dadata-box)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-dadata-box/peer/react?logo=react)](https://www.npmjs.com/package/react)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/react-dadata-box/peer/react-dom?logo=react)](https://www.npmjs.com/package/react-dom)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![](https://img.shields.io/badge/TypeScript-types-blue?logo=typescript)](https://www.typescriptlang.org/)

#### README LANGUAGE
[Russian](README.ru.md) | <u>*English*</u>
___

React component for use [DaData](https://dadata.ru/api/#suggestv) service API (suggestions) implemented as input with dropdown suggestions list, with auto-fetch data at user input.
It provides user-friendly navigation from keyboard in addition to mouse click.

![](https://img.shields.io/badge/ATTENTION-blueviolet) DaData service oriented to Russian Federation and russian-speaking users with russian queries. It use FIAS and KLADR and other national registry's and datasets, it provides suggestions only on russian language.

#### Demo 
[![](https://img.shields.io/badge/CodeSandbox-playground-black?logo=codesandbox)](https://codesandbox.io/s/react-dadata-box-example-g9xb0)

(at top of demo showed keystrokes captured by [keycastr](https://github.com/keycastr/keycastr) MacOS application)
![](proof_of_cocept.gif)

[![](https://img.shields.io/badge/SHAREWARE-WARNING-orange)](https://en.wikipedia.org/wiki/Shareware&logo=wikipedia)

 [DatData](https://dadata.ru/api/#suggestv) service is [shareware](https://img.shields.io/badge/SHAREWARE-gray?link=https://en.wikipedia.org/wiki/Shareware&logo=wikipedia), to use API you need token (person/organization).
For personal use, you need to have [Account](https://dadata.ru/#registration_popup), your token lets you to have 10000 free API call's per day.

### Installation
```
npm install react-dadata-box
```

### Usage
```javascript
import ReactDadataBox from 'react-dadata-box';

// ...

<ReactDadataBox token="API_KEY" query="Москва" />
```

### Properties

#### allowClear ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-false-lightgrey)
```typescript
allowClear?: boolean;
```
show 'clear value' ui control's (at clear - change handlers are called)
___

#### autocomplete ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-"off"-lightgrey)
```typescript
autocomplete?: 'on' | 'off';
```
autocomplete prop for input primitive
___
#### customActions ![](https://img.shields.io/badge/optional-green)
function that returns node (or nodes array) to place that as 'custom action' 
(each component from result placed in separated block at the end of list)

at v1.3.4 variant 'React.ReactNode' deprecated at types definition  
since v1.3.5 variant 'React.ReactNode' will be deprecated from functionality
```typescript
// {ResponseType<T>} where 'T' is one of FetchType (value placed at 'type' prop):
// {AddressQueryMode} 'address' | {PartyQueryMode} 'party' | {BankQueryMode} |
// {EmailQueryMode} 'email' | {FioQueryMode} 'fio' | {FmsUnitQueryMode} 'fms_unit';
// it determines DaData response object type
customActions?: ((suggestions: SpecificQueryModeResponse<T>[]) => React.ReactNode);
```
at versions < v1.3.4
```typescript 
// {DadataSuggestion} always typed responce as 'address' query { AddressResponseType }
customActions?: ((suggestions: DadataSuggestion[]) => React.ReactNode) | React.ReactNode;
```
___

#### customStyles ![](https://img.shields.io/badge/optional-green)
custom styling for embedded nodes: suggestion list, single suggestion, note and custom-action. Map-object, where key is native css classname of target node, and value is string interpreted as additional class name, or object with styles to place it into style property of target node primitive

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
custom URI for fetching DaData service (when that placed behind the proxy, or service deployed locally in your infrastructure). It may be string that interpreted as path where available DaData service root (api call will added automatically) or it may be a object with 'host' or/and 'api' properties that interpreted respectively as DaData service root and api-call replacement
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
function that get as argument user input, for replace embedded input primitive by custom or other component with compatible props signature
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
debouncing interval for fetching data at user input in miliseconds
```typescript
debounce?: number;
```
___
#### onChange ![](https://img.shields.io/badge/optional-green)
change/select event handler, called when user select suggestion by mouse click or Enter key from keyboard. Handler gets suggestion object as argument
```typescript
onChange?: (suggestion: DadataSuggestion) => void;
```
___
#### onIdleOut ![](https://img.shields.io/badge/optional-green)
handler called when by current query, service return nothing variants of suggestion. Handler gets current query string as argument
```typescript
 onIdleOut?: (query: string) => void;
```
___
#### payloadModifier ![](https://img.shields.io/badge/optional-green)
patch for payload object (that sended to DaData service). It may be function that returns patch object that will be spread on native generated payload, or it may be object that permanently spread on native payload at each call. (it allows use difficult filters and additional parameters available for DaData API but not implemented in interface of this component)
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
placeholder text for input (it placed into relevant prop of target input)
```typescript
placeholder?: string;
```
___
#### query ![](https://img.shields.io/badge/optional-green)
query string for fetch suggestion from DaData service
```typescript
query?: string;
```
___
#### showNote ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-true-lightgrey)
show at the top of suggestions list with help note about available keyboard actions
```typescript
showNote?: boolean;
```
___
#### silentQuery ![](https://img.shields.io/badge/optional-green)
special query string alternative that used when directly query prop is undefined or is empty string. It query will not be show in input node, but it determine of available suggestions in list at component on focus. (if directly query defined and not empty, this is ignored)
```typescript
silentQuery?: string;
```
___
#### silentInit ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-"address"-lightgrey)
function that may be used to autoselect from preventive fetched (by placed query or silentQuery), it called with list of fetched suggestions, and if it will return index, appropriate suggestion will be selected (all handlers fire as at user select)
```typescript
silentInit?: (suggestions: DadataSuggestion[]) => number | undefined;
```
___
#### token ![](https://img.shields.io/badge/required-important)
auth token for [DaData](https://dadata.ru/api/#suggestv) service
```typescript
token: string;
```
___
#### type ![](https://img.shields.io/badge/optional-green) ![](https://img.shields.io/badge/default-"address"-lightgrey)
fetched suggestions type (declarative in DaData service terms). It may be 'address', 'bank', 'email', 'fio' (last/first/middle names + gender detection), 'fms_unit' (branch/unit that issued Russian pasport)
```typescript
// {FetchType}:   
// {AddressQueryMode} 'address' | {PartyQueryMode} 'party' | {BankQueryMode} |
// {EmailQueryMode} 'email' | {FioQueryMode} 'fio' | {FmsUnitQueryMode} 'fms_unit';
type?: 'address' | 'party' | 'bank' | 'email' | 'fio' | 'fms_unit';
```
___
#### forceOpenList ![](https://img.shields.io/badge/optional-green)
this property force the suggestions list will be permanently open (usually needed for debug)
```typescript
forceOpenList?: boolean;
```
