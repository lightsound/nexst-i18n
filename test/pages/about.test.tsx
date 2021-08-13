/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import About from "src/pages/about.page";

jest.mock("react-i18next", () => {
  return {
    useTranslation: () => {
      return {
        t: (key: any) => {
          return key;
        },
      };
    },
  };
});

describe("About page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<About />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
