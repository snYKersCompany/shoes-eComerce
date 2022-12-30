import React from "react";
import { useSelector } from "react-redux";

import {
  CDBFooter,
  CDBFooterLink, // eslint-disable-line
  CDBBtn,
  CDBIcon,
  CDBContainer, // eslint-disable-line
  CDBBox,
} from "cdbreact";
import snyckers from "../../utils/images/footer/snyckers.jpeg";
import {
  juaniGH,
  martinGH,
  crisTGH,
  walterGH,
  crisgGH,
  rodrigoGH,
  santiagoGH,
  igAPP,
  twAPP,
} from "../../utils/helpfulLinks";
import cssjshtml from "../../utils/images/footer/cssjshtml.png";
import nodejs from "../../utils/images/footer/nodejs.png";
import react from "../../utils/images/footer/react.png";
import redux from "../../utils/images/footer/redux.png";
import firebase from "../../utils/images/footer/firebase.png";
import "../../styles/footer.css";

const Footer = () => {
  const { userDashboard } = useSelector((state) => state.users);

  return userDashboard.roles !== "admin" ? (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        {/* logo */}
        <CDBBox display="flex" alignItems="center">
          <div className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src={snyckers} padding="15px" width="150px" />
          </div>
        </CDBBox>

        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <a href={twAPP} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="twitter" />
            </a>
          </CDBBtn>

          <CDBBtn flat color="dark" className="p-2">
            <a href={igAPP} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="instagram" />
            </a>
          </CDBBtn>
        </CDBBox>

        <CDBBox display="flex">
          <small className="ml-4 h6 mb-0 font-weight-bold">
            email: shop.snykers@gmail.com
          </small>
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
        style={{ width: "80%" }}
      >
        {/* logo */}
        <CDBBox display="flex" alignItems="center">
          <div className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src={snyckers} padding="15px" width="150px" />
          </div>
        </CDBBox>
        {/* redes sociales */}
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <a href={twAPP} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="twitter" />
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <a href={igAPP} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="instagram" />
            </a>
          </CDBBtn>
        </CDBBox>
        {/* mail */}
        <CDBBox display="flex">
          <small className="ml-4 h6 mb-0 font-weight-bold">
            email: shop.snyckers@gmail.com
          </small>
        </CDBBox>
        {/*integrantes */}
        <CDBBox display="flex flex-wrap">
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={juaniGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={juaniGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={martinGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={crisTGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={walterGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={crisgGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={rodrigoGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-1">
            <a href={santiagoGH} target="_blank" rel="noreferrer noopener">
              <CDBIcon fab icon="github"></CDBIcon>
            </a>
          </CDBBtn>
        </CDBBox>

        {/*tecnologias */}
        <CDBBox display="flex" right-padding="1px">
          <img src={cssjshtml} className="image1" alt="not found" />

          <img src={nodejs} className="image2" alt="not found" />

          <img src={react} className="image2" alt="not found" />

          <img src={redux} className="image2" alt="not found" />

          <img src={firebase} className="image2" alt="not found" />
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
//

//   return user && user.rol.regular ? (
//     <CDBFooter className="shadow">
//       <CDBBox
//         display="flex"
//         justifyContent="between"
//         alignItems="center"
//         className="mx-auto py-4 flex-wrap"
//         style={{ width: "80%" }}
//       >
//         {/* logo */}
//         <CDBBox display="flex" alignItems="center">
//           <div className="d-flex align-items-center p-0 text-dark">
//             <img alt="logo" src={snyckers} padding="15px" width="150px" />
//           </div>
//         </CDBBox>

//         <CDBBox display="flex">
//           <CDBBtn flat color="dark" className="mx-3 p-2">
//             <a href={twAPP}>
//               <CDBIcon fab icon="twitter" />
//             </a>
//           </CDBBtn>

//           <CDBBtn flat color="dark" className="p-2">
//             <a href={igAPP}>
//               <CDBIcon fab icon="instagram" />
//             </a>
//           </CDBBtn>
//         </CDBBox>

//         <CDBBox display="flex">
//           <small className="ml-4 h6 mb-0 font-weight-bold">
//             email: shop.snyckers@gmail.com
//           </small>
//         </CDBBox>
//       </CDBBox>
//     </CDBFooter>
//   ) : (
//     <CDBFooter className="shadow">
//       <CDBBox
//         display="flex"
//         justifyContent="between"
//         alignItems="center"
//         className="mx-auto py-4 flex-wrap"
//         style={{ width: "80%" }}
//       >
//         {/* logo */}
//         <CDBBox display="flex" alignItems="center">
//           <div className="d-flex align-items-center p-0 text-dark">
//             <img alt="logo" src={snyckers} padding="15px" width="150px" />
//           </div>
//         </CDBBox>
//         {/* redes sociales */}
//         <CDBBox display="flex">
//           <CDBBtn flat color="dark" className="mx-3 p-2">
//             <a href={twAPP}>
//               <CDBIcon fab icon="twitter" />
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="p-2">
//             <a href={igAPP}>
//               <CDBIcon fab icon="instagram" />
//             </a>
//           </CDBBtn>
//         </CDBBox>
//         {/* mail */}
//         <CDBBox display="flex">
//           <small className="ml-4 h6 mb-0 font-weight-bold">
//             email: shop.snyckers@gmail.com
//           </small>
//         </CDBBox>
//         {/*integrantes */}
//         <CDBBox display="flex">
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={juaniGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={juaniGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={martinGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={crisTGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={walterGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={crisgGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={rodrigoGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//           <CDBBtn flat color="dark" className="mx-3 p-1">
//             <a href={santiagoGH}>
//               <CDBIcon fab icon="github"></CDBIcon>
//             </a>
//           </CDBBtn>
//         </CDBBox>

//         {/*tecnologias */}
//         <CDBBox display="flex" right-padding="1px">
//           <img src={cssjshtml} className="image1" alt="not found" />

//           <img src={nodejs} className="image2" alt="not found" />

//           <img src={react} className="image2" alt="not found" />

//           <img src={redux} className="image2" alt="not found" />

//           <img src={firebase} className="image2" alt="not found" />
//         </CDBBox>
//       </CDBBox>
//     </CDBFooter>
//   );
// };

export default Footer;
