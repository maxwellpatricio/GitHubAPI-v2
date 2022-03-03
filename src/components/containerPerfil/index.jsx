import { Container, ContainerInfos, ContainerStats, Paragraph, Photo, Title } from "./styles"
import React, {useContext} from 'react'

import { context } from "../../context"

const ContainerPerfil = props => {

    const ctx = useContext(context);

    return(
        <Container>
            <ContainerInfos>
                <Title>Informações do perfil:</Title>
                <Photo src={ctx.userData?.avatar_url}/>
                <Paragraph>{ctx.userData?.name}</Paragraph>
                <Paragraph>{ctx.userData?.login}</Paragraph>
                <Paragraph>{ctx.userData?.bio}</Paragraph>
                
                <ContainerStats>
                    <Paragraph>Folowers: {ctx.userData?.followers}</Paragraph>
                    <Paragraph>Following: {ctx.userData?.following}</Paragraph>
                    <Paragraph>Repositorios: {ctx.userData?.public_repos}</Paragraph>
                </ContainerStats>
            </ContainerInfos>
        </Container>
    )
}

export default ContainerPerfil;