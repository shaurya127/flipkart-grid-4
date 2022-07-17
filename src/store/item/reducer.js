import {
    FETCH_ITEM_METADATA_INITIAL,
    FETCH_ITEM_METADATA_SUCCESS,
    FETCH_ITEM_METADATA_FAILURE,
  } from './constant';


  const initialState = {
    itemData: [],
    itemDataLoading: true,
    itemDataError: false,
  };

  export const itemReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case FETCH_ITEM_METADATA_INITIAL:
        return {
          ...state,
          itemDataLoading: true,
        };
      case FETCH_ITEM_METADATA_SUCCESS:
        return {
          ...state,
          itemData: action.payload,
          itemDataLoading: false,
        };
      case FETCH_ITEM_METADATA_FAILURE:
        return {
          ...state,
          itemDataLoading: false,
          itemDataError: true,
        };
    }
    return state;
  };
