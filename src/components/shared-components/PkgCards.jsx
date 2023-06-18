
export default function PkgCards({pkg}) {
  return (
    <div className="cursor-pointer py-8 flex flex-col justify-center items-center gap-4 hover:shadow-lg">
        <p className="font-bold">{pkg.name}</p>
        <p className="font-bold">{pkg.discounted}</p>
        <p className="text-slate-500">{pkg.price}</p>
        <button className="rounded-sm border border-sky-400 px-10 text-sm py-1 flex items-center text-blue-600">
          Buy now
        </button>
      </div>
  )
}
