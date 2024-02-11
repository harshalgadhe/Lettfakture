import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  target: 'es2019',
  esbuild: {
    // Add any necessary polyfills here
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  }
});
