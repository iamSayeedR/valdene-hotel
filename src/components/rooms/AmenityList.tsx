interface AmenityListProps {
  amenities: string[]
}

export function AmenityList({ amenities }: AmenityListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {amenities.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3 p-3 bg-[#FAF7F2] border border-[#DDD6CC]/60 text-xs text-[#1E1E1E]">
          <span className="w-2 h-2 bg-[#7A2332] rounded-full shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
