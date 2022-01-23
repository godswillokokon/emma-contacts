import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import { expect, it } from "@jest/globals";
import Contacts from "../src/components/contacts";
import ContactHeader from "../src/components/contactHeader";
import ContactBody from "../src/components/contactBody";

const contactsData = [
  {
    id: "1",
    firstName: "Allan",
    lastName: "Munger",
    job: "Sales",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: require("../src/assets/images/AllanMunger.png"),
  },
  {
    id: "2",
    firstName: "Amanda",
    lastName: "Brady",
    job: "Lawyer",
    about:
      "Lacus sed turpis tincidunt id aliquet risus feugiat. Quis risus sed vulputate odio. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Odio facilisis mauris sit amet massa vitae tortor condimentum. Urna neque viverra justo nec ultrices dui sapien. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Laoreet id donec ultrices tincidunt arcu non. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Feugiat vivamus at augue eget arcu dictum varius duis at.",
    image: require("../src/assets/images/AmandaBrady.png"),
  },
];
const contactData = {
  id: "1",
  firstName: "Allan",
  lastName: "Munger",
  job: "Sales",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image: require("../src/assets/images/AllanMunger.png"),
};
describe("Contacts-Header", () => {
  it("Scroll Header", async () => {
    const { debug, getByTestId } = render(
      <Contacts contactsData={contactsData} />
    );
    fireEvent.scroll(getByTestId("header-list"), {
      nativeEvent: {
        contentSize: { height: 600, width: 400 },
        contentOffset: { y: 150, x: 0 },
        layoutMeasurement: { height: 100, width: 100 }, // Dimensions of the device
      },
    });
    debug();
  });
});

describe("Contacts-Body", () => {
  it("Scroll Body", async () => {
    const { debug, getByTestId } = render(
      <Contacts contactsData={contactsData} />
    );
    fireEvent.scroll(getByTestId("body-list"), {
      nativeEvent: {
        contentSize: { height: 600, width: 400 },
        contentOffset: { y: 0, x: 150 },
        layoutMeasurement: { height: 100, width: 100 }, // Dimensions of the device
      },
    });
    debug();
  });
});

describe("ContactHeader", () => {
  test("ContactHeader is tappable", () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <ContactHeader
        index={0}
        currentIndex={0}
        contact={contactData}
        onPress={onPress}
      />
    );

    fireEvent.press(getByTestId("contact-header"));
    expect(onPress).toHaveBeenCalled();
  });
});

describe("Contacts", () => {
  test("renders a list of contacts", async () => {
    const { queryByTestId, getByTestId } = render(
      <Contacts contactsData={contactsData} />
    );

    expect(queryByTestId("body-list")).toHaveLength;

    await waitFor(() => {
      return queryByTestId("body-list");
    });

    expect(getByTestId("body-list"));
  });
});

it("Contact Body renders correctly", () => {
  renderer.create(<ContactBody {...{ contact: contactData, index: 0 }} />);
});
it("Contact Header renders correctly", () => {
  const onPress = jest.fn();
  renderer.create(
    <ContactHeader
      index={0}
      currentIndex={0}
      contact={contactData}
      onPress={onPress}
    />
  );
});
