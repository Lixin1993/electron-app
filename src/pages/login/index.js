import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import gb from './bg.png';
import './App.css';

const NormalLoginForm = () => {
  const onFinish = (values) => {
    const { username, password } = values
    if(username === 'cwsw' && password === 'cwsw') {
      message.success('登录成功')
      // setTimeout(() => window.close(), 2000)
      // window.setFullScreen(true)
      console.log('====================================');
      console.log(process);
      console.log('====================================');
    } else {
      message.error('用户名或密码错误，请重试')
    }
  };

  return (
    <div className='App-header'>
      <img src={gb} className='bg-img' alt='' />
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入账号!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NormalLoginForm;
