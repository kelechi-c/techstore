import gadgets  from "../DataFiles/Products";
import ProductCard from "../Components/Card";

const StorePage = () => {
   
    const productItems = gadgets.map(gadget => {
     return <ProductCard
          key={gadget.id}
          name={gadget.item}
          price={gadget.price}
          stock={gadget.stock}
          gadgetType={gadget.category}
          img={gadget.img}
        />
    })

    return ( 
        <section>
            {productItems}
        </section>
     );
}
 
export default StorePage;