"use strict";
exports.__esModule = true;
var product_item_1 = require("../product-item");
var react_1 = require("swiper/react");
var slidesPerView = 1.3;
var centeredSlides = true;
var spaceBetween = 30;
if (process.browser) {
    if (window.innerWidth > 768) {
        slidesPerView = 3;
        spaceBetween = 35;
        centeredSlides = false;
    }
    if (window.innerWidth > 1024) {
        slidesPerView = 4;
        spaceBetween = 65;
        centeredSlides = false;
    }
}
var ProductsCarousel = function (_a) {
    var products = _a.products;
    if (!products)
        return React.createElement("div", null, "Loading");
    return (React.createElement("div", { className: "products-carousel px-[30px] pt-[30px]" },
        React.createElement(react_1.Swiper, { spaceBetween: spaceBetween, loop: true, centeredSlides: centeredSlides, watchOverflow: true, slidesPerView: slidesPerView, className: "swiper-wrapper" }, products.map(function (item) { return (React.createElement(react_1.SwiperSlide, { key: item._id.$oid },
            React.createElement(product_item_1["default"], { key: item._id.$oid, product: item }))); }))));
};
exports["default"] = ProductsCarousel;
