// tslint:disable:max-line-length
import * as React from 'react';
import { ReactElement } from 'react';

// types formed by description's from:
// - https://dadata.ru/api/find-address/#response
export interface AddressMetroBlock {
  name: string | null;
  line: string | null;
  distance: number | null;
}

export interface AddressResponseType {
  value: string;
  unrestricted_value: string;
  data: { [key: string]: any } & {
    postal_code?: string | null;
    country?: string | null;
    federal_district?: string | null;
    region_fias_id?: string | null;
    region_kladr_id?: string | null;
    region_with_type?: string | null;
    region_type?: string | null;
    region_type_full?: string | null;
    region?: string | null;
    area_fias_id?: string | null;
    area_kladr_id?: string | null;
    area_with_type?: string | null;
    area_type?: string | null;
    area_type_full?: string | null;
    area?: string | null;
    city_fias_id?: string | null;
    city_kladr_id?: string | null;
    city_with_type?: string | null;
    city_type?: string | null;
    city_type_full?: string | null;
    city?: string | null;
    city_area?: string | null;
    city_district_fias_id?: string | null;
    city_district_kladr_id?: string | null;
    city_district_with_type?: string | null;
    city_district_type?: string | null;
    city_district_type_full?: string | null;
    city_district?: string | null;
    settlement_fias_id?: string | null;
    settlement_kladr_id?: string | null;
    settlement_with_type?: string | null;
    settlement_type?: string | null;
    settlement_type_full?: string | null;
    settlement?: string | null;
    street_fias_id?: string | null;
    street_kladr_id?: string | null;
    street_with_type?: string | null;
    street_type?: string | null;
    street_type_full?: string | null;
    street?: string | null;
    house_fias_id?: string | null;
    house_kladr_id?: string | null;
    house_type?: string | null;
    house_type_full?: string | null;
    house?: string | null;
    block_type?: string | null;
    block_type_full?: string | null;
    block?: string | null;
    flat_type?: string | null;
    flat_type_full?: string | null;
    flat?: string | null;
    flat_area?: string | null;
    square_meter_price?: string | null;
    flat_price?: string | null;
    postal_box?: string | null;
    fias_id?: 'HOUSE.HOUSEGUID' | 'ADDROBJ.AOGUID' | null;
    fias_code?: string | null;
    fias_level?: '0' | '1' | '3' | '4' | '5' | '6' | '7' | '8' | '65' | '-1' | null;
    fias_actuality_state?: number | null;
    kladr_id?: string | null;
    geoname_id?: string | null;
    capital_marker?: '0' | '1' | '2' | '3' | '4' | null;
    okato?: string | null;
    oktmo?: string | null;
    tax_office?: string | null;
    tax_office_legal?: string | null;
    timezone?: string | null;
    geo_lat?: string | null;
    geo_lon?: string | null;
    beltway_hit?: string | null;
    beltway_distance?: string | null;
    metro?: AddressMetroBlock | null;
    qc_geo?: '0' | '1' | '2' | '3' | '4' | '5' | null;
    qc_complete?: string | null;
    qc_house?: string | null;
    history_values?: Array<string | null>;
    unparsed_parts?: string | null;
    source?: string | null;
    qc?: string | null;
  };
}

// types formed by description's from:
// - https://dadata.ru/api/find-party/
export type FinanceTaxSystem = 'ENVD' | 'ESHN' | 'SRP' | 'USN' | 'ENVD_ESHN' | 'USN_ENVD';
export type FinanceBlock = {
  tax_system: FinanceTaxSystem | null;
  income: string | null;
  expense: string | null;
  debt: string | null;
  penalty: string | null;
};
export type OKVED = {
  main: string | null;
  type: string | null;
  code: string | number | null;
  name: string | null;
};

// types formed by description's from:
// - https://dadata.ru/api/suggest/party/
export type PartyStatus = 'ACTIVE' | 'LIQUIDATING' | 'LIQUIDATED' | 'REORGANIZING';
export type PartyType = 'LEGAL' | 'INDIVIDUAL';
export type BranchType = 'MAIN' | 'BRANCH';

