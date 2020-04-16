import Taro from '@tarojs/taro'
import { fromJS } from 'immutable'
import cloneDeep from 'lodash/cloneDeep'

import { appLogin } from '../../../api/api';

const SET_ASYNC_DATA = 'SET_ASYNC_DATA'

interface SetAsyncData {
  payload: {
    asyncData: any,
  },
}

const initState = fromJS({
  asyncData: {},
})

export default {
  namespace: 'data',

  state: initState,

  effects: {
    * fetch(_: void, { call, put }: DvaApi) {
      Taro.showLoading({ title: 'Loading...' })
      let res = []
      try {
        res = yield call(appLogin)
      } catch (e) {
        console.log('fetch 请求失败!', e)
        Taro.showToast({
          title: '请求失败',
          icon: 'loading',
          duration: 500,
        })
      } finally {
        yield put({
          type: SET_ASYNC_DATA,
          payload: {
            asyncData: cloneDeep(res),
          },
        })
        Taro.hideLoading()
      }
    },
  },

  reducers: {
    SET_ASYNC_DATA(state, { payload }: SetAsyncData) {
      return state
        .merge({
          asyncData: payload.asyncData,
        })
    },
  },
}
