export default function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="bg-surface rounded-2xl border border-border p-6 animate-pulse"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-4 w-20 bg-surfaceHighlight rounded" />
            <div className="h-4 w-2 bg-surfaceHighlight rounded" />
            <div className="h-4 w-16 bg-surfaceHighlight rounded" />
          </div>
          <div className="h-6 w-full bg-surfaceHighlight rounded mb-2" />
          <div className="h-6 w-3/4 bg-surfaceHighlight rounded mb-4" />
          <div className="h-4 w-full bg-surfaceHighlight rounded mb-2" />
          <div className="h-4 w-full bg-surfaceHighlight rounded mb-2" />
          <div className="h-4 w-2/3 bg-surfaceHighlight rounded" />
        </div>
      ))}
    </div>
  );
}
