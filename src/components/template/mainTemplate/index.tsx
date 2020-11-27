import styled from '@emotion/styled';
import Navigation from '@Components/navegation';
import Footer from '@Components/footer';
import Head from 'next/head';

type MainTemplateProps = {
  title?: string;
};

const MainTemplateStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const MainTemplate: React.FC<MainTemplateProps> = ({ title, children }) => {
  return (
    <>
      <Navigation />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainTemplateStyled>{children}</MainTemplateStyled>
      <Footer />
    </>
  );
};

export default MainTemplate;
