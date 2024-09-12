import { ChevronRightIcon } from "@heroicons/react/16/solid"

const OrdersCard = props=> {
  const { date, totalPrice, totalProducts } = props
  return (
    <div className="flex justify-between items-center w-80 p-4 border border-black rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light text-xl">{date}</span>
          <span className="font-light text-xl">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon
            className="h6 w-6 text-black hover:text-purple-500"
          />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard