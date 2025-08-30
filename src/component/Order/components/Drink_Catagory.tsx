import { Button } from '@/components/ui/button'
import React from 'react'

const Drinkcatagory = () => {
  return (
    <div className="w-full flex flex-row justify-around flex-end">
    <div>
      <Button>Soft</Button>
    </div>

    <div>
      <Button>Hard</Button>
    </div>
    <div>
      {/* <Button></Button> */}
    </div>
  </div>
  )
}

export default Drinkcatagory