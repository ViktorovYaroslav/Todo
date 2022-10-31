import '../style/bootstrap.min.css'
import '../style/app.css'
import '../js/bootstrap.min.js'

import App from '../App.svelte'

const app = new App({
   target: document.getElementById('app'),
   intro: true,

})


export default app
