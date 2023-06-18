export default function ModalContent({item}) {
  return (
    <div className="border-b py-4 mt-2 flex flex-row justify-between items-center">
      <p className="text-slate-600">{item.field}</p>
      <div className="flex flex-row items-center gap-2">
        <p className="text-slate-600">{item.colorCode}</p>
        <div
          className="w-14 h-6 rounded border"
          style={{ backgroundColor: item.colorCode }}
        ></div>
      </div>
    </div>
  );
}
