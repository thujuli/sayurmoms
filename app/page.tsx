import Benefit from "@/components/home/Benefit";
import Jumbotron from "@/components/home/Jumbotron";
import MainMenu from "@/components/home/MainMenu";

export default function Home() {
  return (
    <main className="">
      <MainMenu />
      <Jumbotron />
      <Benefit />
    </main>
  );
}
