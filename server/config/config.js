// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'Rey-Gonzalo-Jesús-Ruiz-Mijangos';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

// ============================
//  Google Client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '236077849818-ueg4evscogs4qe5c8hqc51smppdd8m5k.apps.googleusercontent.com';