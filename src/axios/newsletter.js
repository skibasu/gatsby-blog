import axios from 'axios';

const newsletter = async (email, firstName = "") =>

   await axios({
      method: 'get',
      url: `http://headlessgatsby.local/wp-json/acf/v2/options`,
      headers: {
         'Content-Type': 'application/json',
      },
   })
      .then(({ data }) => {

         return axios({
            method: 'put',
            url: 'https://api.sendgrid.com/v3/marketing/contacts',
            headers: {
               'Content-Type': 'application/json',
               'authorization': `Bearer ${data.acf.sendgrid_api_key}`
            },
            data: {
               "list_ids": [
                  `${data.acf.sendgrid_list_id}`
               ],
               "contacts": [
                  {
                     "address_line_1": "",
                     "address_line_2": "",

                     "city": "",
                     "country": "",
                     "email": email,
                     "first_name": firstName,
                     "last_name": "",
                     "postal_code": "",
                     "state_province_region": "",
                     "custom_fields": {}
                  }
               ]
            }
         }
         ).then(status => status)
            .catch(error => error.message)
      }
   ).then(status => status)
      .catch(error => error.message)
      

export default newsletter;