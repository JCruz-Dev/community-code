import ComponentHero from '@Src/components/hero';
import ComponentStudy from '@Src/components/study';
import MainTemplate from '@Src/components/template/mainTemplate';
import ComponentWeDo from '@Src/components/wedo';

const IndexPage = () => (
  <MainTemplate title="Home | Fazt Web">
    <ComponentHero />
    <ComponentStudy />
    <ComponentWeDo />
  </MainTemplate>
);

export default IndexPage;
