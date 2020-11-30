import React from "react";
import App from "./App";
import ReviewForm from './Components/Forms/ReviewForm'
import Sidebar from './Components/Homepage/SideBar'

import { shallow } from "enzyme";

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

const reviewform = shallow(<ReviewForm />);
it('renders correctly', () => {
  expect(reviewform).toMatchSnapshot();
})

const sidebar = shallow(<Sidebar />);
it('renders correctly', () => {
  expect(sidebar).toMatchSnapshot();
})




