import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
proxy: {
  // This is the path on your webserver that will receive the requests.
  // Note this prefix is kept when calling the remote server:
  //    /api/some/path?q=1 will be proxied to https://your-remote-server/api/some/path?q=1
  //                                                                    ^^^^
  '/api': {

    // The target of the proxy. The client never sees this; it just calls its server
    // as normal and the server takes the requests, sends it to the target, receives
    // the response and sends it back to the client.
    target: 'http://localhost:3001',

    // This tells the server not to preserve the Origin header as sent by the client
    changeOrigin: true,

    // Sometimes you don’t want to keep the path prefix in the request you do
    // to the remote server. With this configuration,
    //    /api/some/path?q=1 will be proxied to https://your-remote-server/some/path?q=1
    rewrite: (path) => path.replace(/^\/api/, '')
  }
}
  },
});