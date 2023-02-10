import './Profile.scss';
import { Button, Form, Input, Select } from 'antd';
// import { IUser } from '../../types/Types';
// import { Form } from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

// const onFinish = (values:IUser) => {
//   console.log(values);
// };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  min: '${label} must be between ${min}',
};

export function Profile() {
  return (
    <main className='main profile'>
      <Form
        className='form'
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layout}
        name='nest-messages'
        // onFinish={onFinish}
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
            mode='tags'
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
            mode='tags'
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

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </main>
  );
}
