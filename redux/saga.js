import {takeEvery,put} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';


function* userList(){
    const uri="";
    let data=yield fetch(uri);
    data= yield data.json();
    yield put({type:SET_USER_DATA,data})//put acts like action
    console.warn("saga function called",data)
}
function* SagaData(){
   yield takeEvery(USER_LIST,userList);
}
export default SagaData();