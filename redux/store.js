import { configureStore } from "@reduxjs/toolkit";
import {rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import SagaData from './saga'
const Middlesaga=createSagaMiddleware();
const store=configureStore(
    {
         reducer:rootReducer,
         middleware:()=>[Middlesaga]


    }
);
Middlesaga.run(SagaData);
export default store;