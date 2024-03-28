import Benefit from "@/components/Benefit";
import Jumbotron from "@/components/Jumbotron";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <main className="">
      <MainMenu />
      <Jumbotron />
      <Benefit />
    </main>
  );
}
