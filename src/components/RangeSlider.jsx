import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const RangeSlider = () => {
  return (
    <div className="w-48 mt-4 lg:w-64">
    <Slider
      range
      min={0}
      max={100}
      defaultValue={[20, 80]}
      dotStyle={{ width: '1.5rem', height: '1.5rem', borderRadius: '50%', marginTop: '-0.5rem' }}
      activeDotStyle={{ borderColor: '#FFBF00', backgroundColor: '#FFBF00' }}
      trackStyle={[{ backgroundColor: '#FFBF00' }]}
      railStyle={{ backgroundColor: '#CBD5E0' }}
    />
  </div>
  )
}

export default RangeSlider