import { Container, Paragraph, ContainerRepos, Repositorio, Title} from './style';

const ContainerRepositorio = props => {
    return (
        <Container>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ContainerRepos>
                {(props?.repos).map(repo => (
                    <Repositorio onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <Paragraph>{repo?.name}</Paragraph>
                        <Paragraph>{repo?.description}</Paragraph>
                    </Repositorio>
                ))}
            </ContainerRepos>
        </Container>
    );
}

export default ContainerRepositorio;