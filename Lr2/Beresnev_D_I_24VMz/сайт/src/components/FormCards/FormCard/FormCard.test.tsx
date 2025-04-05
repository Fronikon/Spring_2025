import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

describe('FormCard component', () => {
  it('render FormCard', () => {
    const path = 'somePath';
    const name = 'Oleg';
    const gender = 'male';
    const dateOfBrith = '12-10-2002';
    const country = 'Russia';
    const permission = '✅';

    render(
      <FormCard
        avatar={path}
        name={name}
        gender={gender}
        dateOfBrith={dateOfBrith}
        country={country}
      />
    );

    const imgAvatar: HTMLImageElement = screen.getByRole('imgAvatar');
    const genderField = screen.getByRole('genderField');
    const nameField = screen.getByRole('nameField');
    const dateOfBrithField = screen.getByRole('dateOfBrithField');
    const countryField = screen.getByRole('countryField');
    const permissionField = screen.getByRole('permissionField');

    expect(imgAvatar.src).toBe(`http://localhost/${path}`);
    expect(nameField).toHaveTextContent(new RegExp(name, 'i'));
    expect(genderField).toHaveTextContent(new RegExp(gender, 'i'));
    expect(dateOfBrithField).toHaveTextContent(new RegExp(dateOfBrith, 'i'));
    expect(countryField).toHaveTextContent(new RegExp(country, 'i'));
    expect(permissionField).toHaveTextContent(new RegExp(permission, 'i'));
  });
});
