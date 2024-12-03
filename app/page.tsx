"use client"
import Image from "next/image";
import backgroundImg from "../public/mosh.jpg"
import LogoNav from "../public/logoBgWhite.jpg"
import traktorImg from "../public/traktor.png";
import beansImg from "../public/beansImg.png";
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './globals.css'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMenu } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { InstagramIcon, Map, MessageCircle, YoutubeIcon } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";



type Checked = DropdownMenuCheckboxItemProps["checked"]


export default function Home() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const center: number[] = [41.3140616, 69.2952844];
  const [isOpen, setIsOpen] = React.useState(false);

  const [displaySize, setDisplaySize] = React.useState(0);

  // Update displaySize when the window is resized
  React.useEffect(() => {
    // Function to handle window resizing
    const handleResize = () => {
      setDisplaySize(window.innerWidth);
    };

    // Add event listener when component mounts
    window.addEventListener('resize', handleResize);

    // Call the handler initially to set the size
    handleResize();

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="">
      {/* main */}
      <div className="w-full">
        <div className="flex flex-col py-10 justify-between main-bg max-sm:py-4 max-sm:w-full">
          <div className="flex w-full items-center justify-between px-6 sm:px-12 lg:px-24 text-white">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image className="w-auto h-10 sm:h-12" src={LogoNav} alt="Logo" />
            </div>

            {/* Navigation Links for larger screens */}
            <div className="hidden sm:flex space-x-4 md:space-x-6">
              <div>Главное</div>
              <div>О Компании</div>
              <div>Каталог</div>
              <div>+998(95)-089-99-44</div>
              <div>albois200@mail.ru</div>
            </div>

            {/* Dropdown Menu for Smaller Screens */}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <IoMenu
                    color="white"
                    size={displaySize > 640 ? 40 : 36}
                    onClick={() => setIsOpen(!isOpen)} // Toggle menu open/close
                  />
                </DropdownMenuTrigger>
                {isOpen && (  // Show dropdown content if menu is open
                  <DropdownMenuContent className="w-56 bg-green-500">
                    <div className="flex flex-col space-y-4">
                      <div className="sm:hidden px-4 py-2">Главное</div>
                      <div className="sm:hidden px-4 py-2">О Компании</div>
                      <div className="sm:hidden px-4 py-2">Каталог</div>
                      <div className="sm:hidden px-4 py-2">+998(95)-089-99-44</div>
                      <div className="sm:hidden px-4 py-2">albois200@mail.ru</div>
                      <DropdownMenuCheckboxItem className="px-4 py-2">RUS</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem className="px-4 py-2">UZB</DropdownMenuCheckboxItem>
                    </div>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-20">
            {/* Left Text Section */}
            <div className="md:pl-10 text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-bold">Зелённые бобы</p>
              <span className="font-bold text-sm sm:text-base">
                Мы поставляем высококачественные и чистые бобовые продукты
              </span>
            </div>

            {/* Right Download Section */}
            <div className="mt-6 md:mt-0 flex items-center rounded bg-opacity-10">
              <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-white bg-opacity-40 sm:rounded-l-full">
                <div className="rounded-full bg-green-800 bg-opacity-90 p-2">
                  <IoMdDownload size={20} />
                </div>
                <div className="text-sm sm:text-base">Загрузите каталог</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* About */}
      <div className="flex flex-col px-6 sm:px-10 md:px-20 about-bg">
        {/* Title Section */}
        <div className="text-center text-3xl sm:text-4xl md:text-6xl mt-10 md:mt-20 w-full">
          <span>Uzbeans agricultural company</span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-20 gap-10 md:gap-20 pb-20">
          {/* Left Column */}
          <div className="w-full">
            <p className="text-2xl sm:text-4xl md:text-5xl">О компании Uzbeans</p>
            <p className="mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl">
              <span className="font-bold">Добро пожаловать в Uzbeans</span> — молодую и амбициозную компанию, основанную в 2024 году в городе Чуст, Наманганской области, Узбекистан. Мы специализируемся на переработке, очистке и <br />
              <span className="font-bold">упаковке высококачественных бобовых и агропродуктов</span>, создавая продукцию, которая объединяет натуральность и свежесть, ценимые на мировом рынке.
            </p>
            <div className="mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl">
              <p>
                <span className="font-bold">Наш секрет успеха</span> — это сочетание передовых технологий и глубокого понимания потребностей наших клиентов. Мы отбираем лучшие бобовые культуры со всех уголков Узбекистана, чтобы предложить вам продукцию, соответствующую самым строгим международным стандартам качества. Благодаря многоуровневому контролю на каждом этапе производства, Uzbeans гарантирует чистоту, безопасность и сохранение всех полезных свойств продукции.
              </p>
            </div>
            <div className="mt-6 sm:mt-10">
              <Image className="w-full" src={traktorImg} alt="Tractor" />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full">
            <div>
              <Image className="w-full" src={beansImg} alt="Beans" />
            </div>
            <div>
              <p className="mt-10 sm:mt-20 text-base sm:text-xl md:text-2xl">
                Мы гордимся тем, что создаём устойчивые и взаимовыгодные партнёрства с нашими клиентами и поставщиками. Наша цель — не просто поставлять продукты, а строить долгосрочные отношения, основанные на доверии и качестве.
                <br />
                Мы стремимся выходить на новые рынки и расширять географию наших поставок, чтобы сделать узбекскую продукцию известной и востребованной во всём мире.
              </p>
            </div>
            <div className="mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl font-bold ">
              Uzbeans — ваш надёжный партнёр в мире качественных и экологически чистых агропродуктов, которому можно доверять.
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="bg-white min-h-screen pb-20">
        <div className="relative min-h-screen">
          {/* Title */}
          <div>
            <p className="text-2xl sm:text-3xl md:text-4xl text-center w-full bg-green-900 text-white p-2">
              Наши продукты
            </p>
          </div>

          {/* Product Grid */}
          <div className="mt-32 sm:mt-40 px-6 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {/* Card 1: Takes 2 columns on larger screens */}
            <div className="lg:col-span-2 bg-slate-400 relative rounded-lg shadow-lg overflow-hidden h-56 sm:h-64">
              <Image className="w-full h-full object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start">
                <p className="text-white text-lg font-bold px-4 py-2">Зелёный мунг (маш)</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-600 relative rounded-lg shadow-lg overflow-hidden h-56 sm:h-64">
              <Image className="w-full h-full object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start">
                <p className="text-white text-lg font-bold px-4 py-2">Красный фасоль</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-400 relative rounded-lg shadow-lg overflow-hidden h-56 sm:h-64">
              <Image className="w-full h-full object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start">
                <p className="text-white text-lg font-bold px-4 py-2">Арахис</p>
              </div>
            </div>

            {/* Card 4: Takes 2 columns on larger screens */}
            <div className="lg:col-span-2 bg-slate-600 relative rounded-lg shadow-lg overflow-hidden h-56 sm:h-64">
              <Image className="w-full h-full object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent flex items-end justify-start">
                <p className="text-white text-lg font-bold px-4 py-2">Нут</p>
              </div>
            </div>
          </div>

        </div>

        {/* Button Section */}
        <div className="bg-white h-40 w-full flex justify-center items-center">
          <button className="bg-green-600 rounded-full text-lg sm:text-xl md:text-2xl p-3 px-5">
            Больше продуктов
          </button>
        </div>
      </div>


      {/* Navigation Map */}
      <div>
        <div className="h-screen">
          <div className="px-6 md:px-20 h-1/2 bg-white">
            <div>
              <p className=" text-3xl md:text-4xl text-green-900 font-bold text-center md:text-left">Наше местонахождение</p>
            </div>
            <div className="w-full">
              <div className="mt-10 bg-white">
                {/* map */}
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.6340048234164!2d69.207486715335!3d41.29949597927179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4af0b09c76d%3A0x4a5d7d8c4eb56185!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2sus!4v1675820676580!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 'none' }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="h-1/2 w-full bg-green-400"></div>

          <div className="w-full px-6 md:px-20 pt-10 contact-card">
            <h3 className="font-bold text-2xl md:text-3xl">Контакты</h3>
            <div className="text-lg md:text-xl">
              <div className="flex flex-col md:flex-row mt-5 justify-between items-center">
                <p className="flex gap-3 text-sm md:text-base">+998(95)-089-99-44 <BsTelephone size={22} /> <MessageCircle size={22} /></p>
                <p className="flex gap-3 mt-3 md:mt-0 text-sm md:text-base"><Map size={22} /> Узбекистан, Наманганская область <br /></p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="flex gap-3 text-sm md:text-base">albois2000@mail.ru <MessageCircle size={22} /></p>
                <p className="text-sm md:text-base">г. Чуст ул. Истиклол №21 <br /></p>
              </div>
            </div>
            <h4 className="font-bold mt-5 text-2xl md:text-3xl">Мы в социальных сетях</h4>
            <div className="flex justify-center md:justify-start py-5 gap-4 items-center">
              <InstagramIcon size={26} /> <FaTelegram size={26} /> <MessageCircle size={26} /> <YoutubeIcon size={26} />
              <p className="text-xl md:text-3xl">uzbeans</p>
            </div>
          </div>


          <div className="flex justify-between items-center px-6 md:px-20 bg-white py-4">
            <div className="w-32 md:w-40">
              <Image className="h-24 md:h-40" src={LogoNav} alt="logo" />
            </div>
            <div className="text-sm md:text-base text-black text-center md:text-left">
              Uzbeans agro company. Все права защищены.
            </div>
          </div>

        </div>
      </div>

      <div> </div>
      <div></div>
    </div >
  );
}
