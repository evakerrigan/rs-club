import { Checkbox, } from 'antd';
import {  CheckboxValueType } from 'antd/es/checkbox/Group';
import './Filters.scss'

const interestsList = [
  'in my city',
  'looking for friends',
  'likes to move',
  'open to communication',
  'use a couple of beers',
  'can show the city',
  'can show the office',
  'looking for employees',
  'looking for a job',
  'looking for a relocation',
];

  const onChange = (checkedValues: CheckboxValueType[] ) => {
    console.log('checked = ', checkedValues);
  };

  const changeStyle = (event: React.MouseEvent<HTMLElement>): void=> {
    event.currentTarget.closest('.checkbox-item')?.classList.toggle('checked');
     };

function CreateCheckbox(list: string[] = []) {

  return (
    <>
         {list.map((item) => (
          <div className='checkbox-item' key={item} >
               <Checkbox  value={item} onClick={changeStyle}>{item}</Checkbox>
          </div>
      ))}
    </>
  );
}

export function FiltersRender() {
  return (

<Checkbox.Group  className='filters' onChange={onChange}>
    { CreateCheckbox( interestsList)}
  </Checkbox.Group>

  );
}
