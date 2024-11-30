"use client"
import Image from "next/image";
import backgroundImg from "../public/mosh.jpg"
import LogoNav from "../public/logoBgWhite.jpg"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

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
  return (
    <div className="">
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
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  RUS
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowPanel}
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
            </div>

            <div className="w-full">jh</div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div >
  );
}
