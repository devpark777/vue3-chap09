import axios from 'axios';

export default {
  mounted() {
    let dd = new Date()
    const st = dd.getSeconds();
    console.log('믹스인 mounted : '+ st);
  },
  unmounted() {
    let dd2 = new Date()
    const et = dd2.getSeconds();
    console.log('믹스인 unmounted :' + et );
  },
  methods: {
    async $callAPI(url, method, data) {
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  }
}