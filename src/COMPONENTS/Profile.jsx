import styled from 'styled-components';
import Navigation from './Navigation';

const Profile = () => {
    return (
        <Container>
            <Navigation />
            <Page>profile</Page>
        </Container>
    );
};

export default Profile;

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Page = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;
