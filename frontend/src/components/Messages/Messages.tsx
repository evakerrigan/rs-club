import './Messages.scss';
import { Button, Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
// import { RenderMessage } from '../Message/Message';

const onFinish = (value: string) => {
  // eslint-disable-next-line no-console
  console.log(value);
};

function RenderChat() {
  return (
    <div className='chat-avatar'>
      <img alt='avatar' src='https://game-assets.swgoh.gg/tex.charui_admiralraddus.png' />
    </div>
  );
}

function RenderMessage() {
  // console.log('object :>> ', avatar, text, date);
  return (
    <>
      {/* <div className='message-item input-message output-message'> */}
      <div className='message-avatar'>
        <img alt='avatar' src='https://game-assets.swgoh.gg/tex.charui_admiralraddus.png' />
      </div>
      <div className='message-content'>
        <p className='message-text'> asdawd awdwd awdwdadawdawdasdawd w wda aw awdaw dd</p>
        <p className='message-date'> Apr 21 2023 21:32:07</p>
      </div>
    </>
  );
}

export function Messages() {
  return (
    <main className='main messages'>
      <section className='chats'>
        <RenderChat />
        <RenderChat />
      </section>
      <section className='messages-container'>
        <div className='message-history'>
          <div className='message-item input-message '>
            <RenderMessage
            // avatar='https://game-assets.swgoh.gg/tex.charui_admiralraddus.png'
            // text='asdasdasd asd awdawdasd awd s'
            // date='Sun Apr 21 2023 21:32:07'
            />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
          <div className='message-item input-message'>
            <RenderMessage />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
          <div className='message-item input-message'>
            <RenderMessage />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
          <div className='message-item output-message'>
            <RenderMessage />
          </div>
        </div>
        <div className='input-form'>
          <Form onFinish={onFinish}>
            <Button htmlType='submit'>Submit</Button>
            <Form.Item name={['message']}>
              <TextArea style={{ resize: 'none' }} placeholder='Input message...' />
            </Form.Item>
          </Form>
        </div>
      </section>
    </main>
  );
}
