import {createStore, Reducer} from "redux";

export interface InternalState {
}

const defaultState: InternalState = {
};

const reducer: Reducer<InternalState> = (prevState, action) => {
    return {};
};

export const STATE = createStore(reducer, defaultState);
