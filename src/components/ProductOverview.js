import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

const ProductOverView = () => {
  const [selectedImage, setSelectedImage] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(id);
        const data = await getProductById(id);
        setProduct(data);
        console.log(data);
        // console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="antialiased">
      {/* Main Content */}
      <div className="py-6">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className="hover:underline hover:text-gray-600">
              Electronics
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>Headphones</span>
          </div>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Product Images */}
            <div className="md:flex-1 px-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center ${
                      selectedImage === num ? "block" : "hidden"
                    }`}
                  >
                    <span className="text-5xl">{num}</span>
                  </div>
                ))}
              </div>

              <div className="flex -mx-2 mb-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex-1 px-2">
                    <button
                      onClick={() => setSelectedImage(num)}
                      className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${
                        selectedImage === num
                          ? "ring-2 ring-indigo-300 ring-inset"
                          : ""
                      }`}
                    >
                      <span className="text-2xl">{num}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      25
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num}>{num}</option>
                    ))}
                  </select>
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverView;

// <div class="bg-white">
//   <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
//     <div class="fixed inset-0 bg-black bg-opacity-25"></div>
//   </div>

//   <main class="pt-10 sm:pt-16">
//     <nav aria-label="Breadcrumb">
//       <ol
//         role="list"
//         class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
//       >
//         <li>
//           <div class="flex items-center">
//             <a href="#" class="mr-2 text-sm font-medium text-gray-900">
//               Men
//             </a>
//             <svg
//               width="16"
//               height="20"
//               viewBox="0 0 16 20"
//               fill="currentColor"
//               aria-hidden="true"
//               class="h-5 w-4 text-gray-300"
//             >
//               <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//             </svg>
//           </div>
//         </li>
//         <li>
//           <div class="flex items-center">
//             <a href="#" class="mr-2 text-sm font-medium text-gray-900">
//               Clothing
//             </a>
//             <svg
//               width="16"
//               height="20"
//               viewBox="0 0 16 20"
//               fill="currentColor"
//               aria-hidden="true"
//               class="h-5 w-4 text-gray-300"
//             >
//               <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//             </svg>
//           </div>
//         </li>

//         <li class="text-sm">
//           <a
//             href="#"
//             aria-current="page"
//             class="font-medium text-gray-500 hover:text-gray-600"
//           >
//             Basic Tee 6-Pack
//           </a>
//         </li>
//       </ol>
//     </nav>

//     {/* <!-- Image gallery --> */}
//     <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
//       <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
//         <img
//           src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
//           alt="Two each of gray, white, and black shirts laying flat."
//           class="h-full w-full object-cover object-center"
//         />
//       </div>
//       <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
//         <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
//             alt="Model wearing plain black basic tee."
//             class="h-full w-full object-cover object-center"
//           />
//         </div>
//         <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
//           <img
//             src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
//             alt="Model wearing plain gray basic tee."
//             class="h-full w-full object-cover object-center"
//           />
//         </div>
//       </div>
//       <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
//         <img
//           src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
//           alt="Model wearing plain white basic tee."
//           class="h-full w-full object-cover object-center"
//         />
//       </div>
//     </div>

//     {/* <!-- Product info --> */}
//     <div class="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
//       <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//         <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
//           Basic Tee 6-Pack
//         </h1>
//       </div>
//       {/*
//       <!-- Options --> */}
//       <div class="mt-4 lg:row-span-3 lg:mt-0">
//         <h2 class="sr-only">Product information</h2>
//         <p class="text-3xl tracking-tight text-gray-900">$192</p>

//         {/* <!-- Reviews --> */}
//         <div class="mt-6">
//           <h3 class="sr-only">Reviews</h3>
//           <div class="flex items-center">
//             <div class="flex items-center">
//               {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
//               <svg
//                 class="text-gray-900 h-5 w-5 flex-shrink-0"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               <svg
//                 class="text-gray-900 h-5 w-5 flex-shrink-0"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               <svg
//                 class="text-gray-900 h-5 w-5 flex-shrink-0"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               <svg
//                 class="text-gray-900 h-5 w-5 flex-shrink-0"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//               <svg
//                 class="text-gray-200 h-5 w-5 flex-shrink-0"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </div>
//             <p class="sr-only">4 out of 5 stars</p>
//             <a
//               href="#"
//               class="ml-3 text-sm font-medium text-teal-600 hover:text-cyan-500"
//             >
//               117 reviews
//             </a>
//           </div>
//         </div>

//         <form class="mt-10">
//           {/* <!-- Colors --> */}
//           <div>
//             <h3 class="text-sm font-medium text-gray-900">Color</h3>

