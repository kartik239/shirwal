import { Product } from "@/lib/types";
import { GlassCard } from "./glass/GlassCard";
import { GlassButton } from "./glass/GlassButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <GlassCard className="p-4">
      <h4 className="font-semibold">{product.name}</h4>
      <p className="mt-1 text-sm text-white/70">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">₹{Number(product.price)}</span>
        <GlassButton>Add</GlassButton>
      </div>
    </GlassCard>
  );
}
