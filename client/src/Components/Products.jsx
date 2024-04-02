

const Products = ({state, dispatch}) => {

    const {products, cart} = state
    return ( 
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
        
        }}>
            {
              products.map((prod) => (
                <div
                key={prod.id}
                style={{
                    display:"flex",
                    flexDirection:"column",
                    padding:10,
                    border:"1px solid grey",
                    width:"30%",
                    marginTop:10,
                    gap:10
                }}
                >
                  <img src={prod.thumbnail} alt={prod.title} style={{heigt:200, objectFit:"cover"}} />
                  <div style={{display:"flex", justifyContent:"space-between"}}>
                        <span>{prod.title}</span>
                        <b>${prod.price}</b>
                        <b>${prod.pdescription}</b>
                  </div>
                    

                   {
                    cart.some(a => a.id === prod.id) ?  
                    <button style={{
                        padding: 10,
                        border: 0,
                        borderRadius:5,
                        backgroundColor: "red",
                        color:"green"
                      }}
                      onClick={() => dispatch({
                        type:"REMOVE_FROM_CART",
                        payload: prod
                      })}
                      >
                        Remove From Cart
                      </button>
                       :
                       <button style={{
                        padding: 10,
                        border: 0,
                        borderRadius:5,
                        backgroundColor: "green",
                        color:"yellow"
                      }}
                      onClick={() =>  dispatch({
                        type:"ADD_TO_CART",
                        payload: {
                            id: prod.id,
                            title: prod.title,
                            thumbnail: prod.thumbnail,
                            qty:1,
                            price:prod.price
                        } 
                      })}
                      >
                        Add to Cart
                      </button>
                   }
                   
                  
                </div>
              ))
            }
        </div>
     );
}
 
export default Products;