import emailjs from '@emailjs/browser';

export function sendEmail(formRef) {
  return emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log('SUCCESS!', result.status, result.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
}
