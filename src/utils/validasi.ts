export function validasiEmail(email: string): boolean {
  if (!email || email.trim() === "") return false;
  return email.includes("@") && email.includes(".");
}

export interface ItemBelanja {
  harga: number;
  jumlah?: number;
}

export function hitungTotal(items: ItemBelanja[]): number {
  return items.reduce((total, item) => total + item.harga, 0);
}
