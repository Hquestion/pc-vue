/**
 * Created by 贺小雷 on 2017-06-21.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true;

const TIME_OUT = 30000;
const EMPTY_METHOD = function(){};

export default {
    get (url, data, options, ignoreLoading) {
        options = options || {};
        return new Promise((resolve, reject) => {
            Vue.http.get(url, {
                pramas: data,
                responseType: options.responseType || 'json',
                timeout: options.timeout || TIME_OUT,
                before: options.before || EMPTY_METHOD,
                progress: option.progress || EMPTY_METHOD
            }).then((res) => {
                if(res.ok) {
                    let jsonData = res.json();
                    if(typeof jsonData.data.code !== 'undefined') {
                        if(jsonData.data.code === 0) {
                            resolve(jsonData.data);
                        }else {
                            reject(jsonData.data);
                        }
                    }else {
                        resolve(jsonData.data);
                    }
                }else {
                    reject(res[options.responseType || 'json']())
                }
            }, (res)=> {
                reject(res);
            });
        });
    },
    post(url, data, options, ignoreLoading){

    }
}
