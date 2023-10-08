import "./Footer.css";
import React from "react";
import CodeQR from "../../assests/codeQR.jpg";
import GooglePlay from "../../assests/googleplay.svg";
import AppStore from "../../assests/AppStore.svg";
import iconSend from "../../assests/icon-send.svg";
import FacebookIcon from '../../assests/Icon-Facebook.svg'
import TweeterIcon from '../../assests/Group.svg'
import InstagramIcon from '../../assests/Groupe.svg'
import LinkedinIcon from '../../assests/Icon-Linkedine.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="FooterContainer">
        <div className="section1">
          <li className="footerTitles">Exclusive</li>
          <li className="Subscribe">Subscribe</li>
          <li className="getOff">Get 10% off your first order</li>
          <div className="Email_Footer">
            <input placeholder="Enter your email" type="email" />
            <img className="sendIcon" src={iconSend} alt="" />
          </div>
        </div>
        <div className="section2">
          <li className="footerTitles2">Support</li>
          <div className="titleBody">
            <li>
              111 Bijoy sarani, Dhaka,
              <br /> DH 1515, Bangladesh.
            </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </div>
        </div>
        <div className="section3">
          <li className="footerTitles2">Account</li>
          <div className="titleBody">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </div>
        </div>
        <div className="section4">
          <li className="footerTitles2">Quick Link</li>
          <div className="titleBody">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </div>
        </div>
        <div className="section5">
          <li className="footerTitles2">Download App</li>
          <li className="aaa">Save $3 with App New User Only</li>
          <div className="playstore">
            <img src={CodeQR} style={{ width: "77px" }} />
            <div className="socialIcons">
              <img src={GooglePlay} width={"77px"} />
              <img className="appstore" src={AppStore} width={"77px"} />
            </div>
          </div>
          <div className="social-media">
           <img src={FacebookIcon} alt="" />
           <img src={TweeterIcon} alt="" />
           <img src={InstagramIcon} alt="" />
           <img src={LinkedinIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy</p>
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
    //   <div
    //   style={{
    //     width: '100%',
    //     height: '330px',
    //     paddingTop: '80px',
    //     paddingBottom: '24px',
    //     background: 'black',
    //     flexDirection: 'column',
    //     justifyContent: 'flex-end',
    //     alignItems: 'center',
    //     gap: '60px',
    //     display: 'inline-flex',
    //     fontFamily: 'Poppins, sans-serif',
    //   }}
    // >
    //   <div
    //     style={{
    //       justifyContent: 'center',
    //       alignItems: 'flex-start',
    //       gap: '230px',
    //       display: 'inline-flex',
    //     }}
    //   >
    //     <div
    //       style={{
    //         flexDirection: 'column',
    //         justifyContent: 'flex-start',
    //         alignItems: 'flex-start',
    //         gap: '16px',
    //         display: 'inline-flex',
    //       }}
    //     >
    //       <div
    //         style={{
    //           flexDirection: 'column',
    //           justifyContent: 'flex-start',
    //           alignItems: 'flex-start',
    //           gap: '24px',
    //           display: 'flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             flexDirection: 'column',
    //             justifyContent: 'flex-start',
    //             alignItems: 'flex-start',
    //             gap: '24px',
    //             display: 'flex',
    //           }}
    //         >
    //           <div
    //             style={{
    //               width: '118px',
    //               height: '24px',
    //               justifyContent: 'center',
    //               alignItems: 'center',
    //               display: 'inline-flex',
    //             }}
    //           >
    //             <div
    //               style={{
    //                 color: '#fafafa',
    //                 fontSize: '24px',
    //                 fontWeight: 700,
    //                 lineHeight: '24px',
    //                 letterSpacing: '0.72px',
    //                 wordWrap: 'break-word',
    //               }}
    //             >
    //               Exclusive
    //             </div>
    //           </div>
    //           <div
    //             style={{
    //               color: '#fafafa',
    //               fontSize: '20px',
    //               fontFamily: 'Poppins',
    //               fontWeight: 500,
    //               lineHeight: '28px',
    //               wordWrap: 'break-word',
    //             }}
    //           >
    //             Subscribe
    //           </div>
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Get 10% off your first order
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           width: '217px',
    //           paddingTop: '12px',
    //           paddingBottom: '12px',
    //           paddingLeft: '16px',
    //           borderRadius: '4px',
    //           border: '1.5px #fafafa solid',
    //           justifyContent: 'flex-start',
    //           alignItems: 'center',
    //           gap: '32px',
    //           display: 'inline-flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             opacity: '0.4',
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Enter your email
    //         </div>
    //         <div style={{ width: '24px', height: '24px', position: 'relative' }}>
    //           <div
    //             style={{
    //               width: '20px',
    //               height: '18px',
    //               left: '2px',
    //               top: '3px',
    //               position: 'absolute',
    //               border: '1.5px #fafafa solid',
    //             }}
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         flexDirection: 'column',
    //         justifyContent: 'flex-start',
    //         alignItems: 'flex-start',
    //         gap: '24px',
    //         display: 'inline-flex',
    //       }}
    //     >
    //       <div
    //         style={{
    //           color: '#fafafa',
    //           fontSize: '20px',
    //           fontFamily: 'Poppins',
    //           fontWeight: 500,
    //           lineHeight: '28px',
    //           wordWrap: 'break-word',
    //         }}
    //       >
    //         Support
    //       </div>
    //       <div
    //         style={{
    //           flexDirection: 'column',
    //           justifyContent: 'flex-start',
    //           alignItems: 'flex-start',
    //           gap: '16px',
    //           display: 'flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             width: '175px',
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           exclusive@gmail.com
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           +88015-88888-9999
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         flexDirection: 'column',
    //         justifyContent: 'flex-start',
    //         alignItems: 'flex-start',
    //         gap: '24px',
    //         display: 'inline-flex',
    //       }}
    //     >
    //       <div
    //         style={{
    //           color: '#fafafa',
    //           fontSize: '20px',
    //           fontFamily: 'Poppins',
    //           fontWeight: 500,
    //           lineHeight: '28px',
    //           wordWrap: 'break-word',
    //         }}
    //       >
    //         Account
    //       </div>
    //       <div
    //         style={{
    //           flexDirection: 'column',
    //           justifyContent: 'flex-start',
    //           alignItems: 'flex-start',
    //           gap: '16px',
    //           display: 'flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           My Account
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Login / Register
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Cart
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Wishlist
    //         </div>
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Shop
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       style={{
    //         flexDirection: 'column',
    //         justifyContent: 'flex-start',
    //         alignItems: 'flex-start',
    //         gap: '24px',
    //         display: 'inline-flex',
    //       }}
    //     >
    //       <div
    //         style={{
    //           flexDirection: 'column',
    //           justifyContent: 'flex-start',
    //           alignItems: 'flex-start',
    //           gap: '24px',
    //           display: 'flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             color: '#fafafa',
    //             fontSize: '20px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 500,
    //             lineHeight: '28px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Download App
    //         </div>
    //         <div
    //           style={{
    //             flexDirection: 'column',
    //             justifyContent: 'flex-start',
    //             alignItems: 'flex-start',
    //             gap: '8px',
    //             display: 'flex',
    //           }}
    //         >
    //           <div
    //             style={{
    //               opacity: '0.7',
    //               color: '#fafafa',
    //               fontSize: '12px',
    //               fontFamily: 'Poppins',
    //               fontWeight: 500,
    //               lineHeight: '18px',
    //               wordWrap: 'break-word',
    //             }}
    //           >
    //             Save $3 with App New User Only
    //           </div>
    //           <div
    //             style={{
    //               justifyContent: 'flex-start',
    //               alignItems: 'center',
    //               gap: '8px',
    //               display: 'inline-flex',
    //             }}
    //           >
    //             <div
    //               style={{
    //                 width: '80px',
    //                 height: '80px',
    //                 padding: '2px',
    //                 background: 'black',
    //                 justifyContent: 'center',
    //                 alignItems: 'center',
    //                 display: 'flex',
    //               }}
    //             >
    //               <img
    //                 style={{ width: '76px', height: '76px', border: '2.5px white solid' }}
    //                 src="https://via.placeholder.com/76x76"
    //                 alt="App Icon"
    //               />
    //             </div>
    //             <div
    //               style={{
    //                 flexDirection: 'column',
    //                 justifyContent: 'flex-start',
    //                 alignItems: 'flex-start',
    //                 gap: '4px',
    //                 display: 'inline-flex',
    //               }}
    //             >
    //               <div
    //                 style={{
    //                   width: '110px',
    //                   height: '40px',
    //                   position: 'relative',
    //                   background: '#030406',
    //                 }}
    //               >
    //                 <img
    //                   style={{
    //                     width: '104px',
    //                     height: '30px',
    //                     left: '3px',
    //                     top: '5px',
    //                     position: 'absolute',
    //                     borderRadius: '4px',
    //                     border: '0.6px #fafafa solid',
    //                   }}
    //                   src="https://via.placeholder.com/104x30"
    //                   alt="Download on the App Store"
    //                 />
    //                 <div
    //                   style={{
    //                     width: '0.56px',
    //                     height: '0.95px',
    //                     left: '99.39px',
    //                     top: '22.24px',
    //                     position: 'absolute',
    //                     border: '1px white solid',
    //                   }}
    //                 ></div>
    //                 <div
    //                   style={{
    //                     width: '1.26px',
    //                     height: '3.92px',
    //                     left: '98.19px',
    //                     top: '21.96px',
    //                     position: 'absolute',
    //                     border: '1px white solid',
    //                   }}
    //                 ></div>
    //                 <div
    //                   style={{
    //                     width: '0.31px',
    //                     height: '0.06px',
    //                     left: '94.91px',
    //                     top: '22.24px',
    //                     position: 'absolute',
    //                     border: '1px white solid',
    //                   }}
    //                 ></div>
    //                 <div
    //                   style={{
    //                     width: '1.16px',
    //                     height: '2.21px',
    //                     left: '98.39px',
    //                     top: '22.71px',
    //                     position: 'absolute',
    //                     border: '1px white solid',
    //                   }}
    //                 ></div>
    //               </div>
    //               <div
    //                 style={{
    //                   width: '110px',
    //                   height: '40px',
    //                   padding: '3px',
    //                   background: 'black',
    //                   justifyContent: 'center',
    //                   alignItems: 'center',
    //                   display: 'inline-flex',
    //                 }}
    //               >
    //                 <img
    //                   style={{
    //                     width: '104px',
    //                     height: '34px',
    //                     borderRadius: '4px',
    //                     border: '0.6px white solid',
    //                   }}
    //                   src="https://via.placeholder.com/104x34"
    //                   alt="Get it on Google Play"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div
    //         style={{
    //           justifyContent: 'flex-start',
    //           alignItems: 'flex-start',
    //           gap: '24px',
    //           display: 'inline-flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             width: '24px',
    //             height: '24px',
    //             position: 'relative',
    //           }}
    //         >
    //           <div
    //             style={{
    //               width: '10.5px',
    //               height: '18px',
    //               left: '7px',
    //               top: '3px',
    //               position: 'absolute',
    //               background: 'white',
    //             }}
    //           ></div>
    //         </div>
    //         <div
    //           style={{
    //             width: '24px',
    //             height: '24px',
    //             paddingRight: '1.94px',
    //             justifyContent: 'flex-start',
    //             alignItems: 'center',
    //             display: 'flex',
    //           }}
    //         >
    //           <div
    //             style={{
    //               width: '27.06px',
    //               height: '24px',
    //               position: 'relative',
    //             }}
    //           >
    //             <div
    //               style={{
    //                 width: '24px',
    //                 height: '24px',
    //                 left: '0px',
    //                 top: '0px',
    //                 position: 'absolute',
    //               }}
    //             ></div>
    //             <div
    //               style={{
    //                 width: '20.06px',
    //                 height: '16.65px',
    //                 left: '7px',
    //                 top: '4px',
    //                 position: 'absolute',
    //                 background: 'white',
    //                 border: '0.2px black solid',
    //               }}
    //             ></div>
    //           </div>
    //         </div>
    //         <div
    //           style={{
    //             width: '24px',
    //             height: '24px',
    //             padding: '3px',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             display: 'flex',
    //           }}
    //         >
    //           <div
    //             style={{
    //               width: '18px',
    //               height: '18px',
    //               position: 'relative',
    //             }}
    //           >
    //             <div
    //               style={{
    //                 width: '18px',
    //                 height: '18px',
    //                 left: '0px',
    //                 top: '0px',
    //                 position: 'absolute',
    //                 border: '1.5px white solid',
    //               }}
    //             ></div>
    //             <div
    //               style={{
    //                 width: '8px',
    //                 height: '8px',
    //                 left: '5px',
    //                 top: '5px',
    //                 position: 'absolute',
    //                 border: '1.5px white solid',
    //               }}
    //             ></div>
    //             <div
    //               style={{
    //                 width: '2px',
    //                 height: '2px',
    //                 left: '13.5px',
    //                 top: '2.5px',
    //                 position: 'absolute',
    //                 background: 'white',
    //               }}
    //             ></div>
    //           </div>
    //         </div>
    //         <div
    //           style={{
    //             width: '24px',
    //             height: '24px',
    //             position: 'relative',
    //           }}
    //         >
    //           <div
    //             style={{
    //               width: '17.5px',
    //               height: '17.5px',
    //               left: '3px',
    //               top: '3px',
    //               position: 'absolute',
    //               background: 'white',
    //             }}
    //           ></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       opacity: 0.4,
    //       flexDirection: 'column',
    //       justifyContent: 'flex-start',
    //       alignItems: 'center',
    //       gap: '16px',
    //       display: 'inline-flex',
    //     }}
    //   >
    //     <div
    //       style={{
    //         width: '1440px',
    //         height: '0px',
    //         opacity: 0.4,
    //         border: '1px white solid',
    //       }}
    //     ></div>
    //     <div
    //       style={{
    //         opacity: 0.6,
    //         justifyContent: 'flex-start',
    //         alignItems: 'center',
    //         gap: '12px',
    //         display: 'inline-flex',
    //       }}
    //     >
    //       <div
    //         style={{
    //           justifyContent: 'flex-start',
    //           alignItems: 'center',
    //           gap: '6px',
    //           display: 'flex',
    //         }}
    //       >
    //         <div
    //           style={{
    //             width: '20px',
    //             height: '20px',
    //             padding: '1.67px',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             display: 'flex',
    //           }}
    //         >
    //           <div
    //             style={{
    //               width: '16.67px',
    //               height: '16.67px',
    //               position: 'relative',
    //             }}
    //           >
    //             <div
    //               style={{
    //                 width: '16.67px',
    //                 height: '16.67px',
    //                 left: '0px',
    //                 top: '0px',
    //                 position: 'absolute',
    //                 border: '1.5px white solid',
    //               }}
    //             ></div>
    //             <div
    //               style={{
    //                 width: '5.83px',
    //                 height: '6.67px',
    //                 left: '5px',
    //                 top: '5px',
    //                 position: 'absolute',
    //                 border: '1.5px white solid',
    //               }}
    //             ></div>
    //           </div>
    //         </div>
    //         <div
    //           style={{
    //             color: 'white',
    //             fontSize: '16px',
    //             fontFamily: 'Poppins',
    //             fontWeight: 400,
    //             lineHeight: '24px',
    //             wordWrap: 'break-word',
    //           }}
    //         >
    //           Copyright Rimel 2022. All right reserved
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Footer;
