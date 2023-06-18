import baldyImg from "../../assets/baldy.webp";

export default function DownloadCard({downloadCardItem}) {

console.log(downloadCardItem.color)

  return (
    <div className="flex flex-col gap-6 border rounded-md p-5">
      <p className="text-md font-bold">{downloadCardItem?.title}</p>
      <div className="flex flex-row items-center gap-5">
        <div className={`px-8 rounded-md pb-1`} style={{backgroundColor: downloadCardItem.color}}>
          <span className="text-sm text-white font-bold">{downloadCardItem?.tag}</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-16 h-16 rounded-full border-2 shadow"
            src={baldyImg}
            alt=""
          />
          <p className="text-sm">Kevin Joe</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-slate-300">
         {downloadCardItem.desc}
        </p>
        <div className="text-sm pb-2 cursor-pointer hover:bg-slate-100 w-2/4 py-1 border border-violet-600 text-violet-600 rounded-full flex justify-center items-center ">
          Download
        </div>
      </div>
    </div>
  );
}
