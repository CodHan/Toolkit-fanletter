import { createStore, combineReducers } from 'redux'; // 1. 패키지 설치 후 스토어 import
import letters from '../modules/letters';

const rootReducer = combineReducers({ letters }); //3.rootReducer를 정의, combineReducers => 여러개의 reducer를 combine(합치다)

const store = createStore(rootReducer); //2. createStore의 인자로는 리듀서가 들어간다.

export default store;
