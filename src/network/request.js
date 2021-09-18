import axios from "axios";

 export function request(config, success, failure) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000",
        timeout: 5000
    })
    // 2.axios的拦截器
    // 2.1请求拦截
     instance.interceptors.request.use(config=>{
         console.log(config)
         /*什么时候需要请求拦截？
             01.比如，config中的一些信息不符合服务器的要求；
             02.比如每次发送网络请求时，都希望在界面中显示一个请求的图标；
             03.某些网络请求（比如登录（token）），必须携带一些特殊的信息
         */
         //拦截过后必须将数据返回，程序才能正常运行
         return config
     },err => {
         console.log(err)
     })

    // 2.2响应拦截
     instance.interceptors.response.use(res=>{
         console.log(res)
         return res.data
     },err=>{
         console.log(err)
     })

    // 发送真正的网络请求
     return instance(config)
}

// export function request(config, success, failure) {
//     return new Promise((resolve, reject)=>{
//         //1.创建axios实例
//         const instance = axios.create({
//             baseURL: "http://123.207.32.32:8000",
//             timeout: 5000
//         })
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })
//     })
// }

// export function request(config) {
//1.创建axios实例
//     const instance = axios.create({
//         baseURL: "http://123.207.32.32:8000",
//         timeout: 5000
//     })
//     instance(config.baseConfig)
//         .then(res => {
//             config.success(res)
//         })
//         .catch(err => {
//             config.failure(err)
//         })
// }