import React from 'react';
import { render, screen } from '@testing-library/react-native';
import KartuProfil from './KartuProfil';

describe('KartuProfil', () => {
  test('menampilkan nama dan jabatan yang diberikan lewat props', async () => {
    // Arrange & Act
    await render(<KartuProfil nama="Sari Wulandari" jabatan="Mobile Developer" />);

    // Assert
    expect(screen.getByText('Sari Wulandari')).toBeTruthy();
    expect(screen.getByText('Mobile Developer')).toBeTruthy();
  });
});
