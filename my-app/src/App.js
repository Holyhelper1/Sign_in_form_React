import styles from "./app.module.css";
import { useState } from "react";


function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [congrats, setCongrats] = useState(null);

  const onEmailChange = ({ target }) => {
    setEmail(target.value);
    let error = null;

    if (!/^[\w_@.]*$/.test(target.value)) {
      error = 'Неверный Email. Допустимые символы "_", "@", "."  - буквы, цифры!';
    } else if (target.value.length > 30) {
      error = "Неверный Email. Допустимая длинна не более 30 символов!";
    }

    setError(error);
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
    let error = null;

    if (!/^[\w_@.]*$/.test(target.value)) {
      error = 'Неверный пароль. Допустимые символы "_", "@", "."  - буквы, цифры!';
    } else if (target.value.length > 20) {
      error = "Неверный пароль. Допустимая длинна не более 20 символов!";
    }

    setError(error);
  };

  const onConfPassChange = ({ target }) => {
    setConfirmPassword(target.value);
    let error = null;

    if (target.value !== password) {
      error = 'Пароли не совпадают!';
    } else {
      error = null
    }

    setError(error);
  };
  const formData = {
    email: email,
    password: password
  }

  const onSubmit = (event) => {
    event.preventDefault();

    let congrats = null
    if (event) {
      
      congrats = 'Вы успешно зарегистрированы!'
      setEmail('')
      setPassword('')
      setConfirmPassword('') 
      setTimeout(() => {
        setCongrats(null);
      }, 3000);
    } 
   setCongrats(congrats)
    console.log("Sing up form:", formData);
  };

  const onBlur =() => {
    if(email.length < 3) {
      setError('Неверный email, длинна должна быть более 3 символов!')
    } else if (password.length < 6) {
      setError('Неверный пароль, длинна должна быть более 6 символов!')
    } 
  }

  return (
    <div className={styles.App}>
      <header className={styles.appHeader}>
        <div className={styles.formWrapper}>
          <p>SING UP</p>
          <form onSubmit={onSubmit}>
          {error && <div className={styles.errorLabel}>{error}</div>}
          {congrats && <div className={styles.congratsLabel}>{congrats}</div>}
            <input
              className={styles.inputStyle}
              name="email"
              type="email"
              placeholder=" Email"
              value={email}
              onChange={onEmailChange}
            
            />
            <br />
            <input
              className={styles.inputStyle}
              name="password"
              type="password"
              placeholder=" Password"
              value={password}
              onChange={onPasswordChange}
              onBlur={onBlur}
            />
            <br />
            <input
              className={styles.inputStyle}
              name="password"
              type="password"
              placeholder=" Confirm password"
              value={confirmPassword}
              onChange={onConfPassChange}
            />
            <br />
            <button
              className={styles.btn}
              type="submit"
              disabled={error !== null || email === '' || password === ''}>
              Register
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
