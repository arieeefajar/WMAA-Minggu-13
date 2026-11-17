import React from 'react';
import { render, screen, waitFor } from '@testing-library/react-native';
import DaftarUserScreen from './DaftarUserScreen';
import { getUsers } from '../api/userApi';

// Mock seluruh modul api/userApi - tidak ada request sungguhan yang dikirim
jest.mock('../api/userApi');

const mockGetUsers = getUsers as jest.MockedFunction<typeof getUsers>;

describe('DaftarUserScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('menampilkan loading indicator saat data belum dimuat', async () => {
    mockGetUsers.mockReturnValue(new Promise(() => {})); // sengaja tidak pernah resolve
    await render(<DaftarUserScreen />);
    expect(screen.getByTestId('loading-indicator')).toBeTruthy();
  });

  test('menampilkan daftar nama setelah data berhasil dimuat', async () => {
    // Arrange - mock resolve dengan data palsu
    mockGetUsers.mockResolvedValue({
      data: [{ id: 1, name: 'Andi Saputra' }, { id: 2, name: 'Budi Santoso' }],
    });

    // Act
    await render(<DaftarUserScreen />);

    // Assert - tunggu proses asinkron selesai
    await waitFor(() => {
      expect(screen.getByText('Andi Saputra')).toBeTruthy();
      expect(screen.getByText('Budi Santoso')).toBeTruthy();
    });
  });

  test('memanggil getUsers tepat satu kali', async () => {
    mockGetUsers.mockResolvedValue({ data: [] });
    await render(<DaftarUserScreen />);
    await waitFor(() => expect(getUsers).toHaveBeenCalledTimes(1));
  });

  test('menampilkan pesan error saat API gagal', async () => {
    mockGetUsers.mockRejectedValue(new Error('Network Error'));
    await render(<DaftarUserScreen />);

    await waitFor(() => {
      expect(screen.getByText(/gagal memuat data/i)).toBeTruthy();
    });
  });
});