export interface PartySateBlock {
  status: PartyStatus | null;
  actuality_date: number | null;
  registration_date: number | null;
  liquidation_date: null;
}

export interface PartyPerson {
  ogrn: string | number | null;
  inn: string | number | null;
  name: string | null;
  fio: string | null;
  hid: string | null;
}

export interface PartyFounder extends PartyPerson {
  type: 'LEGAL' | 'PHYSICAL' | null;
}

export interface PartyManager extends PartyPerson {
  post: string | number | null;
  type: 'EMPLOYEE' | 'FOREIGNER' | 'LEGAL' | null;
}

export type PartyOpfType = 'BANK' | 'BANK_BRANCH' | 'NKO' | 'NKO_BRANCH' | 'RKC' | 'OTHER';

export interface PartyOpf {
  type: PartyOpfType | null;
  code: string | null;
  full: string | null;
  short: string | null;
}

export interface PartyName {
  full_with_opf: string | null;
  short_with_opf: string | null;
  latin: null;
  full: string | null;
  short: string | null;
}

export interface PartyFtsRegistration {
  type: string | null;
  code: string | number | null;
  name: string | null;
  address: string | null;
}

export interface PartyCapital {
  type: string | null;
  value: string | null;
}

export interface PartyManagement {
  name: string | null;
  post: string | null;
  disqualified: string | null;
}

// types formed by description's from:
// - https://dadata.ru/api/suggest/party/
// - https://dadata.ru/api/find-party/
export interface PartyResponseType {
  value: string | null;
  data: {
    kpp: string | null;
    capital: PartyCapital | null;
    management: PartyManagement | null;
    founders: PartyFounder[] | null;
    managers: PartyManager[] | null;
    branch_type: BranchType | null;
    branch_count: number | null;
    source: string | null;
    qc: '0' | '1' | '3' | null;
    hid: string | null;
    type: PartyType | null;
    state: PartySateBlock | null;
    opf: PartyOpf | null;
    name: PartyName | null;
    inn: string | null;
    ogrn: string | null;
    okpo: string | null;
    okved: string | null;
    okveds: OKVED[] | null;
    authorities: any | null;
    fts_registration: PartyFtsRegistration | null;
    documents: any[] | null;
    licenses: any[] | null;
    finance: FinanceBlock;
    address: AddressResponseType;
    phones: any[] | null;
    emails: string | null;
    ogrn_date: number | null;
    okved_type: string | null;
    employee_count: string | null;
  };
}

// types formed by description's from:
// - https://dadata.ru/suggestions/usage/bank/
export interface BankName {
  payment: string | null;
  full: string | null;
  short: string | null;
}

export interface BankResponseType {
  value: 'АО «Тинькофф Банк»';
  unrestricted_value: 'АО «Тинькофф Банк»';
  data: {
    opf: PartyOpf | null;
    name: BankName | null;
    bic: string | null;
    swift: string | null;
    inn: string | null;
    kpp: string | null;
    okpo: string | null;
    correspondent_account: string | null;
    registration_number: string | null;
    payment_city: string | null;
    state: PartySateBlock | null;
    rkc: string | null;
    address: AddressResponseType;
    phones: any[] | null;
  };
}

// types formed by description's from:
// https://dadata.ru/api/clean/email/
// https://dadata.ru/api/clean/email/#qc
export type EmailType = 'PERSONAL' | 'CORPORATE' | 'ROLE' | 'DISPOSABLE';

export interface EmailResponseType {
  value: string;
  unrestricted_value: string | null;
  data: {
    local: string | null;
    domain: string | null;
    type: EmailType | null;
    source: string | null;
    qc: '0' | '1' | '2' | '3' | '4' | null;
  };
}

// types formed by description's from:
// https://dadata.ru/suggestions/usage/name/
export type FioGender = 'MALE' | 'FEMALE' | 'UNKNOWN';

export interface FioResponseType {
  value: string;
  unrestricted_value: string | null;
  data: {
    surname: string | null;
    name: string | null;
    patronymic: string | null;
    gender: FioGender | null;
    source: string | null;
    qc: '0' | '1';
  };
}

