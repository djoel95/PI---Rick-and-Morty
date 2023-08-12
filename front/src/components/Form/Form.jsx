import { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./Form.module.css";
import video from "../../assets/gen2.mp4";


const Form = () => {
    const initialFormState = {
      username: "",
      password: "",
    };
  
    const [form, setForm] = useState(initialFormState);
    const [errors, setErrors] = useState({});
  
    const handleChange = (event) => {  
      const { name, value } = event.target;
  
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validateForm(form);
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        console.log("Formulario enviado");
      }
    };
  
    const handleReset = () => {
      setForm(initialFormState);
      setErrors({});
    };
  
    const validateForm = (formData) => {
      const errors = {};
      const usernameRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
      if (formData.username.trim() === "") {
        errors.username = "El nombre de usuario es requerido";
      } else if (!usernameRegex.test(formData.username)) {
        errors.username = "El nombre de usuario no es válido";
      }
  
      if (formData.password.trim() === "") {
        errors.password = "La contraseña es requerida";
      }
  
      return errors;
    };
  
    return (
        <div >
          <video autoPlay muted loop src={video}></video>
      <form onSubmit={handleSubmit} className={style.container}>
        <div className={style.containerLabel}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className={errors.username ? style.inputError : ""}
            />
          {errors.username && <span className={style.error}>{errors.username}</span>}
        </div>
        <div className={style.containerLabel}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className={errors.password ? style.inputError : ""}
          />
          {errors.password && <span className={style.error}>{errors.password}</span>}
        </div>
        <div className={style.buttonContainer}>
        <button type="submit" className={style.button}>
          Login
        </button>
        <button type="reset" className={style.button} onClick={handleReset}>
          Reset
        </button>
        </div>
      </form>
            </div>
    );
  };
  
  export default Form;