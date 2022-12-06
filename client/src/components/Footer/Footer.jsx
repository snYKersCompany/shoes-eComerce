import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import snyckers from '../utils/images/footer/snyckers.jpeg'
import { juaniGH, martinGH, crisTGH, walterGH, crisgGH, rodrigoGH, santiagoGH, igAPP, twAPP } from '../utils/helpfulLinks'
import cssjshtml from '../utils/images/footer/cssjshtml.png'
import nodejs from '../utils/images/footer/nodejs.png'
import react from '../utils/images/footer/react.png'
import redux from '../utils/images/footer/redux.png'
import firebase from '../utils/images/footer/firebase.png'
import * as style from '../styles/footer.module.css'


const Footer = () => {

    //hardCoding asi no se rompe
    let user = {
        roll: {
            admin: 'admin',
            regular: 'regular'
        }
    }


    return user && user.roll.regular ? (
            <CDBFooter className="shadow">
                <CDBBox
                    display="flex"
                    justifyContent="between"
                    alignItems="center"
                    className="mx-auto py-4 flex-wrap"
                    style={{ width: '80%' }}
                >
                    {/* logo */}
                    <CDBBox display="flex" alignItems="center">
                        <div className="d-flex align-items-center p-0 text-dark">
                            <img
                                alt="logo"
                                src={snyckers}
                                padding='15px'
                                width="150px"
                            />
                        </div>
                    </CDBBox>

                    <CDBBox display="flex">

                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <a href={twAPP}>
                                <CDBIcon fab icon="twitter" />
                            </a>
                        </CDBBtn>

                        <CDBBtn flat color="dark" className="p-2">
                            <a href={igAPP}>
                                <CDBIcon fab icon="instagram" />
                            </a>
                        </CDBBtn>

                    </CDBBox>

                    <CDBBox display='flex'>
                        <small className="ml-4 h6 mb-0 font-weight-bold">email: shop.snyckers@gmail.com</small>
                    </CDBBox>
                </CDBBox>
            </CDBFooter>
        ) : (
        <CDBFooter className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                {/* logo */}
                <CDBBox display="flex" alignItems="center">
                    <div className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo"
                            src={snyckers}
                            padding='15px'
                            width="150px"
                        />
                    </div>
                </CDBBox>
                {/* redes sociales */}
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <a href={twAPP}>
                            <CDBIcon fab icon="twitter" />
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <a href={igAPP}>
                            <CDBIcon fab icon="instagram" />
                        </a>
                    </CDBBtn>
                </CDBBox>
                {/* mail */}
                <CDBBox display='flex'>
                    <small className="ml-4 h6 mb-0 font-weight-bold">email: shop.snyckers@gmail.com</small>
                </CDBBox>
                {/*integrantes */}
                <CDBBox display='flex'>

                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={juaniGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={juaniGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={martinGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={crisTGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={walterGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={crisgGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={rodrigoGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-1">
                        <a href={santiagoGH}>
                            <CDBIcon fab icon='github'></CDBIcon>
                        </a>
                    </CDBBtn>

                </CDBBox>

                {/*tecnologias */}
                <CDBBox display='flex' right-padding='1px' >

                    <img src={cssjshtml} className={style.image1} alt="not found" />

                    <img src={nodejs} className={style.image2} alt="not found" />

                    <img src={react} className={style.image2} alt="not found" />

                    <img src={redux} className={style.image2} alt="not found" />

                    <img src={firebase} className={style.image2} alt="" />


                </CDBBox>


            </CDBBox>
        </CDBFooter>
    )

}



export default Footer;