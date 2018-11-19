/**
 * Created by gaoying on 2018/11/19.
 */
import Vue from 'vue';

export function get(url,params) {
  return Vue.http.get(url,{params:params});
}

export function post(url,param) {
  return Vue.http.post(url,param,{emulateJSON:true});
}


