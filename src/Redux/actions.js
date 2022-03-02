import {SWITCH_SIDE_BAR } from './reducers'


export function setSideBar(boolean) {
    return {
      type: SWITCH_SIDE_BAR,
      payload: boolean
    }
  }