// types formed by description's from:
// https://dadata.ru/suggestions/outward/fms_unit/
interface FmsUnitResponseType {
  data: {
    code: string | null;
    name: string | null;
    region_code: string | null;
    type: '0' | '1' | '2' | '3' | null;
  };
  code: string | null;
  name: string | null;
  region_code: string | null;
  type: string | null;
  unrestricted_value: string | null;
  value: string | null;
}

/**
 * @typedef { FetchType } FetchType
 */
type FetchType = AddressQueryMode | PartyQueryMode | BankQueryMode | EmailQueryMode | FioQueryMode | FmsUnitQueryMode;

/**
 * @typedef { AddressQueryMode } - address's by abstract text query (as text address representation)
 */
type AddressQueryMode = 'address';
/**
 * @typedef { PartyQueryMode } - organization's info by abstract text query (as organization name) or as numbers sequence (as INN code)
 */
type PartyQueryMode = 'party';
/**
 * @typedef { BankQueryMode } - bank's info by abstract text query (as bank name) or number or as numbers sequence (as bank BIC code)
 */
type BankQueryMode = 'bank';
/**
 * @typedef { EmailQueryMode } - search emails
 */
type EmailQueryMode = 'email';
/**
 * @typedef { FioQueryMode } - gender targeting by abstract text as first-name + last-name(?) + patronymic(?) [order is not important]
 */
type FioQueryMode = 'fio';
/**
 * @typedef { FmsUnitQueryMode } - fms_unit by abstract text query (as fms_unit name) or numbers sequence (as fms_unit_code)
 */
type FmsUnitQueryMode = 'fms_unit';

/**
 * @typedef { SpecificQueryModeResponse } - generic for detection response payload type by FetchType
 */
type SpecificQueryModeResponse<T> = T extends AddressQueryMode
  ? AddressResponseType
  : T extends PartyQueryMode
  ? PartyResponseType
  : T extends BankQueryMode
  ? BankResponseType
  : T extends EmailQueryMode
  ? EmailResponseType
  : T extends FioQueryMode
  ? FioResponseType
  : T extends FmsUnitQueryMode
  ? FmsUnitResponseType
  : AddressQueryMode;

/**
 * @typedef { BasePayload } BasePayload
 * @property  { string } query - [required] fetched query
 * @property  { number } count - [optional] suggestions count limit (default: 10)
 */

interface BasePayload {
  query: string;
  count?: number;
}

/**
 * @typedef { BasePayload } BasePayload
 * @property  { string } className - [required] component CSS class name (default: native generated style with 'react-dadata__' prefix)
 * @property  { string } placeholder - [required] placeholder
 * @property  { string } value - [required] fetched query
 * @property  { boolean | 'off' } autocomplete - [required] suggestions count limit (default: 'off')
 * @property  { function } onChange - [required] change event handler (default: native component handler)
 * @property  { function } onKeyDown - [required] 'key down' event handler (default: native component handler)
 * @property  { function } onFocus - [required] focus event handler (default: native component handler)
 * @property  { function } onBlur - [required] blur event handler (default: native component handler)
 */

interface BaseInputProps<T = HTMLInputElement> {
  autocomplete: boolean | 'off';
  className: string;
  onBlur: React.FocusEventHandler<T>;
  onChange: React.ChangeEventHandler<T>;
  onFocus: React.FocusEventHandler<T>;
  onKeyDown: React.KeyboardEventHandler<T>;
  placeholder: string;
  value: string;
}

