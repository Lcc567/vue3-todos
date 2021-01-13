import { IAboutState, Todo } from '@/typings/about';
import { Module } from "vuex"
import { ADD_ITEM } from '../action-types';

const state: IAboutState = {
    todoList: [{
        id: 1,
        value: 'todo-1'
    }]
}
const about: Module<IAboutState, any> = {
    namespaced: true,
    state,
    mutations: {
        [ADD_ITEM](state, payload: Todo) {
            state.todoList.push(payload)
        }
    }
}

export default about
