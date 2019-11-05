import React, { createContext, useContext } from 'react'

export default function (fn) {
  const Context = createContext()

  function Provider ({ children }) {
    const value = fn(React)

    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    )
  }

  function useHook () {
    return useContext(Context)
  }

  return {
    Provider,
    useHook
  }
}
