

export const HANDLE_STATE = "HANDLE_STATE";
export const GET_LANDING_PAGE_DATA_START = "GET_LANDING_PAGE_DATA_START";
export const GET_LANDING_PAGE_DATA_SUCCESS = "GET_LANDING_PAGE_DATA_SUCCESS";
export const GET_LANDING_PAGE_DATA_FAIL = "GET_LANDING_PAGE_DATA_FAIL";


export const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";
export function switchLang(languagePage) {
  return {
    type: SWITCH_LANGUAGE,
    languagePage
  };
}
