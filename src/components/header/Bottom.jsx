import React from 'react'
import Navbar from './Navbar'
import maleDoctor from '../../assets/img/doctor-transparent.png'
import femaleDoctor from '../../assets/img/doctor_female.png'
import hospital from '../../assets/img/hospital.png'

import { Icon } from '@iconify/react'

function Bottom() {
  return (
    <div
      className="relative bg-gray-200 overflow-hidden"
      style={{ height: "calc(100vh - 48px)" }}
    >
      <Navbar />
      <div className="banner relative" style={{ height: "70%" }}>
        <img
          src={femaleDoctor}
          alt="Female Doctor"
          className="h-full object-contain z-0 md:h-full absolute bottom-0 lg:mr-80 hidden lg:inline-block"
        />
        <img
          src={maleDoctor}
          alt="main"
          className="h-full object-contain z-2 md:h-full absolute bottom-0 lg:mr-24"
        />
        <div className="absolute lg:top-20 bottom-0 left-0 lg:left-38 flex flex-col justify-center items-start text-gray-800 p-4 md:w-3/6 lg:w-2/5 bg-gray-100 md:bg-gray-300 md:bg-opacity-50 lg:bg-transparent py-10 md:bottom-1/4 lg:bottom-0">
          <div className="parallelogram-container mb-8 font-yekan">
            <div className="parallelogram skew-1 bg-gray-100 text-gray-600">
              خدمـاتــ
            </div>
            <div className="parallelogram skew-2 bg-green-600 text-gray-100">
              طبــی
            </div>
          </div>
          <span className="slang text-3xl lg:text-4xl font-bold mb-2 w-full text-gray-700 font-titrtge px-2">
            سلامت شما اولویت ماست
          </span>
          <span className="slang-desc text-base w-full lg:w-4/5  text-gray-500 px-2">
            با تیمی از متخصصین با تجربه و تجهیزات پیشرفته همواره در تلاشیم تا
            بهترین مراقبت های طبی را برای شما فراهم کنیم.
          </span>

          <img
            src={hospital}
            alt="hospital icon"
            className="w-2/5 mx-auto hidden md:inline-block"
          />
        </div>
      </div>

      <div className="link w-full relative -top-8 ">
        <div className="mx-auto w-fit flex gap-x-8 flex-wrap">
          <a
            href="tel:+93792400238"
            className="pop-link py-8 bg-gray-100 hover:bg-gray-300 border shadow-md rounded-lg flex gap-y-4 flex-col items-center w-48"
          >
            <Icon icon="streamline-emojis:calendar" width={40} />
            <span className="text-sm text-gray-500">وقت ملاقات</span>
          </a>
          <a
            href="tel:+93792400238"
            className="pop-link py-8 bg-gray-100 hover:bg-gray-300 border shadow-md rounded-lg flex gap-y-4 flex-col items-center w-48"
          >
            <Icon icon="streamline-emojis:ambulance" width={40} />
            <span className="text-sm text-gray-500">خدمات آمبولانس</span>
          </a>
          <a
            href="+93792400238"
            className="pop-link py-8 bg-gray-100 hover:bg-gray-300 border shadow-md rounded-lg flex gap-y-4 flex-col items-center w-48"
          >
            <Icon icon="streamline-emojis:telephone" width={40} />
            <span className="text-sm text-gray-500">تماس تلفنی</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bottom