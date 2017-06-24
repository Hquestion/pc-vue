/**
 * Created by 贺小雷 on 2017-06-21.
 */
import httpService from '../service/httpService';

export default {
    login (userName, pwd){
        return httpService.post('/BootStrap/Interface/Interface0001.ashx', {
            username: userName,
            psw: pwd,
            auto: '0',
            ipaddress: '192.168.1.1'
        });
    }
}
