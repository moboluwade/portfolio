import { Landing } from "./components/Landing";
import { Portfolio } from "./components/Portfolio";

export default function Home() {
  return (
        <main className="h-96 pt-10">
          <Landing />
          <Portfolio />
        </main>
  )
}
