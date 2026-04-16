import Link from "next/link";
import { Vendor } from "@/lib/types";
import { GlassCard } from "./glass/GlassCard";

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <GlassCard className="p-4">
      <p className="text-xs uppercase text-cyan-200">{vendor.genre}</p>
      <h3 className="mt-1 text-lg font-semibold">{vendor.name}</h3>
      <p className="mt-1 text-sm text-white/75">{vendor.address}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm">⭐ {Number(vendor.rating).toFixed(1)}</span>
        <Link href={`/vendor/${vendor.slug}`} className="text-sm underline">
          Visit
        </Link>
      </div>
    </GlassCard>
  );
}
