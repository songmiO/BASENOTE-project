import { Component } from 'react';
import './Componenets/Login.scss';

class Login extends Component {
  render() {
    return (
      <body class="container">
        <div>
          <header class="title">로그인</header>
          <div>
            <form className="loginForm">
              <input className="loginId" type="text" placeholder="아이디를 입력해주세요" />
              <input className="loginPw" type="password" placeholder="비밀번호를 입력해주세요" />
              </form>
              <button className="loginBt" type="button">로그인</button>
          </div>
        </div>
      </body>
    )
  }
}
export default Login;
