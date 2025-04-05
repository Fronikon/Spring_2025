import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './state/store';

const AppInProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App component', () => {
  it('render App', () => {
    render(<AppInProvider />);

    const homePage = screen.getByRole('HomePage');
    expect(homePage).toBeInTheDocument();
  });
});

describe('Routing', () => {
  const toPage = (linkStr: string, componentStr: string) => {
    const link = screen.getByRole(linkStr);
    userEvent.click(link);
    const component = screen.getByRole(componentStr);
    expect(component).toBeInTheDocument();
  };
  const toAbout = () => toPage('linkToAbout', 'AboutPage');
  const toHome = () => toPage('linkToHome', 'HomePage');

  it('link to About is work', () => {
    render(<AppInProvider />);
    toAbout();
  });

  it('link to Home is work', () => {
    render(<AppInProvider />);
    toHome();
  });

  it('links is work consistently', () => {
    render(<AppInProvider />);
    toAbout();
    toHome();
  });
});
