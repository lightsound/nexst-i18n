import type { CustomNextPage, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FluidLayout } from "src/layout";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale ?? "", ["common", "index"]);
  return { props: { ...i18n } };
};

const Index: CustomNextPage = () => {
  const { t } = useTranslation(["common", "index"]);
  const handleClick = () => {
    window.alert(t("index:alert"));
  };

  return (
    <div>
      <div>{t("common:page.index")}</div>
      <button className="p-2" onClick={handleClick}>
        {t("index:button")}
      </button>
    </div>
  );
};

Index.getLayout = FluidLayout;

export default Index;
