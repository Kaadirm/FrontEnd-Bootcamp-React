import React, {useState} from 'react'
import { productsData } from './productsData'

function DataSample() {
    const [products, setProducts] = useState(productsData);
    const [idAscending, setidAscending ] = useState(true)
    const [nameAscending, setnameAscending ] = useState(true)
    const [contactAscending, setcontactAscending ] = useState(true)
    const [titleAscending, settitleAscending ] = useState(true)

    const deleteProduct = (id) => {
        const result = window.confirm("Want to delete?");
        if (result) {
            const filteredProducts = products.filter(q => q.id != id);
            setProducts([...filteredProducts])
        }
    }
    const sortId = () => {
        const sortedById = [...products].sort((a,b) => { 
            if (a.id < b.id) { 
                return idAscending ? -1 : 1   
            }
            if (a.id > b.id) {
                return !idAscending ? -1 : 1
            }
        
        })
        setidAscending(!idAscending)
        setProducts([...sortedById])
    }

    const sortName = () => {
        const sortedByName = [...products].sort((a,b) => { 
            if (a.companyName < b.companyName) { 
                return nameAscending ? -1 : 1   
            }
            if (a.companyName > b.companyName) {
                return !nameAscending ? -1 : 1
            }
        
        })
        setnameAscending(!nameAscending)
        setProducts([...sortedByName])
    }

    const sortContact = () => {
        const sortedByContact = [...products].sort((a,b) => { 
            if (a.contactName < b.contactName) { 
                return contactAscending ? -1 : 1   
            }
            if (a.contactName > b.contactName) {
                return !contactAscending ? -1 : 1
            }
        
        })
        setcontactAscending(!contactAscending)
        setProducts([...sortedByContact])
    }
    const sortTitle = () => {
        const sortedByTitle = [...products].sort((a,b) => { 
            if (a.contactTitle < b.contactTitle) { 
                return titleAscending ? -1 : 1   
            }
            if (a.contactTitle > b.contactTitle) {
                return !titleAscending ? -1 : 1
            }
        
        })
        settitleAscending(!titleAscending)
        setProducts([...sortedByTitle])
    }
    
    const showAdress = (target) => {
            if(target.className === "showAdress"){
                target.className = "asd"
            }
            else{
                target.className = "showAdress"
            }
    }


  return (<>
    <h1>Length: {products.length}</h1>
        <table className="w3-table-all w3-hoverable" >
            <thead>
                <tr>
                    <th onClick={() => sortId()} className='w3-hover-blue' style={{cursor: "pointer"}} >Id</th>
                    <th onClick={() => sortName()} className='w3-hover-blue'style={{cursor: "pointer"}}>Company Name</th>
                    <th onClick={() => sortContact()} className='w3-hover-blue'style={{cursor: "pointer"}}>Contact Name</th>
                    <th onClick={() => sortTitle()} className='w3-hover-blue'style={{cursor: "pointer"}}>Contact Title</th>
                    <th>Address</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>
                                <a onClick={(e) => showAdress(e.target)}  className="w3-hover-blue" style={{cursor: "pointer"}}>
                                +</a> Adress
                                    <ul className="hide" >
                                        <li>Street: {item.address.street}</li>
                                        <li>City: {item.address.city}</li>
                                        <li>Region: {item.address.region}</li>
                                        <li>PostalCode: {item.address.postalCode}</li>
                                        <li>Country: {item.address.country}</li>
                                        <li>Phone: {item.address.phone}</li>
                                    </ul>
                                
                                </td>
                            <td><button onClick={() => deleteProduct(item.id)} className="w3-btn w3-red ">Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default DataSample