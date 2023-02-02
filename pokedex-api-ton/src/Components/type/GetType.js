import bug from "../../assets/Type/bug.png";
import fire from "../../assets/Type/fire.png";
import flying from "../../assets/Type/flying.png";
import grass from "../../assets/Type/grass.png";
import normal from "../../assets/Type/normal.png";
import poison from "../../assets/Type/poison.png";
import water from "../../assets/Type/water.png";
import {
  ClassFirst,
  StyleImgClass,
  StyleTextClass,
} from "./GetStyleType";

function GetType({ pokeCard }) {
  pokeCard.types.map((type, index) => {
    let typePoke = "";
    let color = "";
    switch (type.type.name) {
      case "poison":
        typePoke = poison;
        color = "#AD61AE";
        break;
      case "bug":
        typePoke = bug;
        color = "#316520";
        break;
      case "fire":
        typePoke = fire;
        color = "#F44900";
        break;
      case "flying":
        typePoke = flying;
        color = "#6892B0";
        break;
      case "grass":
        typePoke = grass;
        color = "#70B873";
        break;
      case "normal":
        typePoke = normal;
        color = "#8A8A8A";
        break;
      case "water":
        typePoke = water;
        color = "#33A4F5";
        break;
      default:
        typePoke = "";
        break;
    }
    return (
      <>     
        <ClassFirst key={index}>
          <StyleImgClass />
          <StyleTextClass>{type.type.name}</StyleTextClass>
        </ClassFirst>
      </>
    );
  });
}

export default GetType;
