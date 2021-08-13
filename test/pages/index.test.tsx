/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Index from "src/pages/index.page";

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

describe("Index page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Index />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
