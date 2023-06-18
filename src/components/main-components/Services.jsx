import ServiceCard from "../shared-components/ServiceCard";
import services from "../../assets/services.json"

export default function Services() {
  return (
    <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      
      {
        services.map((items, idx)=> <ServiceCard key={idx} serviceItems={items} />)
      }
    </div>
  )
}
