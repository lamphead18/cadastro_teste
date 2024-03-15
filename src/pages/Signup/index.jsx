import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from './styles';
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signup = () => {

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senhaConf, setSenhaConf] = useState("")
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
        if (!email | !senhaConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (senha !== senhaConf) {
            setError("As senhas estão diferentes");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado")
        navigate("/");
    };

    return (
        <C.Container>
            <C.Label>Realizar Cadastro</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Confirmar senha"
                    value={senhaConf}
                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Cadastrar" onClick={handleSignup} />
                <C.LabelSignin>
                    Já possui conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entrar</Link>
                    </C.Strong>
                </C.LabelSignin>
            </C.Content>
        </C.Container>
    )
}

export default Signup;