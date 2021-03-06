import React from 'react'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'

import HoverPaper from '../../components/hover-paper'

const Range = createSliderWithTooltip(Slider.Range)

const SliderYear = ({
  onChange,
  onAfterChange,
  yearRange,
  min,
  max
}) => (
  <div>
    <HoverPaper className='p-4'>
      <p className='lead'>
        From year <strong className='text-primary'>{yearRange[0]}</strong> to
        year <strong className='text-primary'>{yearRange[1]}</strong>
      </p>
      <Range
        onChange={onChange}
        onAfterChange={onAfterChange}
        defaultValue={yearRange}
        min={min}
        max={max}
      />
    </HoverPaper>
  </div>
)

export default SliderYear
