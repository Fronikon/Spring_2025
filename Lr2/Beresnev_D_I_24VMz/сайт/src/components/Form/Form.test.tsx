import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form component', () => {
  beforeEach(() => {
    render(<Form setFormCard={jest.fn()} />);
  });

  it('render Form', () => {
    const formContent = screen.getByRole('formContent');
    expect(formContent).toBeInTheDocument();
  });
  it('check Avatar', () => {
    const imgAvatar = screen.getByRole('imgAvatar');
    const choseAvatar = screen.getByRole('choseAvatar');

    expect(imgAvatar).toBeInTheDocument();
    expect(choseAvatar).toBeInTheDocument();
  });
  it('check Name', () => {
    const nameSelect = screen.getByRole('nameSelect');
    expect(nameSelect).toBeInTheDocument();
  });
  it('check Gender', () => {
    const maleSelect = screen.getByRole('maleSelect');
    const femaleSelect = screen.getByRole('femaleSelect');

    expect(maleSelect).toBeInTheDocument();
    expect(femaleSelect).toBeInTheDocument();

    expect(femaleSelect).not.toBeChecked();
    expect(femaleSelect).not.toBeChecked();
  });
  it('check Date of brith', () => {
    const selectDateOfBrith = screen.getByRole('selectDateOfBrith');
    expect(selectDateOfBrith).toBeInTheDocument();
  });
  it('check Countries', () => {
    const selectCoutry = screen.getByRole('selectCoutry');
    expect(selectCoutry).toBeInTheDocument();
  });
  it('check Permission', () => {
    const permissionSelect = screen.getByRole('permissionSelect');
    expect(permissionSelect).toBeInTheDocument();
    expect(permissionSelect).not.toBeChecked();
  });
});
