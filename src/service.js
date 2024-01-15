import axios from 'axios';

const apiUrl = "http://localhost:5058";

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`) ;
    console.log(result);   
    return result.data;
  },

  addTask: async(name)=>{
    const newItem = {
      name: name,
      isComplete: false,  
    };
    
    const result=await axios.post(`${apiUrl}/item`, newItem)
      .then(response => {
        console.log('Response from server:', response.data);
      })
      .catch(error => {        
        console.error('Error:', error.response.data);
      });
    return result;
  },

  setCompleted: async(id, isComplete)=>{
    const itemIdToUpdate= id;
    const updateItem={
      isComplete:isComplete
    } 
    const res=await axios.put(`${apiUrl}/item/${ itemIdToUpdate}`,updateItem)
  .then(response => {
    
    console.log('Response from server:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
    
    return {};
  },

  deleteTask:async(id)=>{
    const itemIdToDelete = id; 
    const res=await axios.delete(`${apiUrl}/item/${itemIdToDelete}`)
  .then(response => {
    // Handle success, e.g., log the response or perform further actions
    console.log('Response from server:', response.data);
  })
  .catch(error => {
    // Handle error, e.g., log the error or show an error message to the user
    console.error('Error:', error.response.data);
  });
  }
};
