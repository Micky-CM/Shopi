import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"

const CheckoutSideMenu = ()=> {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed bg-white border border-black rounded-lg right-0 top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button>
          <XMarkIcon
            className="h6 w-6 text-black hover:text-purple-500"
            onClick={()=> context.closeCheckoutSideMenu()}/>
        </button>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu