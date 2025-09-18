import React from 'react'

const OrderedShopName = () => {
  return (
    <div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="p-4 border rounded-lg shadow">
    <h2 className="text-lg font-semibold">Shop 1</h2>
  </div>

  <div className="p-4 border rounded-lg shadow">
    <h2 className="text-lg font-semibold">Shop 2</h2>
  </div>

  <div className="p-4 border rounded-lg shadow">
    <h2 className="text-lg font-semibold">Shop 3</h2>
  </div>

  <div className="p-4 border rounded-lg shadow">
    <h2 className="text-lg font-semibold">Shop 4</h2>
  </div>
</div>

    </div>
  )
}

export default OrderedShopName