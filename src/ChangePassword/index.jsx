// ChangePassword.js

import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import * as C from './styles';
import useAuth from "../hooks/useAuth";

const ChangePassword = () => {
    const { changePassword } = useAuth();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    const handleChangePassword = () => {
        if (!email) {
            setError("Insira o email do usuário");
            return;
        }
        const res = changePassword(email, senha, newPassword);
        if (res) {
            setError(res);
            return;
        }

        navigate("/");
    };

    return (
        <C.Container>
            <C.Label>Mudar Senha</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Email do usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha Atual"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Nova Senha"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button Text="Mudar Senha" onClick={handleChangePassword} />
            </C.Content>
        </C.Container>
    );
};

export default ChangePassword;
