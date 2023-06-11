import Title from "./Title";
import Text from "./Texto";
import List from "./List";
import Link from "./Link";

export default function Loading({ show }) {
  const myItems = [
    { item: "Observar el HTML" },
    { item: "Pensar en cómo puedo extraer cada parte en componentes" },
    { item: "Usarlos, o mejor dicho, reusarlos en React" },
  ];
  if (show === true) {
    return (
      <>
        <Title />
        <Text />
        <List items={myItems} />
        <Link openInNewTab={"_blank"} />
      </>
    );
  }
  if (show === false) {
    return "Loading...";
  }
}
