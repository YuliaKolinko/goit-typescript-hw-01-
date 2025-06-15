type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = {
  name: string;
  color: string;
};
type BottomType = {
  position: number;
  weight: number;
};
function compare(top: TopType, bottom: BottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
