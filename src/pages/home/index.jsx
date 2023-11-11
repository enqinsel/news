import EditorsPick from "../../components/EditorsPick";
import PoliticsBusiness from "../../components/PoliticsBusiness";
import RecentPopular from "../../components/RecentPopular";
// import Slider from "../../components/Slider";
import Slide from "../../components/Slide";

export default function Home() {
  

  return (
    <>
      <Slide></Slide>
      <EditorsPick></EditorsPick>
      <Slide></Slide>
      <PoliticsBusiness/>
      <RecentPopular/>
    </>
  );
}
