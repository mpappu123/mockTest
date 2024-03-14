import React from 'react'
function Options({questions,handleOptionSelect}) {
  return (
    <div className='w-full pl-6'>
          <ul className='flex md:w-2/3 w-full flex-col text-sm sm:text-xl text-gray-800'>
            {Object.values(questions.options || {}).map((optionValue) => (
              <li key={optionValue} className='bg-blue-50 hover:bg-blue-100 rounded-xl p-3 m-1'>
                <label className='cursor-pointer flex items-center'>
                  <input className='radio radio-secondary mr-2'
                    type='radio'
                    name="radio-5"
                    value={optionValue}
                    
                    onChange={() => handleOptionSelect(optionValue)}
                  />
                  {optionValue}
                </label>
              </li>
            ))}
          </ul>
        </div>
  )
}

export default Options
