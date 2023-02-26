import './Profile.scss';
import { Button, Checkbox, Col, Form, Input, Select } from 'antd';

import { IUser, IOption, IUserProfile } from '../../types/Types';
import { BASE_URL, courcesList, interestsList, technologiesList } from '../Constants/Constants';

const layout = {
  wrapperCol: { span: 50 },
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
          <Checkbox value={item.key}>{item.value}</Checkbox>
        </Col>
      ))}
    </>
  );
}

async function getCoordsByCityAndCountry(city: string, country: string) {
  const url = `https://nominatim.openstreetmap.org/search?q=${city},${country}&format=json&limit=1`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error('No coordinates found for this city and country');
  }

  const { lat, lon } = data[0];
  console.log('coords :>> ', { lat, lon });
  return { lat: Number(lat), lon: Number(lon) };
}

export function Profile({ id }: { id: string }) {
  const onFinish = (values: { user: IUserProfile }) => {
    const { user } = values;

    getCoordsByCityAndCountry(user.city, user.country);
    console.log('user :>> ', user);

    /* здесь нужно декодировать адресс в координаты [number, number] */

    const data: Partial<IUser> = {
      courses: user.cources,
      technology: user.technologies,
      gender: user.gender,
      // location: ,
      address: user.city,
    };

    /*
    const updateUserData = async(data: Partial<IUser> )=>{
      try {
    fetch(`${BASE_URL}/users/profile/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(data)
    })
      } catch (error) {
        console.error('User update was not successful!')
      }
    }
    updateUserData(data)
    */
  };

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
          name={['user', 'telegramLink']}
          label='Link to Telegram'
          rules={[
            { required: true },
            {
              pattern: /[a-zA-Z0-9_]{5,}$/,
              message: 'Uncorrect link',
            },
          ]}
          hasFeedback
        >
          <Input placeholder='Type your telegram' addonBefore='https://t.me/' />
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
        <Form.Item
          name={['user', 'country']}
          label='Country'
          rules={[{ required: true }, { min: 3 }]}
          hasFeedback
        >
          <Input placeholder='Type your country' />
        </Form.Item>
        <Form.Item
          name={['user', 'city']}
          label='City'
          rules={[{ required: true }, { min: 3 }]}
          hasFeedback
        >
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
