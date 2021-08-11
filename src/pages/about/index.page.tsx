import type { CustomNextPage, GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FixedLayout } from "src/layout";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale ?? "", ["common"]);
  return { props: { ...i18n } };
};

const About: CustomNextPage = () => {
  return <div>About</div>;
};

About.getLayout = FixedLayout;

export default About;
