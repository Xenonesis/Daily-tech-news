export default function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-surface rounded-2xl border border-border p-6 overflow-hidden"
        >
          {/* Category badge skeleton */}
          <div className="flex items-center justify-between mb-4">
            <div className="h-7 w-20 skeleton rounded-lg" />
            <div className="h-4 w-24 skeleton rounded" />
          </div>
          
          {/* Title skeleton */}
          <div className="h-6 w-full skeleton rounded mb-2" />
          <div className="h-6 w-3/4 skeleton rounded mb-4" />
          
          {/* Summary skeleton */}
          <div className="space-y-2">
            <div className="h-4 w-full skeleton rounded" />
            <div className="h-4 w-full skeleton rounded" />
            <div className="h-4 w-2/3 skeleton rounded" />
          </div>
          
          {/* Footer skeleton */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
            <div className="h-4 w-20 skeleton rounded" />
            <div className="h-3 w-12 skeleton rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
