import React from 'react'

const Detail = () => {
  return (
    <div className='container'>
        <form>
            <label htmlFor='Id'>Order ID</label>
            <input type="Id" id="id"/>

            <label htmlFor='Name'>Customer Name</label>
            <input type="Name" id="name"/>

            <label htmlFor='Address'>Customer Address</label>
            <input type="Address" id="address"/>

            <label htmlFor='Type'>Order Type</label>
            <input type="Type" id="type"/>

            <label htmlFor='Phone'>Customer Phone Number</label>
            <input type="Phone" id="phone"/>

            <button class="btn">Add to the Schedule</button>


        </form>

        
    </div>
  )
}

export default Detail