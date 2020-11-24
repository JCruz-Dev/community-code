import styled from '@emotion/styled';
import Button from '@Shared/button';
import Navigation from '@Components/navegation';
import Footer from '@Components/footer';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Test: React.FC = () => {
  return (
    <ContainerStyled>
      <Button>Conoce lo que hacemos</Button>
      <Button color="secondary">Conoce lo que hacemos</Button>
      <Button color="accent">Conoce lo que hacemos</Button>
      <Button size="small">Registarme</Button>
      <Button size="small" color="secondary">
        Registarme
      </Button>
      <Button size="small" color="accent">
        Registarme
      </Button>
      <Button size="large">Conoce lo que hacemos</Button>
      <Button size="large" color="secondary">
        Conoce lo que hacemos
      </Button>
      <Button size="large" color="accent">
        Conoce lo que hacemos
      </Button>
      <Navigation />
      <Footer />
    </ContainerStyled>
  );
};

export default Test;
