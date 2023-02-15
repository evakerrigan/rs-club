import { Checkbox, Row } from 'antd';
// import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
// import { ReactEventHandler } from 'react';
import './Filters.scss'

// import {useRef} from 'react';


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

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  const changeStyle = (e: Event): void=> ((e.currentTarget?.parentNode.parentNode.parentNode.classList.toggle('checked')));

function CreateCheckbox(list: string[] = []) {

  return (
    <>
      {list.map((item) => (
          <Row key={item}>
          {/* <Row key={item} onClick={handleClick}> */}
          <Checkbox  value={item} onClick={changeStyle} >{item}</Checkbox>
          </Row>
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
