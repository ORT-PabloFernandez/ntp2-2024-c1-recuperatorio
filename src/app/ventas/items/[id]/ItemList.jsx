import Item from "./Item";
export default function ItemList(props){
  return( 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {props.items.map((item) => {
    return (
      <Item
        name={item.name}
        tags={item.tags}
        price={item.price}
        quantity={item.quantity}
      />
    );
  })}
    </div>
    );
}
