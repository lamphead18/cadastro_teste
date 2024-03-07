import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from './styles';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Title>Inserir Logomarca e Certificado</C.Title>
            <C.Label>CNPJ</C.Label>
            <C.Content>
                <Input type="text" placeholder="Digite o CNPJ" />

                <C.Label>Nome Fantasia</C.Label>
                <Input type="text" placeholder="Digite o nome fantasia" />

                <C.Label>Contato</C.Label>
                <Input type="text" placeholder="Digite o contato" />

                <C.Label>Endereço</C.Label>
                <Input type="text" placeholder="Digite o endereço" />

                <C.Label>Número</C.Label>
                <Input type="text" placeholder="Digite o número" />

                <C.Label>Bairro</C.Label>
                <Input type="text" placeholder="Digite o bairro" />

                <C.Label>Cidade</C.Label>
                <Input type="text" placeholder="Digite a cidade" />

                <C.Label>UF</C.Label>
                <Input type="text" placeholder="Digite a UF" />

                <C.Label>WhatsApp</C.Label>
                <Input type="text" placeholder="Digite o WhatsApp" />

                <C.Label>E-mail</C.Label>
                <Input type="text" placeholder="Digite o e-mail" />

                <C.Label>Status</C.Label>
                <select>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>

                <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >
                    Sair
                </Button>
            </C.Content>
        </C.Container>
    )
}

export default Home;