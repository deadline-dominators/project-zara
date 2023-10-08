import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import CategoryList from "./HomeLayout/CategorysList";
import ImageSlider from "./HomeLayout/ImageSlider";
import FlashSalesProducts from "./FlashSalesProducts";
import SpeakerBanner from '../../assests/frame600.png'
import ProductsShow from "./HomeLayout/ProductsShow";
import NewArrival from "./HomeLayout/NewArrival";
import frame1 from '../../assests/Frame 701.svg'
import frame2 from '../../assests/Frame 702.svg'
import frame3 from '../../assests/Frame 704.svg'
import PhoneSVG from '../../assests/Category-CellPhone.svg'
import ComputerSVG from '../../assests/Category-Computer.svg'
import SmartWatchSVG from '../../assests/Category-SmartWatch.svg'
import CameraSVG from '../../assests/Category-Camera.svg'
import HeadPhonesSVG from '../../assests/Category-Headphone.svg'
import GamingSVG from '../../assests/Category-Gamepad.svg'
 

export default function Home({data}) {
  return (
    <div className="HomeContainer">
      <section className="landingPage">
        <div className="Categorys">
          <CategoryList />
        </div>
        <div className="imgSlider">
          <ImageSlider />
        </div>
      </section>
      <section className="flashSales">
        <div className="frame">
          <div className="div-2">
            <div className="div-3">
              <div className="div-4">
                <div className="category-rectangle" />
                {/* <CategoryRectangle className="rectangle" /> */}
                <div className="text-wrapper-9">Today’s</div>
              </div>
              <div className="text-wrapper-10">Flash Sales</div>
            </div>
            {/* <FlashSaleTimer /> */}
            <div className="flash-sale-timer">
              <div className="frame">
                <div className="text-wrapper">Days</div>
                <div className="div">03</div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper-2">Hours</div>
                <div className="text-wrapper-3">23</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-4">Minutes</div>
                <div className="text-wrapper-5">19</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-6">Seconds</div>
                <div className="text-wrapper-7">56</div>
              </div>
              <div className="semiclone">
                <div className="ellipse" />
                <div className="ellipse" />
              </div>
              <div className="semiclone-2">
                <div className="ellipse" />
                <div className="ellipse" />
              </div>
              <div className="semiclone-3">
                <div className="ellipse" />
                <div className="ellipse" />
              </div>
            </div>
          </div>
          <div className="div-5">
            {/* <FillWithLeftArrow /> */}
            <div className="fill-with-left-arrow">
              {/* <IconsArrowLeft className="icons-arrow-left" />    */}
              <div className="icons-arrow-left-screen">
                <i class="bi bi-chevron-left vector"></i>
              </div>
            </div>
            {/* <FillWithRight /> */}
            <div className="fill-with-right">
              {/* <IconsArrowRight className="icons-arrow-right" /> */}
              <div className="icons-arrow-right-screen">
              <i class="bi bi-chevron-right vector"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="todayProducts">
          <Link to="/productdetails" >
            <FlashSalesProducts />
          </Link>
          <FlashSalesProducts />
          <FlashSalesProducts />
          <FlashSalesProducts />
          <FlashSalesProducts />
          <FlashSalesProducts />
        </div>
        <div className="view-all-products-container">
          <div className="shop-now"><Link to='*'>View All Products</Link></div>
        </div>
      </section>
      <section className="BrowseByCategory">
      <div className="frame-parent4">
        <div className="frame-parent5">
          <div className="frame-parent6">
            <div className="instance-parent">
              <div className="rectangle-wrapper">
                <div className="instance-child" />
              </div>
              <div className="div">Categories</div>
            </div>
            <div className="flash-sales">Browse By Category</div>
          </div>
        </div>
        <div className="category-phone-parent">
          <div className="category-phone">
            <div className="phones">Phones</div>
            <img
              className="category-cellphone-icon"
              alt=""
              src={PhoneSVG}
            />
          </div>
          <div className="category-phone">
            <div className="computers">Computers</div>
            <img
              className="category-computer-icon"
              alt=""
              src={ComputerSVG}
            />
          </div>
          <div className="category-phone">
            <div className="smartwatch">SmartWatch</div>
            <div className="category-cellphone-icon">
              <img className="vector-icon27" alt="" src={SmartWatchSVG} />
              <div className="line-parent">
                <div className="line-div" />
                <div className="frame-child3" />
                <div className="frame-child4" />
              </div>
            </div>
          </div>
          <div className="category-phone">
            <div className="camera">Camera</div>
            <img
              className="category-cellphone-icon"
              alt=""
              src={CameraSVG}
            />
          </div>
          <div className="category-phone">
            <div className="smartwatch">HeadPhones</div>
            <img
              className="category-cellphone-icon"
              alt=""
              src={HeadPhonesSVG}
            />
          </div>
          <div className="category-phone">
            <div className="gaming">Gaming</div>
            <img
              className="category-cellphone-icon"
              alt=""
              src={GamingSVG}
            />
          </div>
        </div>
      </div>
      </section>
      <section className="CategorysBoxs">
      <div className="frame-parent7">
        <div className="frame-parent8">
          <div className="frame-parent6">
            <div className="instance-parent">
              <div className="rectangle-wrapper">
                <div className="instance-child" />
              </div>
              <div className="div">This Month</div>
            </div>
            <div className="flash-sales">Best Selling Products</div>
          </div>
          <div className="view-all-products-container">
            <div className="shop-now">View All</div>
          </div>
        </div>
        <div className="category-phone-parent">
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="fill-heart-parent">
                <img
                  className="fill-heart-icon"
                  alt=""
                  src="/fill-heart6.svg"
                />
                <img className="fill-heart-icon" alt="" src="/fill-eye6.svg" />
              </div>
              <div className="g92-2-500x500-1-wrapper">
                <img
                  className="zah9d-5626-002-100-0000-light-icon"
                  alt=""
                  src="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
                />
              </div>
            </div>
            <div className="the-north-coat-parent">
              <div className="shop-now">The north coat</div>
              <div className="parent1">
                <div className="shop-now">$260</div>
                <div className="div6">$360</div>
              </div>
              <div className="five-star-parent">
                <div className="five-star">
                  <img className="vector-icon" alt="" src="/vector31.svg" />
                  <img className="vector-icon" alt="" src="/vector32.svg" />
                  <img className="vector-icon" alt="" src="/vector33.svg" />
                  <img className="vector-icon" alt="" src="/vector34.svg" />
                  <img className="vector-icon" alt="" src="/vector35.svg" />
                </div>
                <div className="div7">(65)</div>
              </div>
            </div>
          </div>
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="fill-heart-parent">
                <img
                  className="fill-heart-icon"
                  alt=""
                  src="/fill-heart7.svg"
                />
                <img className="fill-heart-icon" alt="" src="/fill-eye7.svg" />
              </div>
              <div className="g92-2-500x500-1-wrapper">
                <img
                  className="c2st-8746-001-082-0000-light-g-icon"
                  alt=""
                  src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                />
              </div>
            </div>
            <div className="the-north-coat-parent">
              <div className="shop-now">Gucci duffle bag</div>
              <div className="parent1">
                <div className="shop-now">$960</div>
                <div className="div6">$1160</div>
              </div>
              <div className="five-star-parent">
                <div className="five-star">
                  <img className="vector-icon" alt="" src="/vector36.svg" />
                  <img className="vector-icon" alt="" src="/vector37.svg" />
                  <img className="vector-icon" alt="" src="/vector38.svg" />
                  <img className="vector-icon" alt="" src="/vector39.svg" />
                  <img
                    className="star-half-filled-icon"
                    alt=""
                    src="/starhalffilled3.svg"
                  />
                </div>
                <div className="div7">(65)</div>
              </div>
            </div>
          </div>
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="fill-heart-parent">
                <img
                  className="fill-heart-icon"
                  alt=""
                  src="/fill-heart8.svg"
                />
                <img className="fill-heart-icon" alt="" src="/fill-eye8.svg" />
              </div>
              <div className="gammaxx-l240-argb-1-500x500-1-wrapper">
                <img
                  className="gammaxx-l240-argb-1-500x500-1-icon"
                  alt=""
                  src="/gammaxxl240argb1500x500-1@2x.png"
                />
              </div>
            </div>
            <div className="the-north-coat-parent">
              <div className="shop-now">RGB liquid CPU Cooler</div>
              <div className="parent1">
                <div className="shop-now">$160</div>
                <div className="div6">$170</div>
              </div>
              <div className="five-star-parent">
                <div className="five-star">
                  <img className="vector-icon" alt="" src="/vector40.svg" />
                  <img className="vector-icon" alt="" src="/vector41.svg" />
                  <img className="vector-icon" alt="" src="/vector42.svg" />
                  <img className="vector-icon" alt="" src="/vector43.svg" />
                  <img
                    className="star-half-filled-icon"
                    alt=""
                    src="/starhalffilled4.svg"
                  />
                </div>
                <div className="div7">(65)</div>
              </div>
            </div>
          </div>
          <div className="cart-with-flat-discount">
            <div className="discount-percent-parent">
              <div className="fill-heart-parent">
                <img
                  className="fill-heart-icon"
                  alt=""
                  src="/fill-heart9.svg"
                />
                <img className="fill-heart-icon" alt="" src="/fill-eye9.svg" />
              </div>
              <div className="gammaxx-l240-argb-1-500x500-1-wrapper">
                <img
                  className="sam-moghadam-khamseh-l-7mqshl-icon"
                  alt=""
                  src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
                />
              </div>
            </div>
            <div className="the-north-coat-parent">
              <div className="shop-now">Small BookSelf</div>
              <div className="wrapper">
                <div className="shop-now">$360</div>
              </div>
              <div className="five-star-parent">
                <div className="five-star">
                  <img className="vector-icon" alt="" src="/vector44.svg" />
                  <img className="vector-icon" alt="" src="/vector45.svg" />
                  <img className="vector-icon" alt="" src="/vector46.svg" />
                  <img className="vector-icon" alt="" src="/vector47.svg" />
                  <img className="vector-icon" alt="" src="/vector48.svg" />
                </div>
                <div className="div7">(65)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={SpeakerBanner} alt="" />
      </section>
      <section className="OurProduct">
        <ProductsShow />
      </section>
      <section className="new_arrival">
        <NewArrival />
      </section>
      <section className="bottom">
        <div><img src={frame1} alt="" /></div>
        <div><img src={frame2} alt="" /></div>
        <div><img src={frame3} alt="" /></div>
      </section>
    </div>
  );
}
