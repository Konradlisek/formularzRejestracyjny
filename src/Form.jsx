import { useRef, useState } from "react";
import "./Form.css";

const Form = () => {
  const passwordRef = useRef();
  const firstNameRef = useRef();
  const emailRef = useRef();
  const [errorText, setErrorText] = useState("");
  const [goodPassword, setGoodPassword] = useState("");
  const [user, setUser] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;

    const email = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const specialSigns = /[!@#$%^&*()]/;
    const uppercaseLetter = /[A-Z]/;

    if (
      passwordValue.length <= 7 &&
      !specialSigns.test(passwordValue) &&
      !uppercaseLetter.test(passwordValue)
    ) {
      setErrorText(
        "*Twoje hasło jest za krótkie powinno posiadać min 8 znaków,musi zawierać co najmniej jeden znak specjalny taki jak !@#$%^&*() oraz przynajmniej jedną wilką litere"
      );
    } else if (!specialSigns.test(passwordValue) && passwordValue.length <= 7) {
      setErrorText(
        "*Hasło musi zawierać co najmniej jeden znak specjalny taki jak !@#$%^&*() oraz powinno posiadać min 8 znaków"
      );
    } else if (
      !specialSigns.test(passwordValue) &&
      !uppercaseLetter.test(passwordValue)
    ) {
      setErrorText(
        "*Hasło musi zawierać co najmniej jeden znak specjalny taki jak !@#$%^&*() oraz  musi zawierać co najmniej jedną wielką literę"
      );
    } else if (
      passwordValue.length <= 7 &&
      !uppercaseLetter.test(passwordValue)
    ) {
      setErrorText(
        "*Twoje hasło jest za krótkie powinno posiadać min 8 znaków oraz musi zawierać co najmniej jedną wielką literę "
      );
    } else if (passwordValue.length <= 7) {
      setErrorText("*Hasło jest za krótkie powinno posiadać min 8 znaków");
    } else if (!specialSigns.test(passwordValue)) {
      setErrorText(
        "*Hasło musi zawierać co najmniej jeden znak specjalny taki jak !@#$%^&*()"
      );
    } else if (!uppercaseLetter.test(passwordValue)) {
      setErrorText("*Hasło musi zawierać co najmniej jedną wielką literę");
    } else {
      setErrorText("Wszystkie warunki zostały spełnione");
      setGoodPassword("goodpassword");
      setUser(
        `Witaj ${firstName}, proszę wejdź na swój email: ${email} i potwierdź rejstację.`
      );
    }
  };
  return (
    <div className="form-account">
      <form className="form" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Imię:" ref={firstNameRef} />
        <input type="text" placeholder="Nazwisko:" />
        <input
          className="input-passwor"
          type="password"
          placeholder="Hasło:"
          ref={passwordRef}
        />
        <input type="email" placeholder="Email:" ref={emailRef} />
        <button type="submit">Zarejstruj się!</button>

        <p className={`error-text ${goodPassword}`}>{errorText}</p>
        <p className="data-from">{user}</p>
      </form>
    </div>
  );
};
export default Form;
