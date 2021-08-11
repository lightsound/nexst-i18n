import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import type { VFC } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
];

const locales = [
  { lang: "en", label: "English" },
  { lang: "ja", label: "日本語" },
];

/**
 * @package
 */
export const Header: VFC = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <header>
      <h1>{t("title")}</h1>

      <ul>
        {locales.map(({ lang, label }) => {
          return (
            <li key={lang}>
              <Link href={router.pathname === "/index" ? "/" : router.pathname} locale={lang}>
                <a className={`p-2 ${router.locale === lang ? "text-blue-500" : ""}`}>{label}</a>
              </Link>
            </li>
          );
        })}
      </ul>

      <nav>
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="text-red-500">
              <a className="inline-block p-4">{label}</a>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};
