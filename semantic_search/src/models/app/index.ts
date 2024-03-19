import { createEvent, createStore } from "effector"
import { SearchResult } from "../../utils/SearchResult";



//////////////////////////////////////////////

export const $k = createStore<number>(10);

export const $query = createStore<string>("");

export const $activeCollection = createStore<string>("lib_collection");

export const $listCollections = createStore<Array<string>>([]);

export const $answerStatus = createStore<string>("empty");

export const $answer = createStore<Array<SearchResult>>([]);


/////////////////////////////////////////////


export const setK = createEvent<number>()
export const setQuery = createEvent<string>()
export const setActiveCollection = createEvent<string>()
export const setListCollections = createEvent<Array<string>>()
export const setAnswerStatus = createEvent<string>()
export const setAnswer = createEvent<Array<SearchResult>>()
