import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don&apos;t have anything :(</div>
      )
    }
  }

    return (
      <Layout>
        <div className="flex justify-center items-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Exlusive Products</h1>
        </div>
        <input
          className="w-80 rounded-lg border border-black focus:outline-purple-500 p-2 mb-4"
          type="text"
          placeholder="Search a product"
          onChange={(event)=> context.setSearchByTitle(event.target.value)}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          { renderView() }
        </div>
        <ProductDetail />
      </Layout>
    )
  }

  export default Home