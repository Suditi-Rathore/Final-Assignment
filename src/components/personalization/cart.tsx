"use client"
import {useState} from 'react'

const Cart = () => {
    const [count, setCount] = useState<number>(1);
  return (
    <div className="md:w-[50%] p-4 flex flex-col gap-3 md:pr-32 md:pl-20">
        <p className='font-semibold text-2xl'>Personalize Daddy Bracelet, Family Bracelet </p>
        <p className='text-green-700 text-sm'>
          <i className="bi bi-lightning-charge-fill"></i>Only 6 left in stock
        </p>
        <p className='font-bold text-2xl'>
          $399.00<span className='text-gray-500 line-through pl-2'>499.00</span></p>
        <p className='font-semibold text-blue-800 text-sm'>
          <i className="bi bi-eye-fill pr-2"></i>These are 30 people viewing this
          product right now
        </p>

        <label className='font-bold text-sm'>Beads Number:</label>
        

        <select name="number" id="number" className='p-2 rounded-full text-sm'>
          <option value="1">1</option>
          <option value="2">2(1.000)</option>
          <option value="3">3(2.000)</option>
          <option value="4">4(3.000)</option>
          <option value="5">52(5.000)</option>
        </select>
        

        <label className='font-bold text-sm'>Bracelet color & Wrist size :</label>
        

        <select name="size" id="size" className='p-2 rounded-full text-sm '>
          <option value="1">Silver 6-6.5</option>
          <option value="2">Silver 7-7.5</option>
          <option value="3">Silver 8-8.5</option>
          <option value="4">Gold 7-8.5</option>
          <option value="5">Gold 8-7.5</option>
        </select>

        <div className='flex flex-col gap-3 pt-2 text-sm'>
          <p className='font-bold'>Add your personalization</p>

          <ul className='space-x-2 space-y-1'>
            <label>Engraving Information:</label>
            <li>
              <i className="bi bi-heart-fill text-red-600 pr-1"></i>I can engrave 8 characters on
              each bead.
            </li>
            <li>
              <i className="bi bi-heart-fill text-red-600 pr-1"></i>Space is a character too.
            </li>
            <li>
              <i className="bi bi-heart-fill text-red-600 pr-1"></i>I can engrave names, initials,
              dates, roman numerals.
            </li>
            <li>
              <i className="bi bi-heart-fill text-red-600 pr-1"></i>Personalized as typed out.
            </li>
          </ul>

          <input type="text" placeholder="Your Personalization" className='px-2 py-6 border-2 border-gray-300 rounded-lg'/>
          <div className='flex md:gap-2'>
            <div className='flex gap-7 border-2 border-gray-300 justify-evenly text-xl px-4 py-1 rounded-full'>
              <button
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                -
              </button>
              <p>{count}</p>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button className='py-1 w-full px-6 bg-red-600 text-white md:text-lg font-bold rounded-full'>ADD TO CART</button>
          </div>
          <div className='p-8 border-2 border-gray-300'>
            <img src="/images/payment.png" alt="payment options" />
          </div>
        </div>
    </div>
  )
}

export default Cart
