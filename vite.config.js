import handlebars from 'vite-plugin-handlebars';
import data from "./New folder/data.json";
export default {
  plugins: [handlebars({
    context : 
        /*
        previous setup here
        */
        data   // add this
    
  })],
};