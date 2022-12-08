import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getChars } from "../../redux/characters/charactersActions"

const Paginated= () =>{
    
    const dispatch = useDispatch()
    //toma el estado del slice
    const { characters } = useSelector(state => state.characters)
    
    useEffect(() => {
        dispatch(getChars())
    }, [dispatch])

    let charactersRepeat = characters.concat(characters).concat(characters)

    console.log(charactersRepeat)

    // let products=['producto1','producto2','producto3','producto4','producto5','producto6',
    // 'producto1','producto2','producto3','producto4','producto5','producto6'] // funciona como sustituto de la info

    let pages = [] // el número de páginas de mi componente 
    if(charactersRepeat.length>0){
        for(let i = 1; i<=Math.ceil(charactersRepeat.length/9); i++){
            pages.push(i)
        }
    }



    //lígica de recorrido del páginado
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
    const videogamesSliced =  charactersRepeat.slice(indexOfFirstVideogame, indexOfLastVideogame) 
//fin paginado

    
    return(
        <div>
            <div>
            {charactersRepeat.length>1?
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
                <div className='d-flex  justify-content-center flex-wrap'>
                    {videogamesSliced.length? 
                        videogamesSliced.map(character => 
                            <div className='d-flex flex-column p-4 '>
                                <label className='d-flex justify-content-center'>{character.name} </label>
                                <img className='d-flex' src={character.image} alt={'img'}/>
                            </div>
                            )
                    : <></>}
                </div>
        </div>
        // {:
        // <></> //no se renderiza nada si no hay elementos en las cards}
)}

export default Paginated;