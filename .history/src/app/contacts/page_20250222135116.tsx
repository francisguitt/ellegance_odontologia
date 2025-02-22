// "use client"
// import { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { 
//   IconUser, 
//   IconMail, 
//   IconPhone, 
//   IconMessage, 
//   IconSend,
//   IconMapPin,
//   IconClock,
//   IconBuildingHospital
// } from '@tabler/icons-react';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

// interface FormErrors {
//   name?: string;
//   email?: string;
//   phone?: string;
// }

// const Contact = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showError, setShowError] = useState(false);

//   const validProviders = [
//     "gmail.com", "gmail.com.br", "yahoo.com", "outlook.com",
//     "uol.com", "uol.com.br", "hotmail.com", "hotmail.com.br",
//     "icloud.com", "me.com", "mac.com", "aol.com", "aol.com.br"
//   ];

//   const validateForm = () => {
//     const newErrors: FormErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = 'Por favor, insira seu nome.';
//     }

//     const emailRegex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//     const emailLower = formData.email.toLowerCase();
//     const emailParts = emailLower.split('@');

//     if (!emailLower || !emailRegex.test(emailLower) || !validProviders.includes(emailParts[1])) {
//       newErrors.email = 'Por favor, insira um e-mail válido.';
//     }

//     const phoneClean = formData.phone.replace(/\D/g, '');
//     if (phoneClean.length !== 11) {
//       newErrors.phone = 'Por favor, insira um número de celular válido.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;

//     if (name === 'phone') {
//       const phoneClean = value.replace(/\D/g, '');
//       const phoneFormatted = phoneClean.replace(
//         /^(\d{2})(\d{5})(\d{4}).*/,
//         '($1) $2-$3'
//       );
//       setFormData(prev => ({ ...prev, [name]: phoneFormatted }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const showNotification = (type: 'success' | 'error') => {
//     if (type === 'success') {
//       setShowSuccess(true);
//       setTimeout(() => setShowSuccess(false), 5000);
//     } else {
//       setShowError(true);
//       setTimeout(() => setShowError(false), 5000);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (validateForm()) {
//       try {
//         const templateParams = {
//           from_name: formData.name,
//           from_email: formData.email,
//           from_number: formData.phone,
//           message: formData.message
//         };

//         await emailjs.send(
//           'YOUR_SERVICE_ID',
//           'YOUR_TEMPLATE_ID',
//           templateParams,
//           'YOUR_PUBLIC_KEY'
//         );

//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           message: ''
//         });
//         setErrors({});
//         showNotification('success');
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         showNotification('error');
//       }
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
//           <p className="text-gray-600">Estamos prontos para atender você da melhor forma possível</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300">
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <IconMapPin className="h-6 w-6 text-blue-500" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">Localização</h3>
//               </div>
//               <div className="space-y-2 text-gray-600">
//                 <p>Rua Example, 123</p>
//                 <p>Bairro Centro</p>
//                 <p>Cidade - Estado</p>
//                 <p>CEP: 12345-678</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300">
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <IconClock className="h-6 w-6 text-blue-500" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">Horário de Atendimento</h3>
//               </div>
//               <div className="space-y-2 text-gray-600">
//                 <div className="flex justify-between">
//                   <span>Segunda - Sexta:</span>
//                   <span>08:00 - 19:00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Sábado:</span>
//                   <span>08:00 - 14:00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Domingo:</span>
//                   <span>Fechado</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300">
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="bg-blue-50 p-3 rounded-full">
//                   <IconBuildingHospital className="h-6 w-6 text-blue-500" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800">Emergência</h3>
//               </div>
//               <div className="space-y-2 text-gray-600">
//                 <p>Telefone: (XX) XXXX-XXXX</p>
//                 <p>WhatsApp: (XX) XXXXX-XXXX</p>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
//               <div className="p-8 lg:p-12">
//                 <form onSubmit={handleSubmit} className="space-y-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="relative group">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <IconUser className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//                       </div>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Seu nome completo"
//                         className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
//                           errors.name ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                       />
//                       {errors.name && (
//                         <p className="mt-2 text-sm text-red-600 flex items-center">
//                           <span className="mr-1">⚠️</span> {errors.name}
//                         </p>
//                       )}
//                     </div>

//                     <div className="relative group">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <IconMail className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//                       </div>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Seu melhor e-mail"
//                         className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
//                           errors.email ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                       />
//                       {errors.email && (
//                         <p className="mt-2 text-sm text-red-600 flex items-center">
//                           <span className="mr-1">⚠️</span> {errors.email}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="relative group">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <IconPhone className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//                     </div>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="(XX) XXXXX-XXXX"
//                       className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
//                         errors.phone ? 'border-red-500' : 'border-gray-300'
//                       }`}
//                     />
//                     {errors.phone && (
//                       <p className="mt-2 text-sm text-red-600 flex items-center">
//                         <span className="mr-1">⚠️</span> {errors.phone}
//                       </p>
//                     )}
//                   </div>

