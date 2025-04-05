import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './components/SearchForm/SearchForm';
import LocalStorageMock from 'utils/localStorageMock';
import { SORT } from 'data/sortData';

Object.defineProperty(window, 'localStorage', { value: new LocalStorageMock() });

describe('SearchInput component', () => {
  it('has input', () => {
    render(
      <SearchForm
        setFilterByName={jest.fn()}
        filters={{
          filterByName: '',
          filterBySort: SORT.INTERESTINGNESS_DESC,
        }}
      />
    );

    const input = screen.getByPlaceholderText(/Photo name/i);
    expect(input).toBeInTheDocument();
  });

  it('change search value is working', () => {
    const filters = {
      filterByName: '',
      filterBySort: SORT.INTERESTINGNESS_DESC,
    };

    const changeSearchValue = (value: string) => {
      filters.filterByName = value;
      rerender(<SearchForm setFilterByName={changeSearchValue} filters={filters} />);
    };

    const { rerender } = render(
      <SearchForm setFilterByName={changeSearchValue} filters={filters} />
    );

    const textInput: HTMLInputElement = screen.getByPlaceholderText(/Photo name/i);
    const submitInput: HTMLInputElement = screen.getByRole('searchInputSubmit');
    userEvent.type(textInput, 'test');
    userEvent.click(submitInput);

    expect(textInput.value).toEqual('test');
    expect(filters.filterByName).toEqual('test');
  });
});
