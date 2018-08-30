import axios from 'axios'

function getAllTypesOfTea(_this) {
  return new Promise((resolve, reject) => {
    axios.get("/static/allTypesOfTea.json")
      .then(res => {
        let virtualDatas = []
        for (let i=0;i<res.data.length;i++){
          virtualDatas.push({
            "largeclass":res.data[i][_this.langCode+"_largeclass"],
            "smallclass":res.data[i][_this.langCode+"_smallclass"]
          })
        }
        resolve(virtualDatas)
      })
      .catch(err=>{
        reject(err)
      });
  });
}

export default {
  getAllTypesOfTea
}
