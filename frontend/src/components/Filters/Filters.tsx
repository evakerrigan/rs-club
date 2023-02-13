import { Checkbox, Col, Row } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
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

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  const changeStyle = (e: CheckboxChangeEvent) => {
    e.target.checked ? {return 'red'} : {return 'white'}
  };

function CreateCheckbox(list: string[] = []) {
  return (
    <>
      {list.map((item) => (

          <Checkbox value={item} onChange={changeStyle}>{item}</Checkbox>

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
