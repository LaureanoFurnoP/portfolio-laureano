import React, {useEffect, useState} from 'react';
import './style.css'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
import { notification } from 'antd';
import { WarningFilled,  CheckCircleOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
//tech
//
const Jobs: React.FC = () => {
  const [captchaToken, setCaptchaToken] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [disabledForm, setDisabledForm] = useState(false)
  const [api, contextHolder] = notification.useNotification();


  const onChangeCaptcha = (token: string | null) => {
    setCaptchaToken(token ? token : "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!captchaToken) {
      api.open({
        message: 'Error',
        description:
          'Por favor, marque el captcha para poder enviar el correo',
        icon: <WarningFilled style={{ color: 'red' }} />,
        showProgress: true,
      });
      return;
    }
  setDisabledForm(true);
    try {
        await axios.post("https://envio-correos-api.onrender.com/sendEmail", {
        emailClient: "laureanofurno@gmail.com",
        inputForm1: formData.nombre,
        inputForm2: formData.email,
        inputForm4: formData.asunto,
        inputForm5: formData.mensaje,
      });
      api.open({
        message: 'Datos enviados correctamente',
        description:
          '¡Gracias por llenar el formulario! En breves me pondré en contacto',
        icon: <CheckCircleOutlined style={{ color: '#05ff3bff' }} />,
        showProgress: true
      });
      setDisabledForm(false);
    } catch (error) {
      console.log(error)
      api.open({
        message: 'Ocurrio un error',
        description:
          'Se presento un error al enviar el mensaje, por favor reintente o rellene los campos correctamente',
        icon: <WarningFilled style={{ color: 'red' }} />,
        showProgress: true
      });
      setDisabledForm(false)
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='Contact-container'>
        <div className='cont-Center'>
          {contextHolder}
          <form onSubmit={handleSubmit} data-aos="fade-right" data-aos-duration="1000">
            <h2>CONTACTAR</h2>
            <input type="text" name="nombre" onChange={handleChange} placeholder="NOMBRE" required/>
            <input type="email" name="email" onChange={handleChange} placeholder="EMAIL" required/>
            <input type="text" name="asunto" onChange={handleChange} placeholder="ASUNTO" required />
            <input type="text" className="mensaje" name="mensaje" onChange={handleChange} placeholder="MENSAJE" required/>
            <input type="submit" style={{cursor: "Pointer"}}  disabled={disabledForm}  value="ENVIAR" />
            <ReCAPTCHA
              className="captcha-sd"
              sitekey="6LdZ_borAAAAANfXETjTW91UAExGGewwSoJaHPyE"
              onChange={onChangeCaptcha}
            />
          </form>
        </div>
        <div className='freepik'>
          <h2>Material gráfico como iconos proporcionado de www.freepik.es</h2>
        </div>
    </section>
  );
};

export default Jobs;