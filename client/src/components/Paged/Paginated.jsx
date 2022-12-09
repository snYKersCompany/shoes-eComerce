import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
// import { getChars } from "../../redux/features/characters/charactersActions"
import { getAllProducts } from "../../redux/features/products/productsActions"
import CardsContainer from '../CardsContainer/CardsContainer';


const Paginated= () =>{
    
    const dispatch = useDispatch()
    //toma el estado del slice
    // const { characters } = useSelector(state => state.characters)


    const { products } = useSelector(state => state.products) //cambiar nombre

    
    // useEffect(() => {
    //     dispatch(getChars())
    // }, [dispatch])

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    // let charactersRepeat = characters.concat(characters).concat(characters)


    // let products=['producto1','producto2','producto3','producto4','producto5','producto6',
    // 'producto1','producto2','producto3','producto4','producto5','producto6'] // funciona como sustituto de la info

    let pages = [] // el número de páginas de mi componente 
    // if(charactersRepeat.length>0){
    //     for(let i = 1; i<=Math.ceil(charactersRepeat.length/9); i++){
    //         pages.push(i)
    //     }
    // }


    if(products.length>0){
        for(let i = 1; i<=Math.ceil(products.length/15); i++){
            pages.push(i)
        }
    }


    //lígica de recorrido del páginado
    const slicedPaged = () =>{
        if(actualPage <=2){
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

    //Paginado
    //states
    const [actualPage, setActualPage] = useState(1)
    // eslint-disable-next-line
    const[videogamesPerPage, setVideogamesPerPage] = useState(9)
//función recorredora del paginado
    const currentPage = (numberpage)=>{
        setActualPage(numberpage)
    }
//const
    const indexOfLastVideogame= actualPage* videogamesPerPage
    const indexOfFirstVideogame= indexOfLastVideogame - videogamesPerPage
    // const videogamesSliced =  charactersRepeat.slice(indexOfFirstVideogame, indexOfLastVideogame)
    const productsSliced =  products.slice(indexOfFirstVideogame, indexOfLastVideogame)
//fin paginado

    return(
        <div>
            <div>
            {/* {charactersRepeat.length>1? */}
            {products.length>1?
                pages.length<8?
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
                            )
                        }
            
                        {actualPage!== pages[pages.length-1]?
                        <Pagination.Next onClick={() => currentPage(actualPage+1)}/>            
                        :
                        <Pagination.Next disabled/>            
                        }
            
                    </Pagination>
                    :
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


                        {/* {Next and Last}*/ }
                        { actualPage!== pages[pages.length-1]?
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
            : <></>}
            
            {/*cards de pruebas*/}

            </div>
                <CardsContainer productsSliced={productsSliced} />
            </div>
        // {:
        // <></> //no se renderiza nada si no hay elementos en las cards}
)}

export default Paginated;