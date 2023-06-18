import DownloadCard from "../shared-components/DownloadCard";
import downloadCardDetails from '../../assets/downloadCards.json'

export default function DownloadCards() {
  return (
    <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-44">
     {
        downloadCardDetails.map((item, idx)=> <DownloadCard key={idx} downloadCardItem={item} />)
     }
    </div>
  );
}
