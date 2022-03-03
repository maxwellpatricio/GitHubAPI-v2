import { ButtonPesq, Container, LogoGit, TextField, Title } from "./styles";
import React, {useState, useContext} from 'react'
import client from '../../services/client';
import { context } from "../../context";

const ContainerPesquisa = () => {

    const ctx = useContext(context);

    const [searchedValue, setSearchedValue] = useState('')

    async function getUserData(){
        try{
            const response = await client.get(`https://api.github.com/users/${searchedValue}`)
            const repos = await client.get(`https://api.github.com/users/${searchedValue}/repos`)
            ctx.setUserData(response.data)
            ctx.setUserRepos(repos.data)            
        }catch(error){
            console.log(error)
        }
    }

    return(
        <Container>
            <LogoGit src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} />
            <Title>GitHub API</Title>
            <TextField type="text" placeholder="Digite o username"  value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>
            <ButtonPesq type="submit" onClick={getUserData}>Buscar</ButtonPesq>
        </Container>
    )
    
}

export default ContainerPesquisa;