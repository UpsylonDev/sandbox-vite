const axios = require('axios')
//import axios from "axios"

const posts = async function(){
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return response.data
};


module.exports = { posts}