//             <fieldset class="mt-4">
//               <legend class="sr-only">Choose a color</legend>
//               <div class="flex items-center space-x-3">
//                 {/* <!--
//                   Active and Checked: "ring ring-offset-1"
//                   Not Active and Checked: "ring-2"
//                 --> */}
//                 <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
//                   <input
//                     type="radio"
//                     name="color-choice"
//                     value="White"
//                     class="sr-only"
//                     aria-labelledby="color-choice-0-label"
//                   />
//                   <span id="color-choice-0-label" class="sr-only">
//                     White
//                   </span>
//                   <span
//                     aria-hidden="true"
//                     class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"
//                   ></span>
//                 </label>
//                 {/* <!--
//                   Active and Checked: "ring ring-offset-1"
//                   Not Active and Checked: "ring-2"
//                 --> */}
//                 <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
//                   <input
//                     type="radio"
//                     name="color-choice"
//                     value="Gray"
//                     class="sr-only"
//                     aria-labelledby="color-choice-1-label"
//                   />
//                   <span id="color-choice-1-label" class="sr-only">
//                     Gray
//                   </span>
//                   <span
//                     aria-hidden="true"
//                     class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"
//                   ></span>
//                 </label>
//                 {/* <!--
//                   Active and Checked: "ring ring-offset-1"
//                   Not Active and Checked: "ring-2"
//                 --> */}
//                 <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
//                   <input
//                     type="radio"
//                     name="color-choice"
//                     value="Black"
//                     class="sr-only"
//                     aria-labelledby="color-choice-2-label"
//                   />
//                   <span id="color-choice-2-label" class="sr-only">
//                     Black
//                   </span>
//                   <span
//                     aria-hidden="true"
//                     class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"
//                   ></span>
//                 </label>
//               </div>
//             </fieldset>
//           </div>
//           {/*
//           <!-- Sizes --> */}
//           <div class="mt-10">
//             <div class="flex items-center justify-between">
//               <h3 class="text-sm font-medium text-gray-900">Size</h3>
//               <a
//                 href="#"
//                 class="text-sm font-medium text-yellow-600 hover:text-blue-500"
//               >
//                 Size guide
//               </a>
//             </div>

//             <fieldset class="mt-4">
//               <legend class="sr-only">Choose a size</legend>
//               <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-not-allowed bg-gray-50 text-gray-200">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="XXS"
//                     disabled
//                     class="sr-only"
//                     aria-labelledby="size-choice-0-label"
//                   />
//                   <span id="size-choice-0-label">XXS</span>
//                   <span
//                     aria-hidden="true"
//                     class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
//                   >
//                     <svg
//                       class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
//                       viewBox="0 0 100 100"
//                       preserveAspectRatio="none"
//                       stroke="currentColor"
//                     >
//                       <line
//                         x1="0"
//                         y1="100"
//                         x2="100"
//                         y2="0"
//                         vector-effect="non-scaling-stroke"
//                       />
//                     </svg>
//                   </span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="XS"
//                     class="sr-only"
//                     aria-labelledby="size-choice-1-label"
//                   />
//                   {/* <span id="size-choice-1-label">XS</span>
//                   <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="S"
//                     class="sr-only"
//                     aria-labelledby="size-choice-2-label"
//                   />
//                   <span id="size-choice-2-label">S</span>
//                   {/* <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="M"
//                     class="sr-only"
//                     aria-labelledby="size-choice-3-label"
//                   />
//                   <span id="size-choice-3-label">M</span>
//                   {/* <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="L"
//                     class="sr-only"
//                     aria-labelledby="size-choice-4-label"
//                   />
//                   <span id="size-choice-4-label">L</span>
//                   {/* <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="XL"
//                     class="sr-only"
//                     aria-labelledby="size-choice-5-label"
//                   />
//                   <span id="size-choice-5-label">XL</span>
//                   {/* <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="2XL"
//                     class="sr-only"
//                     aria-labelledby="size-choice-6-label"
//                   />
//                   <span id="size-choice-6-label">2XL</span>
//                   {/* <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//                 {/* <!-- Active: "ring-2 ring-indigo-500" --> */}
//                 <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 cursor-pointer bg-white text-gray-900 shadow-sm">
//                   <input
//                     type="radio"
//                     name="size-choice"
//                     value="3XL"
//                     class="sr-only"
//                     aria-labelledby="size-choice-7-label"
//                   />
//                   <span id="size-choice-7-label">3XL</span>
//                   {/* <!--
//                     Active: "border", Not Active: "border-2"
//                     Checked: "border-indigo-500", Not Checked: "border-transparent"
//                   --> */}
//                   <span
//                     class="pointer-events-none absolute -inset-px rounded-md"
//                     aria-hidden="true"
//                   ></span>
//                 </label>
//               </div>
//             </fieldset>
//           </div>

//           <button
//             type="submit"
//             class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
//           >
//             Add to bag
//           </button>
//         </form>
//       </div>

