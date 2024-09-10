import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../Utils"

const CheckoutSideMenu = ()=> {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id)=> {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed bg-white border border-black rounded-lg right-6 top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button>
          <XMarkIcon
            className="h6 w-6 text-black hover:text-purple-500"
            onClick={()=> context.closeCheckoutSideMenu()}/>
        </button>
      </div>
      <div className="px-6 overflow-y-scroll">
      {
        context.cartProducts.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
      }
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-medium text-xl">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu