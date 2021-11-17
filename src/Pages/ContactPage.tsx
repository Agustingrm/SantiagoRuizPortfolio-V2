import "../Assets/Styles/CSS/Contact.css";

const ContactPage: React.FC<{}> = () => {
  return (
    <div className='contactContainer'>
      <p>For job inquiries, questions or just say hi.</p>
      <p>email</p>
      <a href="mailto: abc@gmail.com">hi@santigo-ruiz.com</a>
      <p>phone</p>
      <p>+54 381 6155819</p>
      <p>Tucumán - Argentina</p>
    </div>
  );
};

export default ContactPage;
