import React from 'react'

const Footer = () => {
  return (
    <div className="w-full hidden lg:block bg-red-700 text-white">
      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-lg font-bold mb-4">JOIN THE WHENEVER ATELIER CLUB</h2>
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="email"
            className="p-2 rounded border border-gray-300 text-black"
          />
          <button className="bg-black text-white px-4 py-2 rounded">
            subscribe →
          </button>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-4 gap-4 px-10 py-10 bg-white text-black">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-2">THÔNG TIN</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-2">THÔNG TIN</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/products/shop-all" className="hover:underline">
                Sản phẩm
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-2">THÔNG TIN</h3>
          <ul>
            <li>
              <a href="/products/tees" className="hover:underline">
                tees
              </a>
            </li>
            <li>
              <a href="/products/sweatshirts" className="hover:underline">
                hoodie/sweater
              </a>
            </li>
            <li>
              <a href="/products/outerwear" className="hover:underline">
                jacket
              </a>
            </li>
            <li>
              <a href="/products/bottoms" className="hover:underline">
                bottoms
              </a>
            </li>
            <li>
              <a href="/products/accessories" className="hover:underline">
                accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-2">THÔNG TIN</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer