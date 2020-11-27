import ComponentCommunity from '@Src/components/community';
import ComponentHero from '@Src/components/hero';
import ComponentKnowledge from '@Src/components/knowledge';
import ComponentStudy from '@Src/components/study';
import MainTemplate from '@Src/components/template/mainTemplate';
import ComponentWeDo from '@Src/components/wedo';

const IndexPage = () => (
  <MainTemplate title="Home | Fazt Web">
    <ComponentHero />
    <ComponentStudy />
    <ComponentWeDo />
    <ComponentKnowledge />
    <ComponentCommunity />
  </MainTemplate>
);

export default IndexPage;
