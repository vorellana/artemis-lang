// este archivo se crea para poder usar las variables de entorno en el frontend
// y es referencial ya que se están colocando valores por defecto en duro para efecto de pruebas

export const apiUrl = () => {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:81';
}

export const apiKey = () => {
  return process.env.NEXT_PUBLIC_API_KEY || 'bmhgujpKT2PSq4lyQcT6M5VxvML1cusbER0fllLaEnMPT8HHHzcOPiKz6knrvQD5ak2EgKpxur6HIQsnryyyDePauenGn21NmChShBYVgc5Hkp8S7GVOYvUt7gadjqQc';
}
