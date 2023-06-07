// import { useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken';

// const useAuthToken = () => {
//   const [authToken, setAuthToken] = useState(null);

//   useEffect(() => {
//     // Retrieve the token from local storage
//     const token = localStorage.getItem('token');

//     if (token) {
//       try {
//         const decodedToken = jwt.decode(token);
//         setAuthToken(decodedToken);
//       } catch (error) {
//         console.error('Error decoding token:', error);
//         setAuthToken(null);
//       }
//     } else {
//       setAuthToken(null);
//     }
//   }, []);

//   return authToken;
// };

// export default useAuthToken;