//                   <div className="relative group">
//                     <div className="absolute top-3 left-0 pl-3 pointer-events-none">
//                       <IconMessage className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//                     </div>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Digite sua mensagem aqui..."
//                       rows={4}
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
//                   >
//                     {isSubmitting ? (
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     ) : (
//                       <>
//                         <IconSend className="h-5 w-5" />
//                         <span>Enviar Mensagem</span>
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className={`fixed bottom-4 right-4 transition-all duration-300 transform ${
//           showSuccess ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
//             <span className="mr-2">✅</span>
//             Mensagem enviada com sucesso!
//           </div>
//         </div>

//         <div className={`fixed bottom-4 right-4 transition-all duration-300 transform ${
//           showError ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//         }`}>
//           <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
//             <span className="mr-2">❌</span>
//             Erro ao enviar mensagem. Tente novamente.
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


"use client"
import { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMessage,
  IconSend,
  IconMapPin,
  IconClock,
  IconBuildingHospital,
  IconAlertCircle
} from '@tabler/icons-react';
import Image 
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const validProviders = [
    "gmail.com", "gmail.com.br", "yahoo.com", "outlook.com",
    "uol.com", "uol.com.br", "hotmail.com", "hotmail.com.br",
    "icloud.com", "me.com", "mac.com", "aol.com", "aol.com.br"
  ];

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, insira seu nome.';
    }

    const emailRegex = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const emailLower = formData.email.toLowerCase();
    const emailParts = emailLower.split('@');

    if (!emailLower || !emailRegex.test(emailLower) || !validProviders.includes(emailParts[1])) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }

    const phoneClean = formData.phone.replace(/\D/g, '');
    if (phoneClean.length !== 11) {
      newErrors.phone = 'Por favor, insira um número de celular válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const phoneClean = value.replace(/\D/g, '');
      const phoneFormatted = phoneClean.replace(
        /^(\d{2})(\d{5})(\d{4}).*/,
        '($1) $2-$3'
      );
      setFormData(prev => ({ ...prev, [name]: phoneFormatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const showNotification = (type: 'success' | 'error') => {
    if (type === 'success') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_number: formData.phone,
          message: formData.message
        };

        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          templateParams,
          'YOUR_PUBLIC_KEY'
        );

        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
        showNotification('success');
      } catch (error) {
        console.error('Error submitting form:', error);
        showNotification('error');
      }
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-gray-600">Estamos prontos para atender você da melhor forma possível</p>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <IconMapPin className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Localização</h3>
            </div>
            {/* <div className="space-y-2 text-gray-600">
              <p>Av. Paulista, 1000</p>
              <p>Bela Vista</p>
              <p>São Paulo - SP</p>
              <p>CEP: 01310-100</p>
            </div> */}
            <div className="space-y-4 text-gray-600">
              <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Fachada da Clínica"
                  className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <p>Av. Paulista, 1000</p>
                <p>Bela Vista</p>
                <p>São Paulo - SP</p>
                <p>CEP: 01310-100</p>
              </div>
            </div>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <IconClock className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Horário de Atendimento</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>08:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 14:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-[1.02] duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <IconBuildingHospital className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Contato Direto</h3>
            </div>
            <div className="space-y-2 text-gray-600">
              <p>Telefone: (11) 3456-7890</p>
              <p>WhatsApp: (11) 98765-4321</p>
              <p>Email: contato@clinica.com.br</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white rounded-xl shadow-lg p-4 h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-60" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-60" />

            <div className="relative p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Envie sua Mensagem</h3>
                <p className="text-gray-600">Responderemos o mais breve possível</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full h-14 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 px-4 pt-4 pb-1 text-sm outline-none transition-all focus:border-blue-500"
                        placeholder=" "
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:text-sm peer-focus:top-2 peer-focus:text-blue-500"
                      >
                        Nome Completo
                      </label>
                      <IconUser className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500 flex items-center">
                        <IconAlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="group">
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="peer w-full h-14 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 px-4 pt-4 pb-1 text-sm outline-none transition-all focus:border-blue-500"
                        placeholder=" "
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:text-sm peer-focus:top-2 peer-focus:text-blue-500"
                      >
                        E-mail
                      </label>
                      <IconMail className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500 flex items-center">
                        <IconAlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="peer w-full h-14 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 px-4 pt-4 pb-1 text-sm outline-none transition-all focus:border-blue-500"
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:text-sm peer-focus:top-2 peer-focus:text-blue-500"
                    >
                      Telefone
                    </label>
                    <IconPhone className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500 flex items-center">
                      <IconAlertCircle className="h-4 w-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="group">
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="peer w-full bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 px-4 pt-4 pb-1 text-sm outline-none transition-all focus:border-blue-500"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 peer-focus:text-sm peer-focus:top-2 peer-focus:text-blue-500"
                    >
                      Sua Mensagem
                    </label>
                    <IconMessage className="absolute right-4 top-4 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-48 h-12 mx-auto overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed"
                >
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white px-6 transition-all duration-200 hover:bg-transparent">
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <IconSend className="h-4 w-4" />
                          <span className="text-sm font-medium">Enviar</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center space-x-2 text-blue-500 transition-all duration-200 group-hover:opacity-0">
                      {isSubmitting ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-blue-500" />
                      ) : (
                        <div className="flex items-center space-x-2">
                          <IconSend className="h-4 w-4" />
                          <span className="text-sm font-medium">Enviar</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className={`fixed bottom-4 right-4 transition-all duration-300 transform ${showSuccess ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <span className="mr-2">✅</span>
            Mensagem enviada com sucesso!
          </div>
        </div>

        <div className={`fixed bottom-4 right-4 transition-all duration-300 transform ${showError ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <span className="mr-2">❌</span>
            Erro ao enviar mensagem. Tente novamente.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
