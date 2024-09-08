import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = ()=> {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} flex-col fixed bg-white border border-black rounded-lg right-0 top-[68px] w-[360px] h-[calc(100vh-68px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button>
          <XMarkIcon
            className="h6 w-6 text-black hover:text-purple-500"
            onClick={()=> context.closeProductDetail()}/>
        </button>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.productToShow.image}
          alt={context.productToShow.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-xl">{context.productToShow.title}</span>
        <span className="font-medium text-sm">{context.productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail