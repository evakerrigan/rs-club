import { Button, Checkbox, Form } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import './Filters.scss';
import { useState } from 'react';
import { courcesList, interestsList, technologiesList } from '../Constants/Constants';
import { FiltersData, IOption } from '../../types/Types';

const onChange = (checkedValues: CheckboxValueType[], query: string) => {
  const findItem = JSON.parse(localStorage.getItem(query) || '[]');

  if (!findItem.includes(checkedValues.at(-1))) {
    localStorage.setItem(query, JSON.stringify(checkedValues));
  } else {
    localStorage.setItem(query, JSON.stringify(checkedValues.slice(0, checkedValues.length)));
  }
};

const ChangeStyle = (event: React.MouseEvent<HTMLElement>): void => {
  event.currentTarget.closest('.checkbox-item')?.classList.toggle('checked');
};

const isCheckedFromLocalStorage = (str: string, key: string) => {
  const array = JSON.parse(localStorage.getItem(str) || '[]');
  return array.includes(key);
};

function CreateCheckbox(query: string, list: IOption[] = []) {
  return (
    <div className='filter-section'>
      {list.map((item) => (
        <div
          className={`checkbox-item ${isCheckedFromLocalStorage(query, item.key) && 'checked'}`}
          key={item.key}
        >
          <Checkbox
            value={item.key}
            onClick={ChangeStyle}
            checked={isCheckedFromLocalStorage(query, item.key)}
          >
            {item.label}
          </Checkbox>
        </div>
      ))}
    </div>
  );
}

export function FiltersRender({
  onFinish,
  resetParamsAndLocalStorage,
}: {
  onFinish: (value: FiltersData) => void;
  resetParamsAndLocalStorage: () => void;
}) {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const handleHideFilters = () => {
    setIsFiltersVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className={`filters ${isFiltersVisible ? '' : 'hidden'}`}>
      <Form onFinish={onFinish}>
        <Form.Item name='interests'>
          <Checkbox.Group className='filter-item' onChange={(data) => onChange(data, 'pref')}>
            <h2 className='filter-title'>Interests</h2>
            {CreateCheckbox('pref', interestsList)}
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='technologies'>
          <Checkbox.Group className='filter-item' onChange={(data) => onChange(data, 'stack')}>
            <h2 className='filter-title'>Technologies</h2>
            {CreateCheckbox('stack', technologiesList)}
          </Checkbox.Group>
        </Form.Item>
        <Form.Item name='cources'>
          <Checkbox.Group className='filter-item' onChange={(data) => onChange(data, 'cources')}>
            <h2 className='filter-title'>Cources</h2>
            {CreateCheckbox('cources', courcesList)}
          </Checkbox.Group>
        </Form.Item>
        <div className='filters__buttons'>
          <Button type='primary' htmlType='submit'>
            Confirm
          </Button>
          <Button type='primary' onClick={resetParamsAndLocalStorage}>
            Reset
          </Button>
        </div>
      </Form>

      <Button className='button-hider' onClick={handleHideFilters}>
        {isFiltersVisible ? '<' : '>'}
      </Button>
    </div>
  );
}
