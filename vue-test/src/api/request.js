//对于axios二次封装
import axios from 'axios'



//利用axios create方法创建一个axios实例 写了baseUrl：“/api” 以后请求/api开头的 就不用再写了  然后用这个实例对象去发请求
const requests = axios.create({
    baseURL:'/api',
    timeout:5000
})

requests.interceptors.request.use((config)=>{
	
	
    return config
   
})

requests.interceptors.response.use((res)=>{
    return res.data
},(error)=>{
    return Promise.reject(new Error("faile"))
})


export default requests;