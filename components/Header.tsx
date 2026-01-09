"use client"

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="w-full bg-white rounded-lg text-center">
        <a href="#">
          <img className="" src="/empty.jpg" alt="product image" />
        </a>
        <div className="px-5 pb-5 ">
          <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              33개의 일기를 작성했어요.
            </h5>
          </a>

          <div className="flex items-center justify-center p-5">
            <a className="text-white bg-green-700 hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-green-300 text-sm rounded-lg text-sm px-5 py-2.5 text-center">
              오늘의 일기 쓰기
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
