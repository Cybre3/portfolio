import emailjs from 'emailjs-com'

export default function() {
  return emailjs.init(process.env.REACT_)
}