import PortfolioContext from "./PortfolioContext";
import { ReactNode, useState } from "react";
import BedroomRenderCover from "../Assets/Projects/BedroomRender/BedroomRenderCover.jpg";
import BedroomRender1 from "../Assets/Projects/BedroomRender/BedroomRender1.jpg";
import BedroomRender2 from "../Assets/Projects/BedroomRender/BedroomRender2.jpg";
import BedroomRender3 from "../Assets/Projects/BedroomRender/BedroomRender3.jpg";
import BedroomRender4 from "../Assets/Projects/BedroomRender/BedroomRender4.jpg";
import CurtainsCover from "../Assets/Projects/Curtains/CurtainsCover.jpg";
import Curtains1 from "../Assets/Projects/Curtains/Curtains1.jpg";
import Curtains2 from "../Assets/Projects/Curtains/Curtains2.jpg";
import Curtains3 from "../Assets/Projects/Curtains/Curtains3.jpg";
import Curtains4 from "../Assets/Projects/Curtains/Curtains4.jpg";
import GrinderCover from "../Assets/Projects/Grinder/GrinderCover.jpg";
import Grinder1 from "../Assets/Projects/Grinder/Grinder1.jpg";
import Grinder2 from "../Assets/Projects/Grinder/Grinder2.jpg";
import Grinder3 from "../Assets/Projects/Grinder/Grinder3.jpg";
import Grinder4 from "../Assets/Projects/Grinder/Grinder4.jpg";
import HotelRenderCover from "../Assets/Projects/HotelRender/HotelRenderCover.jpg";
import HotelRender1 from "../Assets/Projects/HotelRender/HotelRender1.jpg";
import HotelRender2 from "../Assets/Projects/HotelRender/HotelRender2.jpg";
import HotelRender3 from "../Assets/Projects/HotelRender/HotelRender3.jpg";
import HotelRender4 from "../Assets/Projects/HotelRender/HotelRender4.jpg";
import KitchenCover from "../Assets/Projects/Kitchen/KitchenCover.jpg";
import Kitchen1 from "../Assets/Projects/Kitchen/Kitchen1.jpg";
import Kitchen2 from "../Assets/Projects/Kitchen/Kitchen2.jpg";
import Kitchen3 from "../Assets/Projects/Kitchen/Kitchen3.jpg";
import Kitchen4 from "../Assets/Projects/Kitchen/Kitchen4.jpg";
import KnifeCover from "../Assets/Projects/Knife/KnifeCover.jpg";
import Knife1 from "../Assets/Projects/Knife/Knife1.jpg";
import Knife2 from "../Assets/Projects/Knife/Knife2.jpg";
import Knife3 from "../Assets/Projects/Knife/Knife3.jpg";
import Knife4 from "../Assets/Projects/Knife/Knife4.jpg";
import MirrorCover from "../Assets/Projects/Mirror/MirrorCover.jpg";
import Mirror1 from "../Assets/Projects/Mirror/Mirror1.jpg";
import Mirror2 from "../Assets/Projects/Mirror/Mirror2.jpg";
import Mirror3 from "../Assets/Projects/Mirror/Mirror3.jpg";
import Mirror4 from "../Assets/Projects/Mirror/Mirror4.jpg";
import SofaRenderCover from "../Assets/Projects/SofaRender/SofaRenderCover.jpg";
import SofaRender1 from "../Assets/Projects/SofaRender/SofaRender1.jpg";
import SofaRender2 from "../Assets/Projects/SofaRender/SofaRender2.jpg";
import SofaRender3 from "../Assets/Projects/SofaRender/SofaRender3.jpg";
import SpoonCover from "../Assets/Projects/Spoon/SpoonCover.jpg";
import Spoon1 from "../Assets/Projects/Spoon/Spoon1.jpg";
import Spoon2 from "../Assets/Projects/Spoon/Spoon2.jpg";
import Spoon3 from "../Assets/Projects/Spoon/Spoon3.jpg";
import Spoon4 from "../Assets/Projects/Spoon/Spoon4.jpg";
import WheelCover from "../Assets/Projects/Wheel/WheelCover.jpg";
import Wheel1 from "../Assets/Projects/Wheel/Wheel1.jpg";
import Wheel2 from "../Assets/Projects/Wheel/Wheel2.jpg";
import Wheel3 from "../Assets/Projects/Wheel/Wheel3.jpg";
import Wheel4 from "../Assets/Projects/Wheel/Wheel4.jpg";

