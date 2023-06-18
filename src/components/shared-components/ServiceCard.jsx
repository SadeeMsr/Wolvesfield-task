export default function ServiceCard({serviceItems}) {
  return (
    <div className="flex flex-row gap-5">
      <div className="flex items-center">
        <img
          className="w-20 rounded-full"
          src={serviceItems.icon}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between items-start gap-5">
        <p className="font-bold">{serviceItems.title}</p>
        <p className="text-sm">
          {serviceItems.desc}
        </p>
      </div>
    </div>
  );
}
