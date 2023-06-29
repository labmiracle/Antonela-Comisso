export default function List({ items }) {
  return items.map((element) => <li>{element.item}</li>);
}