function GlobalState({ children }: { children: ReactNode }): JSX.Element {
  const projectOverview = [
    "BedroomRender",
    "Curtains",
    "Grinder",
    "HotelRender",
    "Kitchen",
    "Knife",
    "Mirror",
    "SofaRender",
    "Wheel",
    "Spoon",
  ];
  const projectCGI = ["BedroomRender", "SofaRender", "HotelRender"];
  const projectGraphics = ["Wheel", "Kitchen", "Curtains"];
  const projectIndustrialDesign = ["Grinder", "Knife", "Mirror", "Spoon"];

  //This handles the Menu Logo rotation on click
  const [rotation, setRotation] = useState(0);
  const handleRotation = () => {
    if (rotation === 0) {
      setRotation(rotation - 90);
    } else {
      setRotation(0);
    }
  };
  //Handles the menu display on Click
  const [display, setDisplay] = useState("");

  const projectDatabase = {
    BedroomRender: {
      name: "Bedroom Render",
      year: 2020,
      cover: BedroomRenderCover,
      coverSpan: 1,
      detailPhotos: [BedroomRender1, BedroomRender2, BedroomRender3, BedroomRender4],
      textBox: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        "worked on sich design",
      ],
    },
    Curtains: {
      name: "Curtains",
      year: 2020,
      cover: CurtainsCover,
      coverSpan: 1,
      detailPhotos: [Curtains1, Curtains2, Curtains3, Curtains4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    Grinder: {
      name: "Grinder",
      year: 2020,
      cover: GrinderCover,
      coverSpan: 1,
      detailPhotos: [Grinder1, Grinder2, Grinder3, Grinder4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    HotelRender: {
      name: "Hotel Render",
      year: 2019,
      cover: HotelRenderCover,
      coverSpan: 1,
      detailPhotos: [HotelRender1, HotelRender2, HotelRender3, HotelRender4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    Kitchen: {
      name: "Kitchen",
      year: 2019,
      cover: KitchenCover,
      coverSpan: 2,
      detailPhotos: [Kitchen1, Kitchen2, Kitchen3, Kitchen4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    Knife: {
      name: "Knife",
      year: 2019,
      cover: KnifeCover,
      coverSpan: 1,
      detailPhotos: [Knife1, Knife2, Knife3, Knife4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    Mirror: {
      name: "Mirror",
      year: 2019,
      cover: MirrorCover,
      coverSpan: 1,
      detailPhotos: [Mirror1, Mirror2, Mirror3, Mirror4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    SofaRender: {
      name: "Sofa Render",
      year: 2019,
      cover: SofaRenderCover,
      coverSpan: 2,
      detailPhotos: [SofaRender1, SofaRender2, SofaRender3],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    Spoon: {
      name: "Spoon",
      year: 2019,
      cover: SpoonCover,
      coverSpan: 1,
      detailPhotos: [Spoon1, Spoon2, Spoon3, Spoon4],
      textBox: ["Product Design", "worked on sich design", "line 3"],
    },
    Wheel: {
      name: "Wheel",
      year: 2019,
      cover: WheelCover,
      coverSpan: 2,
      detailPhotos: [Wheel1, Wheel2, Wheel3, Wheel4],
      textBox: ["Product Design", "worked on sich design"],
    },
  };

  return (
    <PortfolioContext.Provider
      value={{
        projectDatabase,
        projectOverview,
        projectCGI,
        projectGraphics,
        projectIndustrialDesign,
        rotation,
        handleRotation,
        display,
        setDisplay,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export default GlobalState;
