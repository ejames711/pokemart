import { Transition } from "@headlessui/react";
import { useState } from 'react';
import Image from "next/image";
import ScrollTo from 'react-scroll-into-view'
import Cart from "../Cart";

function Nav({cartItems,cartOpen,setCartOpen}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full">
      <nav className="bg-dark_mart">
        <div className="px-4 max-w-8xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  width={50}
                  height={50}
                  src="/assets/svg/pokeball-white.svg"
                  alt="Pokeball"
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline justify-center ml-10 space-x-4">
                  <ScrollTo
                    selector="#home"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700"
                  >
                    Home
                  </ScrollTo>
                  <ScrollTo
                    selector="#about"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    About
                  </ScrollTo>

                  <ScrollTo
                    selector="#shop"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Shop
                  </ScrollTo>
                </div>
              </div>
            </div>
            <Cart cartItems={cartItems} cartOpen={cartOpen} setCartOpen={setCartOpen}/>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => cartOpen ? setIsOpen(isOpen) : setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ScrollTo
                  selector='#home'
                  className="block px-3 py-2 font-medium text-center text-white rounded-md hover:bg-gray-700"
                >
                  Home
                </ScrollTo>

                <ScrollTo
                  selector='#about'
                  className="block px-3 py-2 font-medium text-center text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  About
                </ScrollTo>

                <ScrollTo
                  selector='#shop'
                  className="block px-3 py-2 font-medium text-center text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Shop
                </ScrollTo>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;