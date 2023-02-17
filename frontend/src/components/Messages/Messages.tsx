import './Messages.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import { Avatar, Button, Form, Input } from 'antd';

function Message() {
  // console.log('object :>> ', avatar, text, date);
  return (
    <>
      {/* <div className='message__item input-message output-message'> */}
      <div className='message__avatar'>
        <img alt='avatar' src='https://game-assets.swgoh.gg/tex.charui_admiralraddus.png' />
      </div>

      <div className='message__content'>
        {/* <div className='message__bubble'> */}
        <p className='message__text'> asdawd awdwd awdwdadawdawdasdawd w wda aw awdaw dd</p>
        {/* </div> */}
        <p className='message__date'> Apr 21 2023 21:32:07</p>
      </div>
      {/* </div> */}
    </>
  );
}

// Message.propTypes = {
//   avatar: PropTypes.string,
//   text: PropTypes.string,
//   date: PropTypes.string,
//   // user: PropTypes.object,
// };
export function Messages() {
  return (
    <main className='main messages'>
      <section className='interlocutors'>interlocutors</section>
      <section className='messages-container'>
        <div>
          <div className='message__item input-message '>
            <Message
            // avatar='https://game-assets.swgoh.gg/tex.charui_admiralraddus.png'
            // text='asdasdasd asd awdawdasd awd s'
            // date='Sun Apr 21 2023 21:32:07'
            />
          </div>
          <div className='message__item output-message'>
            <Message

            // avatar='https://game-assets.swgoh.gg/tex.charui_admiralraddus.png'
            // text='asdasdasd asd awdawdasd awd s'
            // date='Sun Apr 21 2023 21:32:07'
            />
          </div>
        </div>
        <div className='message-input'>
          <Form>
            <Form.Item name={['user', 'introduction']} label='Introduction'>
              <Input.TextArea />
            </Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </main>
  );
}

// Message.defaultProps = {
//   user: {},
// };

// Message.propTypes = {
//   avatar: 'https://game-assets.swgoh.gg/tex.charui_admiralraddus.png',
//   text: 'asdasdasd asd awdawdasd awd s',
//   date: 'Sun Apr 21 2023 21:32:07',
// };
