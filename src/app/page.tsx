import { Landing } from "./components/Landing";
import { Portfolio } from "./components/Portfolio";
import PseudoPortfolio from "./components/PseudoPortfolio/PseudoPortfolio";

export default function Home() {
  return (
    <main className="h-screen relative flex flex-row justify-center w-full">
      {/* <div className="pt-10 w-full"></div> */}
      <Landing />
      {/* <Portfolio /> */}
      {/* <div className="pb-32 w-full"></div> */}
    </main>
  )
}