//       <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
//         {/* <!-- Description and details --> */}
//         <div>
//           <h3 class="sr-only">Description</h3>

//           <div class="space-y-6">
//             <p class="text-base text-gray-900">
//               The Basic Tee 6-Pack allows you to fully express your vibrant
//               personality with three grayscale options. Feeling adventurous?
//               Put on a heather gray tee. Want to be a trendsetter? Try our
//               exclusive colorway: &quot;Black&quot;. Need to add an extra
//               pop of color to your outfit? Our white tee has you covered.
//             </p>
//           </div>
//         </div>

//         <div class="mt-10">
//           <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

//           <div class="mt-4">
//             <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
//               <li class="text-gray-400">
//                 <span class="text-gray-600">Hand cut and sewn locally</span>
//               </li>
//               <li class="text-gray-400">
//                 <span class="text-gray-600">
//                   Dyed with our proprietary colors
//                 </span>
//               </li>
//               <li class="text-gray-400">
//                 <span class="text-gray-600">
//                   Pre-washed &amp; pre-shrunk
//                 </span>
//               </li>
//               <li class="text-gray-400">
//                 <span class="text-gray-600">Ultra-soft 100% cotton</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <section aria-labelledby="shipping-heading" class="mt-10">
//           <h2
//             id="shipping-heading"
//             class="text-sm font-medium text-gray-900"
//           >
//             Details
//           </h2>

//           <div class="mt-4 space-y-6">
//             <p class="text-sm text-gray-600">
//               The 6-Pack includes two black, two white, and two heather gray
//               Basic Tees. Sign up for our subscription service and be the
//               first to get new, exciting colors, like our upcoming
//               &quot;Charcoal Gray&quot; limited release.
//             </p>
//           </div>
//         </section>
//       </div>

//       <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//         {/* <!-- Reviews --> */}
//         <section
//           aria-labelledby="reviews-heading"
//           class="border-t border-gray-200 pt-10 lg:pt-16"
//         >
//           <h2 id="reviews-heading" class="sr-only">
//             Reviews
//           </h2>

//           <div class="space-y-10">
//             <div class="flex flex-col sm:flex-row">
//               <div class="order-2 mt-6 sm:ml-16 sm:mt-0">
//                 <h3 class="text-sm font-medium text-gray-900">
//                   This is the best white t-shirt out there
//                 </h3>
//                 <p class="sr-only">5 out of 5 stars</p>

//                 <div class="mt-3 space-y-6 text-sm text-gray-600">
//                   <p>
//                     I've searched my entire life for a t-shirt that reflects
//                     every color in the visible spectrum. Scientists said it
//                     couldn't be done, but when I look at this shirt, I see
//                     white light bouncing right back into my eyes.
//                     Incredible!
//                   </p>
//                 </div>
//               </div>

//               <div class="order-1 flex items-center sm:flex-col sm:items-start">
//                 <img
//                   src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt="Mark Edwards."
//                   class="h-12 w-12 rounded-full"
//                 />

//                 <div class="ml-4 sm:ml-0 sm:mt-4">
//                   <p class="text-sm font-medium text-gray-900">
//                     Mark Edwards
//                   </p>
//                   <div class="mt-2 flex items-center">
//                     {/* <!-- Active: "text-gray-900", Default: "text-gray-200" --> */}
//                     <svg
//                       class="text-gray-900 h-5 w-5 flex-shrink-0"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     <svg
//                       class="text-gray-900 h-5 w-5 flex-shrink-0"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     <svg
//                       class="text-gray-900 h-5 w-5 flex-shrink-0"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     <svg
//                       class="text-gray-900 h-5 w-5 flex-shrink-0"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     <svg
//                       class="text-gray-900 h-5 w-5 flex-shrink-0"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//     <section aria-labelledby="related-products-heading" class="bg-white">
//       <div class="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <h2
//           id="related-products-heading"
//           class="text-xl font-bold tracking-tight text-gray-900"
//         >
//           Customers also purchased
//         </h2>

//         <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           <div class="group relative">
//             <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//               <img
//                 src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
//                 alt="Front of men&#039;s Basic Tee in black."
//                 class="h-full w-full object-cover object-center lg:h-full lg:w-full"
//               />
//             </div>
//             <div class="mt-4 flex justify-between">
//               <div>
//                 <h3 class="text-sm text-gray-700">
//                   <a href="#">
//                     <span
//                       aria-hidden="true"
//                       class="absolute inset-0"
//                     ></span>
//                     Basic Tee
//                   </a>
//                 </h3>
//                 <p class="mt-1 text-sm text-gray-500">Black</p>
//               </div>
//               <p class="text-sm font-medium text-gray-900">$35</p>
//             </div>
//           </div>

//           {/* <!-- More products... --> */}
//         </div>
//       </div>
//     </section>
//   </main>
// </div>
