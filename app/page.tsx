import StartPage from "@/components/StartPage";
import About from "@/components/About";
import Works from "@/components/Works";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";

export default function Home() {
    return (
      <>
          <Header/>
          <main>
              <StartPage/>
              <About/>
              <Works/>
              <Contacts/>
          </main>
      </>
    )
}
