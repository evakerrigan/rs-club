import { Checkbox, Form, } from 'antd';
import {  CheckboxValueType } from 'antd/es/checkbox/Group';
// import { generatePath } from 'react-router-dom';

import './Filters.scss';
import { courcesList, interestsList, technologiesList} from '../Constants/Constants';
import { IOption } from '../../types/Types';

// let filter = {
//   interests:[],
//   technologies:[],
//   cources:[],
// };

const onChange = (checkedValues: CheckboxValueType[] ) => {
    console.log('checked = ', checkedValues);
// const item ='in my city erwe sdasd ';
    // console.log('object :>> ', generatePath('/users/:id', {id:String(checkedValues)}));
    // console.log(CreateKey(item));
    // http://localhost:8000/api/users?pref=${params}
  };

const ChangeStyle = (event: React.MouseEvent<HTMLElement>): void=> {
    event.currentTarget.closest('.checkbox-item')?.classList.toggle('checked');
    };

function CreateCheckbox(list: IOption[]=[]) {
  return (
       <div className='filter-section'>
         {list.map((item) => (
          <div className='checkbox-item' key={item.key} >
             <Checkbox  value={item.value} onClick={ChangeStyle}>{item.value}</Checkbox>
          </div>
      ))
      }
      </div>
  );
}

export function FiltersRender() {
  return (
    <Form className='filters' >
      <Form.Item name='interests'>
    <Checkbox.Group className='filter-item' onChange={onChange}>
      <h2 className='filter-title'>Interests</h2>
      {CreateCheckbox(interestsList)}
    </Checkbox.Group>
    </Form.Item>
    <Form.Item name='technologies' >
    <Checkbox.Group className='filter-item' onChange={onChange}>
        <h2 className='filter-title'>Technologies</h2>
        {CreateCheckbox(technologiesList)}
    </Checkbox.Group>
    </Form.Item>
    <Form.Item name='cources'>
    <Checkbox.Group className='filter-item' onChange={onChange}>
        <h2 className='filter-title'>Cources</h2>
        {CreateCheckbox(courcesList)}
    </Checkbox.Group>
    </Form.Item>
      </Form>
  );
}

