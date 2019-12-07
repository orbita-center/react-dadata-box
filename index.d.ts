// tslint:disable:max-line-length
import * as React from 'react';

/**
 * @typedef { DadataSuggestion } DadataSuggestion
 * @property  { string } value - [required]
 * @property  { string } unrestricted_value - [required]
 * @property  { DadataSuggestion.data } data - [optional]
 */
export interface DadataSuggestion {
    value: string;
    unrestricted_value: string;
    data: {[key: string]: any} & {
        "postal_code"?: string | null
        "country"?: string | null
        "federal_district"?: string | null
        "region_fias_id"?: string | null
        "region_kladr_id"?: string | null
        "region_with_type"?: string | null
        "region_type"?: string | null
        "region_type_full"?: string | null
        "region"?: string | null
        "area_fias_id"?: string | null
        "area_kladr_id"?: string | null
        "area_with_type"?: string | null
        "area_type"?: string | null
        "area_type_full"?: string | null
        "area"?: string | null
        "city_fias_id"?: string | null
        "city_kladr_id"?: string | null
        "city_with_type"?: string | null
        "city_type"?: string | null
        "city_type_full"?: string | null
        "city"?: string | null
        "city_area"?: string | null
        "city_district_fias_id"?: string | null
        "city_district_kladr_id"?: string | null
        "city_district_with_type"?: string | null
        "city_district_type"?: string | null
        "city_district_type_full"?: string | null
        "city_district"?: string | null
        "settlement_fias_id"?: string | null
        "settlement_kladr_id"?: string | null
        "settlement_with_type"?: string | null
        "settlement_type"?: string | null
        "settlement_type_full"?: string | null
        "settlement"?: string | null
        "street_fias_id"?: string | null
        "street_kladr_id"?: string | null
        "street_with_type"?: string | null
        "street_type"?: string | null
        "street_type_full"?: string | null
        "street"?: string | null
        "house_fias_id"?: string | null
        "house_kladr_id"?: string | null
        "house_type"?: string | null
        "house_type_full"?: string | null
        "house"?: string | null
        "block_type"?: string | null
        "block_type_full"?: string | null
        "block"?: string | null
        "flat_type"?: string | null
        "flat_type_full"?: string | null
        "flat"?: string | null
        "flat_area"?: string | null
        "square_meter_price"?: string | null
        "flat_price"?: string | null
        "postal_box"?: string | null
        "fias_id"?: string | null
        "fias_code"?: string | null
        "fias_level"?: string | null
        "fias_actuality_state"?: string | null
        "kladr_id"?: string | null
        "geoname_id"?: string | null
        "capital_marker"?: string | null
        "okato"?: string | null
        "oktmo"?: string | null
        "tax_office"?: string | null
        "tax_office_legal"?: string | null
        "timezone"?: string | null
        "geo_lat"?: string | null
        "geo_lon"?: string | null
        "beltway_hit"?: string | null
        "beltway_distance"?: string | null
        "metro"?: string | null
        "qc_geo"?: string | null
        "qc_complete"?: string | null
        "qc_house"?: string | null
        "history_values"?: Array<string | null>
        "unparsed_parts"?: string | null
        "source"?: string | null
        "qc"?: string | null
    };
}

/**
 * @typedef { FetchType } FetchType
 */
type FetchType = "address" | "party" | "bank" | "email" | "fio" | "fms_unit" | undefined;

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
 * @typedef { Props } Props
 * @property  { boolean } autocomplete - [optional] property translated to native input tag;
 * @property  { customActions } customActions - [optional] adding custom action to base suggestions dropdown list
 * @property  { boolean } customEndpoint - [optional] optional uri to fetch suggestion's (to proxy scenario or local hosted DaData service)
 * @property  { boolean } city - [optional] optional to "city-mode"
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
 */

interface Props {
    autocomplete?: boolean;
    city?: boolean;
    className?: string;
    count?: number;
    customActions?: ((suggestions: DadataSuggestion[]) => React.ReactNode) | React.ReactNode;
    customEndpoint?: string;
    /**
     * @function onChange
     * @param {DadataSuggestion} suggestion
     * @returns void
     */
    onChange?: (suggestion: DadataSuggestion) => void;
    payloadModifier?: object | ((payload: BasePayload) => BasePayload & object);
    onIdleOut?: (query: string) => void;
    debounce?: number;
    placeholder?: string;
    query?: string;
    style?: React.CSSProperties;
    token: string;
    type?: FetchType;
    allowClear?: boolean;
    showNote?: boolean;
    silentQuery?: string;
}

/**
 * Ready for use implementation of dropdown input that fetch resolve-object from DaData.ru service by query printed in input field
 *
 * @module ReactDadataBox
 * @class ReactDadataBox
 * @param props { Props }
 *
 * @see Documentation {@link https://github.com/orbita-center/react-dadata-box/blob/master/README.md on GitHub}
 */
declare class ReactDadataBox extends React.Component<Props> {}

export default ReactDadataBox;
