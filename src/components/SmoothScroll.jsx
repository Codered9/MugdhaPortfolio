import { ReactLenis } from 'lenis/react'

function SmoothScoll({children}) {
//   const lenis = useLenis(({ scroll }) => {
//     // called every scroll
//   })

  return <ReactLenis root>
      {children}
    </ReactLenis>
  
}

export default SmoothScoll