/**
 * @typedef { SpecificModeByTypeProps } SpecificModeByTypeProps
 * @property  { boolean } autocomplete - [optional] property translated to native input tag;
 * @property  { customInput } customInput - [optional] function that fires with one argument { BaseInputProps }
 * @property  { customActions } customActions - [optional] adding custom action to base suggestions dropdown list
 * @property  { boolean | object } customEndpoint - [optional] optional uri to fetch suggestion's (to proxy scenario or local hosted DaData service), may be string: full or relative uri or object with 'host' and/or 'api' property
 * @property  { boolean } city - [optional] optional to city-mode
 * @property  { string } className - [optional] additional classname
 * @property  { number } count - [optional] single query limit (default: 10)
 * @property  { onChange } onChange - [optional] - onChange handler
 * @property  { onIdleOut } onIdleOut - [optional] - onIdleOut handler, fires with one argument - current query, when by this query has not returned suggestions
 * @property  { object | function } payloadModifier - [optional] - object to patch payload or function returned payload object to send, that has auto generated payload object as argument
 * @property  { debounce } onChange - [optional] - debounce to onChange handler (default: 350 ms).
 * @property  { string } placeholder - [optional] - placeholder
 * @property  { string } query - [optional] - query for search
 * @property  { React.CSSProperties } style - [optional] - custom styling
 * @property  { string } token - [required] - API authorization token
 * @property  { FetchType } type - [optional] specifics fetching by data type groups
 * @property  { boolean } allowClear - [optional] show/hide clear fieldd control
 * @property  { boolean } showNote - [optional] show/hide note at suggestions list
 * @property  { boolean } silentQuery - [optional] initial query that not showed on input but determine  suggestion list that showed at first
 * @property  { function } silentInit - [optional] function that may be used to autoselect from preventive fetched (by placed query or silentQuery), it called with list of fetched suggestions, and if it will return index, appropriate suggestion will be selected (all handlers fire as at user select)
 */

/**
 * @typedef { BaseProps } basic collect of props with predefined types independent of query mode type
 */
type BaseProps = {
  allowClear?: boolean;
  autocomplete?: 'on' | 'off';
  city?: boolean;
  className?: string;
  customStyles?: {
    'react-dadata__custom-action'?: string | React.CSSProperties;
    'react-dadata__suggestion'?: string | React.CSSProperties;
    'react-dadata__suggestion-note'?: string | React.CSSProperties;
    'react-dadata__suggestions'?: string | React.CSSProperties;
  };
  count?: number;
  customEndpoint?: string | { host?: string; api?: string };
  customInput?: (props: BaseInputProps) => React.ReactNode;
  debounce?: number;
  forceOpenList?: boolean;
  onIdleOut?: (query: string) => void;
  payloadModifier?: object | ((payload: BasePayload) => BasePayload & object);
  placeholder?: string;
  query?: string;
  showNote?: boolean;
  silentQuery?: string;
  style?: React.CSSProperties;
  token: string;
};

/**
 * @template T
 * @typedef { SpecificModeProps } generic declare typing of suggestions based on query mode {T}
 */
type SpecificModeProps<T extends FetchType> = {
  customActions?: (suggestions: SpecificQueryModeResponse<T>[]) => React.ReactNode;
  onChange?: (suggestion: SpecificQueryModeResponse<T>) => void;
  silentInit?: (suggestions: SpecificQueryModeResponse<T>[]) => number;
};

/**
 * @typedef { SpecificModeByTypeProps } discriminated union that provide correct suggestions typing based on placed value of 'type' property (default: {AddressQueryMode})
 */
type SpecificModePropsTaggedUnion =
  | ({
      type?: 'address';
    } & SpecificModeProps<AddressQueryMode>)
  | ({
      type: 'party';
    } & SpecificModeProps<PartyQueryMode>)
  | ({
      type: 'bank';
    } & SpecificModeProps<BankQueryMode>)
  | ({
      type: 'email';
    } & SpecificModeProps<EmailQueryMode>)
  | ({
      type: 'fio';
    } & SpecificModeProps<FioQueryMode>)
  | ({
      type: 'fms_unit';
    } & SpecificModeProps<FmsUnitQueryMode>);

/**
 * Ready for use implementation of dropdown input that fetch resolve-object from DaData.ru service by query printed in input field
 * @module ReactDaDataBox
 * @see Documentation {@link https://github.com/orbita-center/react-dadata-box/blob/master/README.md on GitHub}
 */
export const ReactDaDataBox: {
  (props: BaseProps & SpecificModeProps<AddressQueryMode>): ReactElement<BaseProps & SpecificModeProps<AddressQueryMode>>;
  (props: BaseProps & SpecificModePropsTaggedUnion): ReactElement<BaseProps & SpecificModePropsTaggedUnion>;
};

export default ReactDaDataBox;
