import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"

const Navbar = ()=> {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4"
  return (
    <nav className="flex justify-between items-center fixed bg-white/80 z-10 top-0 w-full py-3 px-8 text-lg font-light mb-10">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-purple-500 mb-2 mr-3 text-3xl">
          <NavLink to='/'>
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={()=> context.setSearchByCategory()}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={()=> context.setSearchByCategory('clothing')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jewelery'
            onClick={()=> context.setSearchByCategory('jewelery')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={()=> context.setSearchByCategory('electronics')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          micky@mail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            SingIn
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon
            className="w-6 h-6 text-purple-500"
            onClick={context.openCheckoutSideMenu}
          />
          {context.count}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar