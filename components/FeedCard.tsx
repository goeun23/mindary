import { FeedItem } from "@/store/slices/feedSlice";
import { JSX } from "react";


export default function FeedCard({item}:{item:FeedItem}):JSX.Element {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="shrink-0">
            {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image" /> */}
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              7월 20일 금요일
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {item.title}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {/* {item.map((emotion) => (
               <span
                key={emotion}
                className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
              >
                #{emotion}
              </span>
            ))} */}
          </div>
        </div>
      </li>
        // <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        //   <div className="text-sm text-gray-500 mb-2">
        //     {new Date(item.createdAt).toLocaleString('ko-KR')}
        //   </div>
        //   <div className="text-gray-800 text-base mb-4 whitespace-pre-line">
        //     {item.content}
        //   </div>
        //   <div className="flex flex-wrap gap-2 mb-4">
        //     {item.emotions.map((emotion) => (
        //       <span
        //         key={emotion}
        //         className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700"
        //       >
        //         #{emotion}
        //       </span>
        //     ))}
        //   </div>
        //   <div className="bg-gray-100 rounded p-3 text-sm text-gray-600">
        //     {item.aiResponse}
        //   </div>
        // </div>
      )
}