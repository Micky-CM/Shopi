import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../Utils"

const CheckoutSideMenu = ()=> {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id)=> {
    const filteredProducts = context.cartProducts.filter((product) => product.id != id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = ()=> {
    const date = new Date()
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setCount(0)
    context.closeCheckoutSideMenu()
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed bg-white border border-black rounded-lg right-6 top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button>
          <XMarkIcon
            className="h6 w-6 text-black hover:text-purple-500"
            onClick={()=> context.closeCheckoutSideMenu()}
          />
        </button>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
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
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-medium text-xl">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className="w-full bg-black py-3 text-white rounded-lg"
            onClick={()=> handleCheckout()}>
              Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu