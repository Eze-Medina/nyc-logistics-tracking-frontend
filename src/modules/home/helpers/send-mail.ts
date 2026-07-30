import emailjs from '@emailjs/browser';
import type { DataGuide } from '../../../shared/helpers/DataGuide';

export const sendGuideByEmail = async (data: DataGuide) => {
  try {
    await emailjs.send(
      'TU_SERVICE_ID',
      'TU_TEMPLATE_ID',
      {
        guide_data: JSON.stringify(data, null, 2),
      },
      {
        publicKey: 'TU_PUBLIC_KEY',
      }
    );

    console.log('Guía enviada correctamente');
  } catch (error) {
    console.error('Error al enviar la guía:', error);
  }
};