import React from 'react'
import styles from '../style'
const button = () => (
    <div className={`${styles.flexCenter} w-[130px] h-[50px] rounded-[5px] bg-white p-[2px] cursor-pointer` }>
      <div className={`${styles.flexCenter} flex-col bg-white h-[100%] rounded-[5px] justify-center`}>
        <p className='font-poppins font-thin text-[15px] leading-[23px] text-black'>
          Our Service
        </p>
        </div>
    </div>
)
export default button