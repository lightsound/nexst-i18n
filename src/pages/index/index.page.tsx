import type { CustomNextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FluidLayout } from "src/layout";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale ?? "", ["common"]);
  return { props: { ...i18n } };
};

const Index: CustomNextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <div>Index</div>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
