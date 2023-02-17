import './Profile.scss';
import { Button, Checkbox, Col, Form, Input, Select } from 'antd';
import { IUser, IOption } from '../../types/Types';
import { courcesList, interestsList, technologiesList } from '../Constants/Constants';

const layout = {
  wrapperCol: { span: 50 },
};

const onFinish = (values: IUser) => {
  // eslint-disable-next-line no-console
  console.log(values);
};

const validateMessages = {
  /* eslint-disable no-template-curly-in-string */
  required: '${label} is required!',
  string: {
    min: '${label} must be at least ${min} characters',
  },
};

function CreateCheckbox(list: IOption[] = []) {
  return (
    <>
      {list.map((item) => (
        <Col key={item.key}>
          <Checkbox value={item.value}>{item.value}</Checkbox>
        </Col>
      ))}
    </>
  );
}

export function Profile() {
  return (
    <main className='main profile'>
      <Form
        className='form'
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layout}
        name='profile'
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'name']}
          label='Name'
          rules={[{ required: true }, { whitespace: true }, { min: 3 }]}
          hasFeedback
        >
          <Input placeholder='Type your name' />
        </Form.Item>
        <Form.Item
          name={['user', 'gender']}
          label='Gender'
          rules={[{ required: true }]}
          hasFeedback
        >
          <Select
            placeholder='Select your gender'
            style={{ color: 'white' }}
            options={[
              { value: 'male', label: 'male' },
              { value: 'famale', label: 'famale' },
            ]}
          />
        </Form.Item>
        <Form.Item name={['user', 'city']} label='City' rules={[{ required: true }]} hasFeedback>
          <Input placeholder='Type your city' />
        </Form.Item>
        <Form.Item
          name={['user', 'technology']}
          label='Stack technologies'
          rules={[{ required: true }]}
          hasFeedback
        >
          <Select
            mode='multiple'
            placeholder='Please select technologies'
            style={{ width: '100%' }}
            options={technologiesList}
          />
        </Form.Item>
        <Form.Item
          name={['user', 'cources']}
          label='Completed courses'
          rules={[{ required: true }]}
          hasFeedback
        >
          <Select
            mode='multiple'
            placeholder='Please select cources'
            style={{ width: '100%' }}
            options={courcesList}
          />
        </Form.Item>
        <Form.Item
          name={['user', 'interests']}
          label='Interests'
          rules={[{ required: true }]}
          hasFeedback
        >
          <Checkbox.Group className='checkbox' style={{ width: '100%' }}>
            {CreateCheckbox(interestsList)}
          </Checkbox.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
