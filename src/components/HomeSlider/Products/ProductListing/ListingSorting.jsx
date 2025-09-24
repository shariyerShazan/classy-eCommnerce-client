import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';

function valuetext(value) {
  return `${value}°C`;
}

const ListingSorting = () => {

  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='flex flex-col gap-8 text-gray-700 py-6'>

      {/* Category */}
      <div>
        <p className='text-lg font-bold mb-2'>Shop by Category</p>
        <div className="max-h-50 overflow-y-scroll scrollbar-always  px-2"> 
        
          <FormGroup>
            <FormControlLabel
              className="!text-sm"
              control={<Checkbox size="small" defaultChecked />}
              label="Fashion"
            />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Electronics" />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Bags" />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Footwear" />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Groceries" />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Beauty" />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Wellness" />
            <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label="Jewellery" />
          </FormGroup>
        </div>
      </div>

      {/* Price Filter */}
      <div className="text-sm px-2">
  <p className="text-lg font-bold mb-2">Filter By Price</p>
  <Box sx={{ width: 270 }}>
    <Slider
        //  size="medium"
      getAriaLabel={() => 'Temperature range'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
    />
  </Box>
  <div className="flex justify-between">
    <p>From: <span className="font-bold">BDT: {value[0]}</span></p>
    <p>To: <span className="font-bold">BDT: {value[1]}</span></p>
  </div>
</div>

      {/* Rating Filter */}
      <div className='px-2'>
        <p className='text-lg font-bold mb-2'>Filter By Rating</p>
        <FormGroup>
          <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label={<Rating name="size-small" readOnly defaultValue={5} size="small" />} />
          <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label={<Rating name="size-small" readOnly defaultValue={4} size="small" />} />
          <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label={<Rating name="size-small" readOnly defaultValue={3} size="small" />} />
          <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label={<Rating name="size-small" readOnly defaultValue={2} size="small" />} />
          <FormControlLabel className="!text-sm" control={<Checkbox size="small" />} label={<Rating name="size-small" readOnly defaultValue={1} size="small" />} />
        </FormGroup>
      </div>

    </div>
  )
}

export default ListingSorting;
