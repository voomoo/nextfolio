import { NextPage } from "next";
import { useState } from "react";
import style from "../styles/Admin.module.css";

interface IAdminLogin{
    setAuth: any
}

interface FormValues{
    username: string;
    password: string
}

const AdminLogin: NextPage<IAdminLogin> = ({setAuth}) => {
    const [formValue, setFormValue] = useState<FormValues>({
        username: "",
        password: ""
    })
    const handleLogin = ():void => {
        if(formValue.username === 'rhasan.7896' && formValue.password === '123456'){
            setAuth(true)
        }
    }
  return (
    <section>
      <h1>Admin Panel</h1>
      <div className={style.adminForm}>
        <input type="text"      placeholder="Username" value={formValue.username} onChange={e => setFormValue({...formValue, username: e.target.value})}/>
        <input type="password"  placeholder="Password" value={formValue.password} onChange={e => setFormValue({...formValue, password: e.target.value})}/>
        <button onClick={handleLogin}>Login</button>
      </div>
    </section>
  );
};

export default AdminLogin;
