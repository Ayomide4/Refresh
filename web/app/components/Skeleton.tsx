export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden  bg-[#E0DAD6] animate-pulse ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#E8E2DE] via-[#F6F3F1] to-[#E8E2DE] animate-shimmer" />
    </div>
  );
}
