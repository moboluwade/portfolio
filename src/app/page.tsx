import { Landing } from "./components/Landing";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
        <main className="h-96 ">
          <div className="pt-10 w-full"></div>
          <Landing />
          <Portfolio />
          <div className="pb-32 w-full"></div>
        </main>
  )
}
