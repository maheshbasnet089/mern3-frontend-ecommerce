import { useEffect } from "react"
import Navbar from "../../globals/components/Navbar"
import Card from "./components/Card"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchProducts } from "../../store/productSlice"


function Product(){
    const dispatch = useAppDispatch()
    const {products,status} = useAppSelector((store)=>store.products)
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return ( 
        <>
        <Navbar/>
 <div>
  <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
    {products.length > 0 && products.map((product)=>{
        return (

            <Card product={product} />
        )
    })}


  </section>

  {/* Support Me 🙏🥰 */}
  <script>
    kofiWidgetOverlay.draw('mohamedghulam', {'{'}
    'type': 'floating-chat',
    'floating-chat.donateButton.text': 'Support me',
    'floating-chat.donateButton.background-color': '#323842',
    'floating-chat.donateButton.text-color': '#fff'
    {'}'});
  </script></div>

        </>
    )
}

export default Product