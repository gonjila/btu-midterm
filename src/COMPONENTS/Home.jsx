import styled from 'styled-components';
import Navigation from './Navigation';

const Home = () => {
    return (
        <Container>
            <Navigation />
            <Page>haloo</Page>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Page = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
