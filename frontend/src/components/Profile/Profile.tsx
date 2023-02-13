import './Profile.scss';
import { Button, Checkbox, Col, Form, Input, Select } from 'antd';
import { IUser } from '../../types/Types';

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

function CreateCheckbox(list: string[] = []) {
  return (
    <>
      {list.map((item) => (
        <Col key={item.split(' ').join('-')}>
          <Checkbox value={item}>{item}</Checkbox>
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
        name='nest-messages'
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
            options={[
              { value: 'js', label: 'JavaScript' },
              { value: 'phyton', label: 'Phyton' },
              { value: 'ts', label: 'TypeScript' },
              { value: 'node', label: 'Node.js' },
              { value: 'angular', label: 'Angular' },
              { value: 'react', label: 'React' },
              { value: 'vue', label: 'Vue.js' },
            ]}
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
            options={[
              { value: 'js/fe', label: 'JavaScript/Front-end Course' },
              { value: 'ios', label: 'iOS Cource' },
              { value: 'android', label: 'Android Cource' },
              { value: 'node', label: 'Node.js in AWS' },
              { value: 'angular', label: 'Angular Course' },
              { value: 'react', label: 'React Course' },
            ]}
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
