import { OrderPayload, Product, Vendor } from "./types";

const BASE = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

async function request<T>(params: Record<string, string>, init?: RequestInit): Promise<T> {
  if (!BASE) throw new Error("Missing NEXT_PUBLIC_APPS_SCRIPT_URL");

  const url = new URL(BASE);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    ...init,
    headers: { "Content-Type": "application/json", ...(init?.headers || {}) },
    cache: "no-store"
  });

  if (!res.ok) throw new Error(`API failed with status ${res.status}`);

  const wrapped = await res.json(); // {status, data}
  return wrapped.data as T;
}

export const api = {
  getVendors: (genre?: string) =>
    request<Vendor[]>({ action: "getVendors", ...(genre ? { genre } : {}) }),
  getVendorBySlug: (slug: string) =>
    request<Vendor[]>({ action: "getVendorBySlug", slug }),
  getProductsByVendor: (vendor_id: string) =>
    request<Product[]>({ action: "getProducts", vendor_id }),
  createOrder: (payload: OrderPayload) =>
    request<{ order_id: string; total: number }>(
      { action: "createOrder" },
      { method: "POST", body: JSON.stringify(payload) }
    )
};
