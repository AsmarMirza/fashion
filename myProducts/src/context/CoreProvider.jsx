

import React, { createContext } from 'react'
import MainProvider from './MainProvider'
import WishListProvider from './WishListProvider'
const CoreContext=createContext()
function CoreProvider({children}) {
  return (
    <div>
     
        <MainProvider>
            <WishListProvider>
        {children}
        </WishListProvider>
        </MainProvider>
     
    </div>
  )
}

export default CoreProvider
