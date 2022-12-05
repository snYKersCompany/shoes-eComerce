import React from "react";
import Pagination from 'react-bootstrap/Pagination';
import { useState } from "react";
const Paginated= () =>{
    let products=['producto1','producto2','producto3','producto4','producto5','producto6',
    'producto1','producto2','producto3','producto4','producto5','producto6'] // funciona como sustituto de la info

    let pages = [] // el número de páginas de mi componente 
    
    for(let i = 1; i<=Math.ceil(products.length/1); i++){
        pages.push(i)
    }

    const [actualPage, setActualPage] =useState(1)

    const currentPage = (page) =>{
        setActualPage(page)
    }

    const slicedPaged = () =>{
        if(actualPage <=3){
            const slice = pages.slice(0,7)   
            return slice
        }
        if(actualPage>3 && (pages[actualPage+3] !== undefined)){
            const slice = pages.slice(actualPage-4, actualPage+3 )   
            return slice
        }
        else if(actualPage>3 && pages[actualPage+4] === undefined){
            
            const slice = pages.slice(pages.length-7, pages.length)   
            return slice
        }
    }
    
    return(
        pages.length<=8 && pages.length !== 0? // cuando son menos de 8 páginas
        <Pagination className="d-flex justify-content-center mt-3">
            {actualPage!==1?
                <Pagination.Prev onClick={() => currentPage(actualPage-1)}/>            
                :
                <Pagination.Prev disabled/>            
            }
            
            {pages.map(
                page => page===actualPage? 
                <Pagination.Item key={page} active onClick={() => currentPage(page)}>{page}</Pagination.Item>
                :
                <Pagination.Item key={page} onClick={()=> currentPage(page)}>{page}</Pagination.Item>
            )}

            {actualPage!== pages[pages.length-1]?
            <Pagination.Next onClick={() => currentPage(actualPage+1)}/>            
            :
            <Pagination.Next disabled/>            
            }

        </Pagination>
        :
        pages.length>8?

        <Pagination className="d-flex justify-content-center mt-3">
            {/* {First and Prev} */}
            {actualPage!==1?
                <>
                    <Pagination.First  onClick={() => currentPage(1)}/>
                    <Pagination.Prev onClick={() => currentPage(actualPage-1)}/>            
                </>
                :
                <>
                    <Pagination.First disabled/>            
                    <Pagination.Prev disabled/>            
                </>
            }


            {/* {pages } */}
            {slicedPaged().map(
                page => page===actualPage? 
                <Pagination.Item key={page} active onClick={() => currentPage(page)}>{page}</Pagination.Item>
                :
                <Pagination.Item key={page} onClick={()=> currentPage(page)}>{page}</Pagination.Item>
            )}


            {/* {Next and Last} */}
            {actualPage!== pages[pages.length-1]?
                <>
                    <Pagination.Next onClick={() => currentPage(actualPage+1)}/>            
                    <Pagination.Last onClick={() => currentPage(pages[pages.length-1])}/>
                </>           
            :
                <>
                    <Pagination.Next disabled/>            
                    <Pagination.Last  disabled/>
                </>              
            }
        </Pagination>
        :
        <></> //no se renderiza nada si no hay elementos en las cards
)}

export default Paginated;