import { api } from "@/lib/api";
import { VendorCard } from "@/components/VendorCard";

export default async function VendorsPage() {
  const vendors = await api.getVendors();

  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">All Vendors</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vendors.map((v) => (
          <VendorCard key={v.vendor_id} vendor={v} />
        ))}
      </div>
    </section>
  );
}
