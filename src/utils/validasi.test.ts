import { hitungTotal, validasiEmail } from "./validasi";

describe("validasiEmail", () => {
  test("mengembalikan true untuk email valid", () => {
    // Arrange
    const email = "user@contoh.com";
    // Act
    const hasil = validasiEmail(email);
    // Assert
    expect(hasil).toBe(true);
  });

  test("mengembalikan false untuk email kosong", () => {
    expect(validasiEmail("")).toBe(false);
  });

  test("mengembalikan false untuk email tanpa @", () => {
    expect(validasiEmail("usercontoh.com")).toBe(false);
  });
});

describe("hitungTotal", () => {
  test("menjumlahkan harga semua item dengan benar", () => {
    const items = [{ harga: 10000 }, { harga: 25000 }, { harga: 5000 }];
    expect(hitungTotal(items)).toBe(40000);
  });

  test("mengembalikan 0 untuk array kosong", () => {
    expect(hitungTotal([])).toBe(0);
  });
});
