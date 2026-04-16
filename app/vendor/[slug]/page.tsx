import { api } from "@/lib/api";
import { ProductCard } from "@/components/ProductCard";

export default async function VendorPage({ params }: { params: { slug: string } }) {
  const vendorArr = await api.getVendorBySlug(params.slug);
  const vendor = vendorArr[0];

  if (!vendor) return <div className="glass rounded-2xl p-6">Vendor not found.</div>;

  const products = await api.getProductsByVendor(vendor.vendor_id);

  return (
    <section className="space-y-5">
      <div className="glass rounded-3xl p-6">
        <h1 className="text-3xl font-bold">{vendor.name}</h1>
        <p className="text-white/80">{vendor.address}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.product_id} product={p} />
        ))}
      </div>
    </section>
  );
}
