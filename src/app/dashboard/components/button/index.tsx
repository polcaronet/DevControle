"use client"

import { useRouter } from 'next/navigation'
import { FiRefreshCw } from 'react-icons/fi'

export function ButtonRefresh(){
 const router = useRouter();
 
  return(
    <button 
       onClick={() => router.refresh()}
       className="bg-gray-900 px-4 py-1 rounded"
    >
     <FiRefreshCw size={24} color="#FFF"/>
    </button>
  )
}