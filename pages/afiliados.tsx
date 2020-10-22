import Layout from "../components/Layout";
import CopyToClipboard from "react-copy-to-clipboard";

interface AffiliateLink {
  _id: string;
  title: string;
  description: string;
  url: string;
  createdAt: string;
  udpatedAt: string;
}

interface Props {
  data: AffiliateLink[];
}

const IndexPage = ({ data }: Props) => {
  if (data.length === 0) return <div>No Links yet</div>;
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Afiliados</h1>
      {data.map((affiliateLink) => (
        <div key={affiliateLink._id}>
          <h4>{affiliateLink.title}</h4>
          <CopyToClipboard
            text={affiliateLink.url}
            onCopy={() => alert("copied")}
          >
            <button>Copiar Enlace</button>
          </CopyToClipboard>
        </div>
      ))}
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.faztweb.com/affiliatelinks");
  const data = await res.json();
  console.log(data);
  return { props: { data } };
}

export default IndexPage;
