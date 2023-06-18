import { useState } from "react";
import "./App.css";
import Accordions from "./components/main-components/Accordions";
import DownloadCards from "./components/main-components/DownloadCards";
import Package from "./components/main-components/Package";
import Services from "./components/main-components/Services";
import TabBar from "./components/main-components/TabBar";
import hostingPkg from "./assets/hosting.json";
import domainPkg from "./assets/domains.json";
import ColorModal from "./components/main-components/ColorModal";

function App() {
  const [pkgDetails, setPkgDetails] = useState(domainPkg);

  function handleDisplayPackages(idx) {
    console.log(pkgDetails, idx);
    if (idx % 2 === 0) {
      setPkgDetails(hostingPkg);
    } else {
      setPkgDetails(domainPkg);
    }
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-9/12">
        <ColorModal />
        <TabBar handleDisplayPackages={handleDisplayPackages} />
        <Package pkgDetails={pkgDetails} />
        <Accordions />
        <Services />
        <DownloadCards />
      </div>
    </div>
  );
}

export default App;
