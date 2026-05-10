interface Ipro {
    email: string;
    password: string;
    children: string;
}

export default function Input(pros: Ipro) {

    console.info(pros)
    return (<div>
        <main>
            <div>邮箱：<input type={"email"} value={pros.email} /></div>
            <div>密码：<input type={"password"} value={pros.password} /></div>
            <div>Tips：<input type={"text"} value={pros.children} /></div>
        </main>
    </div>)
}