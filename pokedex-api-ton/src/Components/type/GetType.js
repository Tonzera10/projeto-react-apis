import bug from "../../assets/Type/bug.png";
import fire from "../../assets/Type/fire.png";
import flying from "../../assets/Type/flying.png";
import grass from "../../assets/Type/grass.png";
import normal from "../../assets/Type/normal.png";
import poison from "../../assets/Type/poison.png";
import water from "../../assets/Type/water.png";
import { ClassFirst, StyleImgClass, StyleTextClass } from "./GetStyleType";
function GetType({ pokeCard }) {
  const listPoke = pokeCard?.types?.map((type, index) => {
    switch (type.type.name) {
      case "poison":
        return (
          <ClassFirst key={index} color="#AD61AE">
            <StyleImgClass src={poison} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      case "bug":
        return (
          <ClassFirst key={index} color="#316520">
            <StyleImgClass src={bug} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      case "fire":
        return (
          <ClassFirst key={index} color="#F44900">
            <StyleImgClass src={fire} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      case "flying":
        return (
          <ClassFirst key={index} color="#6892B0">
            <StyleImgClass src={flying} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      case "grass":
        return (
          <ClassFirst key={index} color="#70B873">
            <StyleImgClass src={grass} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      case "normal":
        return (
          <ClassFirst key={index} color="#8A8A8A">
            <StyleImgClass src={normal} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      case "water":
        return (
          <ClassFirst key={index} color="#33A4F5">
            <StyleImgClass src={water} />
            <StyleTextClass>{type.type.name}</StyleTextClass>
          </ClassFirst>
        );
      default:
        break;
    }
    return (
      <ClassFirst key={index} color="#33A4F5">
        <StyleImgClass src={water} />
        <StyleTextClass>{type.type.name}</StyleTextClass>
      </ClassFirst>
    );
  });
  return <>{listPoke}</>;
}

export default GetType;
