import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.app.base',
  appName: 'Recetas del Mundo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
