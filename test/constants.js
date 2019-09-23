const baseUrl = 'https://stage.pasv.us';

const url = {  
baseUrl,    
loginUrl: `${baseUrl}/user/login`,
};

const user = {
admin: {
  login: 'admin@test.com',
  password: '11111',
  id: '5d687e4983d5d600380e6b51',
  name: 'Ruslan Admin'
},
student: {
   login: '',
   password: ''
}
};
module.exports = { 
    url,
    user
}; 