import axios from 'axios'

function getAllTeaDetails(_this) {
  return new Promise((resolve, reject) => {
    axios.get(_this.dataReqUrl+"/allTeaDetails")
      .then(res => {
        resolve(res.data)
      })
      .catch(err=>{
        reject(err)
      });
  });
}

export default {
  getAllTeaDetails
}
