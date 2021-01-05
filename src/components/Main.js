import React, { useEffect, useState } from 'react'
import axios from "axios";


function Main({setCart_items, Cart_items}) {
    const URL = "https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json"
    
    const [Products,setProducts] = useState([])
    const [Isactive,setIsactive] = useState('')
    const [Sort,setSort] = useState('')
    const [Filter,setFilter] = useState('all')

    const sizes = [30,31,32,33]

    // the api response was not a valid json, there was an extra comma in the end, had to remove it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => { 
        const resp = await axios.get(URL)
        const data = JSON.parse(resp.data.replace(/,([^,]*)$/, '$1'))   
        setProducts(data)
    },[URL])
    return (<>
{/* information on head */}
        <div className='hero'>
            <h5 className='light_text'>Home / Clothing / Mens Clothing / All Mens Clothing</h5>
            <div id='head_info'>
                 <h2 className='strong_text'>All Products</h2>
                 <h2 className='light_text'>({Products.length} Products)</h2>
            </div>


{/* filter functionality */}
            <div className='filters'>
            <h3 className='strong_text' id='filter_text'>filters: 
                 <button onClick={() => setFilter('all')} className={`filter_btn ${Filter === 'all' && 'selected_btn'}`}>
                     All Products
                 </button>
                 <button onClick={() => setFilter('T-shirt')} className={`filter_btn ${Filter === 'T-shirt' && 'selected_btn'}`}>
                     Tee Shirt
                 </button>
                 <button onClick={() => setFilter('Denim')} className={`filter_btn ${Filter === 'Denim' && 'selected_btn'}`}>
                     Denim
                 </button>
                 <button onClick={() => setFilter('jacket')} className={`filter_btn ${Filter === 'jacket' && 'selected_btn'}`}>
                     Jacket
                 </button>
                 <button onClick={() => setFilter('shirt')} className={`filter_btn ${Filter === 'shirt' && 'selected_btn'}`}>
                     Shirt
                 </button>
            </h3>


{/* sort functionality */}
            <div className='select_wrap'>
            <label>Sort By: </label>
            <select value={Sort} onChange={(e)=> setSort(e.target.value)}>
                <option value='low to high'>Price Low to High</option>
                <option value='high to low'>Price High to Low</option>
            </select>
            </div>
            </div>
        </div>


{/* Product Cards */}
        <div className='card_container'>

            {Products
            // sort functionality
            .sort( Sort==='high to low'? (a, b) => parseFloat(b.price) - parseFloat(a.price) 
            : (a, b) => parseFloat(a.price) - parseFloat(b.price))
            
            // mapping through products
            .map((item)=>
            // display card IF filter matches item's tag OR is filter is "all".
            <div className={`card ${(Filter === item.tag || Filter === 'all') && 'show_card'}`} key={item.id}>

                <img className='card_img' src={item.image_src} alt={item.name}/>
                <div className='size_div'>
                    <h2>Select Size</h2>
                    <div>
                        {sizes.map((size,i)=><button key={i} onClick={()=> setIsactive(item.id)}>{size}</button>)}
                    </div>
                </div>

            {/* display add-to-cart button if id in 'Isactive' matches item id */}
                <div className={`add_to_cart_div ${Isactive===item.id && 'show_add_btn'}`}>
                    <button id="add_btn" className="strong_text" onClick={() => {setCart_items(Cart_items.concat(JSON.stringify(item)))}}>Add To Cart</button>
                </div>
                {/* item details */}
                <h2 className='strong_text'>{item.vendor}</h2>
                <h4 className='light_text'>{item.name}</h4>
                <div className='price_box'>
                    <h3 className='strong_text'>${item.price}</h3> 
                    <h3 className='light_text'>
                        <strike>${item.compare_at_price}</strike>
                    </h3>
                    {/* to calculate discount percentage */}
                    <h3 className='red_text'>({((item.compare_at_price-item.price)/item.compare_at_price*100).toFixed(0)}% OFF)</h3></div>
                    </div>)}
            </div>
            </>
    )
}

export default Main
