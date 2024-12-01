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

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMenu } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";



type Checked = DropdownMenuCheckboxItemProps["checked"]


export default function Home() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const center: number[] = [41.3140616, 69.2952844];



  return (
    <div className="">
      {/* main */}
      <div className="w-full">
        <div className="flex flex-col py-10 justify-between main-bg ">
          <div className="flex w-full items-center justify-between px-24 text-white">
            <div><Image className="w-full" height={56} src={LogoNav} alt="" /></div>
            <div className="">Главное</div>
            <div>О Компании</div>
            <div>Каталог</div>
            <div>+998(95)-089-99-44</div>
            <div>albois200@mail.ru</div>
            <div><DropdownMenu>
              <DropdownMenuTrigger asChild>
                <IoMenu color="white" size={40} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem
                // checked={showStatusBar}
                // onCheckedChange={setShowStatusBar}
                >
                  RUS
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={showStatusBar}
                // onCheckedChange={setShowPanel}
                >
                  UZB
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu></div>
          </div>
          <div className="flex justify-between">
            <div className="pl-20"><p className="text-3xl font-bold">Зелённые бобы</p> <span className="font-bold">Мы поставляем высококачественные и чистые бобовые продукты</span></div>
            <div className=" rounded bg-opacity-10">
              <div className="flex items-center gap-5 w-full px-2 py-2 rounded-l-full bg-white bg-opacity-40">
                <div className="rounded-full bg-green-800 bg-opacity-90 p-2"><IoMdDownload size={20} /></div>
                <div>Загрузите каталог</div>
              </div>
              <div></div>
            </div>

          </div>
          {/* <Image className="w-full" src={backgroundImg} alt="background" /> */}

        </div>

      </div>
      {/* About */}
      <div className="flex ">
        <div className="about-bg px-20">
          <div className="text-center text-6xl mt-20 w-full">
            <span>Uzbeans agricultural company</span>
          </div>
          <div className="flex mt-20 gap-20">

            <div className="w-full">
              <p className="text-5xl">О компании Uzbeans</p>
              <p className="mt-10 text-2xl">
                <span className="font-bold">Добро пожаловать в Uzbeans</span> — молодую и амбициозную компанию, основанную в 2024 году в городе Чуст, Наманганской области, Узбекистан. Мы специализируемся на переработке, очистке и <br></br><span className="font-bold">упаковке высококачественных бобовых и агропродуктов</span>, создавая продукцию, которая объединяет натуральность и свежесть, ценимые на мировом рынке.
              </p>
              <div className="mt-10 text-2xl">
                <p>
                  <span className="font-bold">Наш секрет успеха</span> — это сочетание передовых технологий и глубокого понимания потребностей наших клиентов. Мы отбираем лучшие бобовые культуры со всех уголков Узбекистана, чтобы предложить вам продукцию, соответствующую самым строгим международным стандартам качества. Благодаря многоуровневому контролю на каждом этапе производства, Uzbeans гарантирует чистоту, безопасность и сохранение всех полезных свойств продукции.
                </p>
              </div>
              <div className="mt-10">
                <Image className="w-full" src={traktorImg} alt="traktor" />
              </div>
            </div>

            <div className="w-full">
              <div>
                <Image className="w-full" src={beansImg} alt="traktor" />
              </div>
              <div>
                <p className="mt-32 text-2xl">Мы гордимся тем, что создаём устойчивые и взаимовыгодные партнёрства с нашими клиентами и поставщиками. Наша цель — не просто поставлять продукты, а строить долгосрочные отношения, основанные на доверии и качестве.

                  Мы стремимся выходить на новые рынки и расширять географию наших поставок, чтобы сделать узбекскую продукцию известной и востребованной во всём мире.</p>
              </div>
              <div className="w-full">
                <p className="mt-20 text-2xl font-bold">Uzbeans — ваш надёжный партнёр в мире качественных и экологически чистых агропродуктов, которому можно доверять.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      <div className="bg-white h-screen ">
        <div className=" h-screen relative">
          <div  >
            <p className="text-4xl text-center w-full mt-20 absolute bg-green-900  p-2">Наши продукты</p>
          </div>
          <div className="mt-40 px-20 grid grid-cols-3 gap-4 absolute w-full">
            {/* 1-karta: ikkita ustunni egallaydi */}
            <div className="col-span-2 bg-slate-400 relative rounded-lg shadow-lg overflow-hidden">
              <Image className="w-full h-56 object-cover" src={beansImg} alt="beans" />
              {/* Pastki matn va gradient */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent">
                <p className="text-white text-lg font-bold px-4 pt-6">Зелёный мунг (маш)</p>
              </div>
            </div>

            {/* 2-karta */}
            <div className="bg-slate-600 relative rounded-lg shadow-lg overflow-hidden">
              <Image className="w-full h-56 object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent">
                <p className="text-white text-lg font-bold px-4 pt-6">Красный фасоль
                </p>
              </div>
            </div>

            {/* 3-karta */}
            <div className="bg-slate-400 relative rounded-lg shadow-lg overflow-hidden">
              <Image className="w-full h-56 object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent">
                <p className="text-white text-lg font-bold px-4 pt-6">Арахис</p>
              </div>
            </div>

            {/* 4-karta: ikkita ustunni egallaydi */}
            <div className="col-span-2 bg-slate-600 relative rounded-lg shadow-lg overflow-hidden">
              <Image className="w-full h-56 object-cover" src={beansImg} alt="beans" />
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-900 via-transparent to-transparent">
                <p className="text-white text-lg font-bold px-4 pt-6">Нут</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-40 w-full">
          <div className="flex mt-10 absolute w-full justify-center px-20">
            <button className="bg-green-600 rounded-full text-2xl p-3 px-5">Больше продуктов</button>
          </div>
        </div>

      </div>
      {/* Navigation Map */}
      <div>
        <div className="h-screen  ">
          <div className=" px-20 h-1/2 bg-white">
            <div className=" ">
              <p className="  mt-40 text-4xl text-green-900 font-bold">Наше местонахождения</p>
            </div>
            <div className="w-full ">
              <div className="mt-10 bg-white"></div>
              <MapContainer center={center} zoom={13} style={{ width: '100%', height: '500px' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                  <Popup>
                    A marker at this location.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
          <div className="h-1/2 bg-green-500"></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div >
  );
}
