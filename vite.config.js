import handlebars from 'vite-plugin-handlebars';
export default {
  base : '/responsive_webpages/',   // <-- add this
  plugins: [
    handlebars({
      context: data, 
    }),
  ],
};
import data from "./New folder/data.json";
