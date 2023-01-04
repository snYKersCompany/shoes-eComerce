import React from "react";
import { useSelector } from "react-redux";

// import {
//   CDBFooter,
//   CDBFooterLink, // eslint-disable-line
//   CDBBtn,
//   CDBIcon,
//   CDBContainer, // eslint-disable-line
//   CDBBox,
// } from "cdbreact";
import snyckers from "../../utils/images/footer/snyckers.jpeg";
import {
  juaniGH,
  martinGH,
  crisTGH,
  walterGH,
  crisVGH,
  rodrigoGH,
  santiagoGH,
  igAPP,
  twAPP,
  juaniLK,
  martinLK,
  crisTLK,
  walterLK,
  crisVLK,
  rodrigoLK,
  santiagoLK,
} from "../../utils/helpfulLinks";
import cssjshtml from "../../utils/images/footer/cssjshtml.png";
import nodejs from "../../utils/images/footer/nodejs.png";
import react from "../../utils/images/footer/react.png";
import redux from "../../utils/images/footer/redux.png";
import firebase from "../../utils/images/footer/firebase.png";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="first">
        <div className="container my-5 container">
          <div className="text-center text-lg-start text-white footer">
            <div className="p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4 mb-md-0 mx-3">
                    <h5 className="">snYKers</h5>

                    <p className="aboutUS">
                      snYKers is a web page design by a team of 7 full stack
                      developers who have created this APP as part of their
                      training and enjoyment.
                    </p>
                    <p className="aboutUS">Give us your review!</p>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Developer's</h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-white">
                          Santiago Romero
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Rodrigo Martinez
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Walter Celiz
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Juan I. Arrigoni
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Cristian G. Vera
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Martin Gadea
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          Cristian Treachi
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase btn btn-outline-light btn-floating m-1">
                      <i className="fab fa-linkedin-in"></i>
                    </h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a
                          href={santiagoLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Santiago Romero
                        </a>
                      </li>
                      <li>
                        <a
                          href={rodrigoLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Rodrigo Martinez
                        </a>
                      </li>
                      <li>
                        <a
                          href={walterLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Walter Celiz
                        </a>
                      </li>
                      <li>
                        <a
                          href={juaniLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Juan I. Arrigoni
                        </a>
                      </li>
                      <li>
                        <a
                          href={crisVLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Cristian G. Vera
                        </a>
                      </li>
                      <li>
                        <a
                          href={martinLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Martin Gadea
                        </a>
                      </li>
                      <li>
                        <a
                          href={crisTLK}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Cristian Treachi
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase btn btn-outline-light btn-floating m-1">
                      <i className="fab fa-github"></i>
                    </h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a
                          href={santiagoGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Santiago Romero
                        </a>
                      </li>
                      <li>
                        <a
                          href={rodrigoGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Rodrigo Martinez
                        </a>
                      </li>
                      <li>
                        <a
                          href={walterGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Walter Celiz
                        </a>
                      </li>
                      <li>
                        <a
                          href={juaniGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Juan I. Arrigoni
                        </a>
                      </li>
                      <li>
                        <a
                          href={crisVGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Cristian G. Vera
                        </a>
                      </li>
                      <li>
                        <a
                          href={martinGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Martin Gadea
                        </a>
                      </li>
                      <li>
                        <a
                          href={crisTGH}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white"
                        >
                          Cristian Treachi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <hr className="mb-4" />

              <section className="">
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register for free</span>
                  <a
                    href="https://snykers.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-light btn-rounded"
                    >
                      Sign up!
                    </button>
                  </a>
                </p>
              </section>

              <hr className="mb-4" />

              <section className="mb-4 text-center">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="toFacebook"
                  role="button"
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href={twAPP}
                  role="button"
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href={igAPP}
                  role="button"
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </section>
            </div>

            <div className="lastDiv">
              © 2023 Copyright:
              <a className="text-white" href="https://snykers.vercel.app/">
                {" "}
                snykers.vercel.app/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// {/* <a
//   className="btn btn-outline-light btn-floating m-1"
//   href="#!"
//   role="button"
//   >
//   <i className="fab fa-google"></i>
// </a> */}

// {/* <a
//   className="btn btn-outline-light btn-floating m-1"
//   href="#!"
//   role="button"
//   >
//   <i className="fab fa-linkedin-in"></i>
// </a> */}

// {/* <a
//   className="btn btn-outline-light btn-floating m-1"
//   href="#!"
//   role="button"
//   >
//   <i className="fab fa-github"></i>
// </a> */}

// {/* <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
// <h5 className="text-uppercase">BACK-TEAM</h5>

// <ul className="list-unstyled mb-0">
// <li>
// <a href="#!" className="text-white">
// Link 1
// </a>
// </li>
// <li>
//     <a href="#!" className="text-white">
//         Link 2
//       </a>
//     </li>
//     <li>
//       <a href="#!" className="text-white">
//       Link 3
//       </a>
//     </li>
//     <li>
//       <a href="#!" className="text-white">
//         Link 4
//       </a>
//     </li>
//     </ul>
// </div> */}

// const Footer = () => {
// const { userDashboard } = useSelector((state) => state.users);

// return userDashboard.roles !== "admin" ? (
//   <CDBFooter classNameName="shadow">
//     <CDBBox
//       display="flex"
//       justifyContent="between"
//       alignItems="center"
//       classNameName="mx-auto py-4 flex-wrap"
//       style={{ width: "80%" }}
//     >
//       {/* logo */}
//       <CDBBox display="flex" alignItems="center">
//         <div classNameName="d-flex align-items-center p-0 text-dark">
//           <img alt="logo" src={snyckers} padding="15px" width="150px" />
//         </div>
//       </CDBBox>

//       <CDBBox display="flex">
//         <CDBBtn flat color="dark" classNameName="mx-3 p-2">
//           <a href={twAPP} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="twitter" />
//           </a>
//         </CDBBtn>

//         <CDBBtn flat color="dark" classNameName="p-2">
//           <a href={igAPP} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="instagram" />
//           </a>
//         </CDBBtn>
//       </CDBBox>

//       <CDBBox display="flex">
//         <small classNameName="ml-4 h6 mb-0 font-weight-bold">
//           email: shop.snykers@gmail.com
//         </small>
//       </CDBBox>
//     </CDBBox>
//   </CDBFooter>
// ) : (
//   <CDBFooter classNameName="shadow">
//     <CDBBox
//       display="flex"
//       justifyContent="between"
//       alignItems="center"
//       classNameName="mx-auto py-4 flex-wrap"
//       style={{ width: "80%" }}
//     >
//       {/* logo */}
//       <CDBBox display="flex" alignItems="center">
//         <div classNameName="d-flex align-items-center p-0 text-dark">
//           <img alt="logo" src={snyckers} padding="15px" width="150px" />
//         </div>
//       </CDBBox>
//       {/* redes sociales */}
//       <CDBBox display="flex">
//         <CDBBtn flat color="dark" classNameName="mx-3 p-2">
//           <a href={twAPP} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="twitter" />
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="p-2">
//           <a href={igAPP} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="instagram" />
//           </a>
//         </CDBBtn>
//       </CDBBox>
//       {/* mail */}
//       <CDBBox display="flex">
//         <small classNameName="ml-4 h6 mb-0 font-weight-bold">
//           email: shop.snyckers@gmail.com
//         </small>
//       </CDBBox>
//       {/*integrantes */}
//       <CDBBox display="flex flex-wrap">
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={juaniGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={juaniGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={martinGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={crisTGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={walterGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={crisgGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={rodrigoGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//         <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//           <a href={santiagoGH} target="_blank" rel="noreferrer noopener">
//             <CDBIcon fab icon="github"></CDBIcon>
//           </a>
//         </CDBBtn>
//       </CDBBox>

//       {/*tecnologias */}
//       <CDBBox display="flex" right-padding="1px">
//         <img src={cssjshtml} classNameName="image1" alt="not found" />

//         <img src={nodejs} classNameName="image2" alt="not found" />

//         <img src={react} classNameName="image2" alt="not found" />

//         <img src={redux} classNameName="image2" alt="not found" />

//         <img src={firebase} classNameName="image2" alt="not found" />
//       </CDBBox>
//     </CDBBox>
//   </CDBFooter>

// );

// return(
//   <>
//   </>
// )

// };

//   return user && user.rol.regular ? (
//     <CDBFooter classNameName="shadow">
//       <CDBBox
//         display="flex"
//         justifyContent="between"
//         alignItems="center"
//         classNameName="mx-auto py-4 flex-wrap"
//         style={{ width: "80%" }}
//       >
//         {/* logo */}
//         <CDBBox display="flex" alignItems="center">
//           <div classNameName="d-flex align-items-center p-0 text-dark">
//             <img alt="logo" src={snyckers} padding="15px" width="150px" />
//           </div>
//         </CDBBox>

//         <CDBBox display="flex">
//           <CDBBtn flat color="dark" classNameName="mx-3 p-2">
//             <a href={twAPP}>
//               <CDBIcon fab icon="twitter" />
//             </a>
//           </CDBBtn>

//           <CDBBtn flat color="dark" classNameName="p-2">
//             <a href={igAPP}>
//               <CDBIcon fab icon="instagram" />
//             </a>
//           </CDBBtn>
//         </CDBBox>

//         <CDBBox display="flex">
//           <small classNameName="ml-4 h6 mb-0 font-weight-bold">
//             email: shop.snyckers@gmail.com
//           </small>
//         </CDBBox>
//       </CDBBox>
//     </CDBFooter>
//   ) : (
//     <CDBFooter classNameName="shadow">
//       <CDBBox
//         display="flex"
//         justifyContent="between"
//         alignItems="center"
//         classNameName="mx-auto py-4 flex-wrap"
//         style={{ width: "80%" }}
//       >
//         {/* logo */}
//         <CDBBox display="flex" alignItems="center">
//           <div classNameName="d-flex align-items-center p-0 text-dark">
//             <img alt="logo" src={snyckers} padding="15px" width="150px" />
//           </div>
//         </CDBBox>
//         {/* redes sociales */}
//         <CDBBox display="flex">
//           <CDBBtn flat color="dark" classNameName="mx-3 p-2">
//             <a href={twAPP}>
//               <CDBIcon fab icon="twitter" />
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="p-2">
//             <a href={igAPP}>
//               <CDBIcon fab icon="instagram" />
//             </a>
//           </CDBBtn>
//         </CDBBox>
//         {/* mail */}
//         <CDBBox display="flex">
//           <small classNameName="ml-4 h6 mb-0 font-weight-bold">
//             email: shop.snyckers@gmail.com
//           </small>
//         </CDBBox>
//         {/*integrantes */}
//         <CDBBox display="flex">
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={juaniGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={juaniGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={martinGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={crisTGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={walterGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={crisgGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={rodrigoGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" classNameName="mx-3 p-1">
//             <a href={santiagoGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//         </CDBBox>

//         {/*tecnologias */}
//         <CDBBox display="flex" right-padding="1px">
//           <img src={cssjshtml} classNameName="image1" alt="not found" />

//           <img src={nodejs} classNameName="image2" alt="not found" />

//           <img src={react} classNameName="image2" alt="not found" />

//           <img src={redux} classNameName="image2" alt="not found" />

//           <img src={firebase} classNameName="image2" alt="not found" />
//         </CDBBox>
//       </CDBBox>
//     </CDBFooter>
//   );
// };

// export default Footer;
