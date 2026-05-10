import axios from "axios";

const axiosI = axios.create({
    baseURL: 'http://localhost:3000',
    method: "get",
})

export default async function f() {
    const response = await axiosI('/api')
    const data = await response.data
    return (<div>
        <p>{ data.name }</p>
        <p>路由界面</p>
    </div>)
}