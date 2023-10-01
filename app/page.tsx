import StartPage from "@/components/StartPage";
import Skills from "../components/Skills";
import Works from "@/components/Works";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <StartPage />
        <Skills />
        <Works />
        <Contacts />
      </main>
    </>
  );
}
