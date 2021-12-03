import { UserConfigFn } from 'vite';
import { overrideVaadinConfig } from './vite.generated';
import vue from '@vitejs/plugin-vue'; 

const customConfig: UserConfigFn = (env) => ({
  // Here you can add custom Vite parameters
  // https://vitejs.dev/config/
  plugins: [vue()]
});

export default overrideVaadinConfig(customConfig);
