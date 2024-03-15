import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import axios from "axios";
import * as C from './styles';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    const [formData, setFormData] = useState({
        cnpj: '',
        nome_fantasia: '',
        login: 'teste',
        senha: 'teste',
        logomarca: 'teste',
        anexo_cert: 'teste',
        senha_cert: 'teste',
        nome_fantasia: 'teste',
        contato: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: '',
        whatsapp: '',
        email: '',
        status: 1
    });

    const handleChange = (e, name) => {
        console.log(e)
        const { value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handlePdfChange = (e) => {
        const file = e.target.files[0];
        setPdfFile(file);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3000/auth/signup', formData, image, pdfFile);
            console.log('Resposta do servidor:', response.data);
        } catch (error) {
            console.error('Erro ao enviar dados para o backend:', error);
        }
    };


    return (
        <C.Container>
            <C.Title>Realizar Registro</C.Title>
            <C.Content>

                <C.Label>Logomarca</C.Label>
                <Input type="file" onChange={handleImageChange} accept="image/*" />

                {image && (
                    <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                )}

                <C.Label>CNPJ</C.Label>
                <Input onChange={(e) => handleChange(e, "cnpj")} type="text" placeholder="Digite o CNPJ" />

                <C.Label>Nome Fantasia</C.Label>
                <Input onChange={(e) => handleChange(e, "nomeFantasia")} type="text" placeholder="Digite o nome fantasia" />

                <C.Label>Contato</C.Label>
                <Input onChange={(e) => handleChange(e, "contato")} type="text" placeholder="Digite o contato" />

                <C.Label>Endereço</C.Label>
                <Input onChange={(e) => handleChange(e, "endereco")} type="text" placeholder="Digite o endereço" />

                <C.Label>Número</C.Label>
                <Input onChange={(e) => handleChange(e, "numero")} type="text" placeholder="Digite o número" />

                <C.Label>Bairro</C.Label>
                <Input onChange={(e) => handleChange(e, "bairro")} type="text" placeholder="Digite o bairro" />

                <C.Label>Cidade</C.Label>
                <Input onChange={(e) => handleChange(e, "cidade")} type="text" placeholder="Digite a cidade" />

                <C.Label>UF</C.Label>
                <Input onChange={(e) => handleChange(e, "uf")} type="text" placeholder="Digite a UF" />

                <C.Label>WhatsApp</C.Label>
                <Input onChange={(e) => handleChange(e, "whatsapp")} type="text" placeholder="Digite o WhatsApp" />

                <C.Label>E-mail</C.Label>
                <Input onChange={(e) => handleChange(e, "email")} type="text" placeholder="Digite o e-mail" />


                <C.Label>Anexar Certificado (PDF)</C.Label>
                <Input type="file" onChange={handlePdfChange} accept="application/pdf" />

                {pdfFile && (
                    <p>Arquivo selecionado: {pdfFile.name}</p>
                )}

                <C.Label>Status</C.Label>
                <select>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>

                <Button Text="Salvar" onClick={handleSubmit}>
                    Salvar
                </Button>
                <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >
                    Sair
                </Button>
            </C.Content>
        </C.Container>
    )
}

export default Home;