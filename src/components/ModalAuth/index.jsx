import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button';

function ModalAuth({ showModal }) {
    const [ehLogin, setEhLogin] = useState(true);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const submit = () => {
        if (ehLogin) {
            console.log("Login");
        } else {
            console.log("Registro");
        }
    }

    return (
        <div className='absolute z-10 w-full h-full flex justify-center items-center'>
            <div className='absolute w-full h-full bg-slate-800 opacity-30'>
            </div>
            <div className='relative bg-white w-96 p-5 rounded-lg'>
                <p className='absolute top-2 right-3 text-slate-800 text-lg font-bold' onClick={() => showModal(false)}>X</p>
                <h1 className='text-slate-800 text-lg text-center font-bold'>{ ehLogin ? "Login" : "Cadastre-se" }</h1>
                <Input
                    value={email}
                    onChange={setEmail}
                    label="E-mail"
                    type="text"
                    placeholder="Digite seu e-mail"       
                />
                
                <Input
                    className="mt-2"
                    value={senha}
                    onChange={setSenha}
                    label="Senha"
                    type="password"
                    placeholder="Digite sua senha"       
                />

                <Button   
                    onClick={submit}
                    className="w-full bg-amber-400 rounded px-3 py-2 text-slate-800 font-semibold text-sm cursor-pointer mt-3 hover:bg-amber-500"
                >{ ehLogin ? "Login" : "Cadastre-se" }</Button>

                <Button 
                    onClick={() => setEhLogin(!ehLogin)}
                    className="w-full bg-white border-2 border-amber-400 rounded px-3 py-2 text-amber-400 font-semibold text-sm cursor-pointer mt-3 hover:border-amber-500"
                >{ ehLogin ? "Cadastre-se" : "Login" } </Button>
            </div>
        </div>
    )
}

export default ModalAuth