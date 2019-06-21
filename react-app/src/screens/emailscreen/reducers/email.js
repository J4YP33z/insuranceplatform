import * as Actions from "../actions";
const initState = {
  // landingPage data
  landingPageData: [],
  languagesData: [],
  languagePage: {
    flag: "",
    language: "English",
    languageCode: "en-US",
    languageId: 2
  },
  // Data for help page
  helpData: []
};

export default function emailReducer(state = initState, action) {
  switch (action.type) {
    case Actions.GET_LANDING_PAGE_DATA_SUCCESS:
      return {
        ...state,
        landingPageData: action.landingPageData,
        languagesData: action.languagesData,
        languagePage: action.languagePage,
        articleContent: action.articleContent,
        helpData: action.helpData
      };
    case Actions.SWITCH_LANGUAGE:
      return {
        ...state,
        languagePage: action.languagePage
      };

    default:
      return state
  }
}
