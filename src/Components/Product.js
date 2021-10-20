import React ,{useState,useEffect} from 'react'
import products from '../Server/Product.json'
import Main from './Main'
function Product() {
    const [product,setproduct]=useState([])
    useEffect(()=>{
        console.log(products.products)
        setproduct(products.products)
    },[])
    console.log({product})
    return (
    
        <>
        <Main />
        <div className="container">
            <h1 className="m-4">Product List</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>
                            Sno
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Quantity
                        </th>
                    </tr>
                </thead>
                <tbody>
                
                    {   
                        //Object.values(product)[0]
                        product.map(data=>{
                            return(
                                <tr key={data.id}>
                                    <td>
                                        {data.id}
                                    </td>
                                    <td>
                                        {data.pname}
                                    </td>
                                    <td>
                                        {data.price}
                                    </td>
                                    <td>
                                        {data.quantity}
                                    </td>
                                </tr>

                            )
                        })
                    }


                                            
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Product
