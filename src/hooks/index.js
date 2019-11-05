import React from 'react'
import tags from './modules/tags'

export const tagsHook = tags

let hooks = [
  tagsHook
]

const Provider = (function ProviderGenerator () {
  const [ currentHook ] = hooks.splice(0, 1)

  if (hooks[0]) {
    return () => (
      <currentHook.Provider>
        {ProviderGenerator()}
      </currentHook.Provider>
    )
  } else {
    return currentHook.Provider
  }
})()


export default Provider
