import hostingPkg from "../../assets/hosting.json"
import PkgCards from "../shared-components/PkgCards";

export default function Package({pkgDetails}) {
    console.log(pkgDetails)


  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {
        pkgDetails?.map((item, idx)=> <PkgCards key={idx} pkg={item} />  )
      }
    </div>
  );
}
