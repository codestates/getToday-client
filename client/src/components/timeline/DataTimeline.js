// import moment from 'moment'


//     const groups = [
//     { id: 1, title: 'Mon' },
//     { id: 2, title: 'Tue' },
//     { id: 3, title: 'Wed' },
//     { id: 4, title: 'Thu' },
//     { id: 5, title: 'Fri' },
//     { id: 6, title: 'Sat' },
//     { id: 7, title: 'Sun' },
//   ]
  
//   const items = [
//     {
//       id: 2,
//       group: 2,
//       title: 'english',
//       start_time: moment('2021-02-04 05:00'),
//       end_time: moment('2021-02-04 07:00'),
//       canMove: false,
//       canResize: false,
//       canChangeGroup: true,
//       itemProps: {
//         onDoubleClick: () => { console.log('You clicked double!') },
//         style: {
//           background: 'black'
//         }
//       }
//     },
//     {
//       id: 3,
//       group: 3,
//       title: 'math',
//       start_time: moment('2021-02-04 09:30'),
//       end_time: moment('2021-02-04 10:30')
//     },
//     {
//       id: 4,
//       group: 1,
//       title: 'computer science',
//       start_time: moment('2021-02-04 15:00'),
//       end_time: moment('2021-02-04 17:00')
//     }
//   ]


// /*
// module.exports = {
//   generateAccessToken: (data) => {
//     return sign(data, process.env.ACCESS_SECRET, { expiresIn: "15s" });
//   },
//   generateRefreshToken: (data) => {
//     return sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" });
//   },
//   sendRefreshToken: (res, refreshToken) => {
//     res.cookie("refreshToken", refreshToken, {
//       httpOnly: true,
//     });
//   },
//   sendAccessToken: (res, accessToken) => {
//     res.json({ data: { accessToken }, message: "ok" });
//   },
//   resendAccessToken: (res, accessToken, data) => {
//     res.json({ data: { accessToken, userInfo: data }, message: "ok" });
//   },
//   isAuthorized: (req) => {
//     const authorization = req.headers["authorization"];
//     if (!authorization) {
//       return null;
//     }
//     const token = authorization.split(" ")[1];
//     try {
//       return verify(token, process.env.ACCESS_SECRET);
//     } catch (err) {
//       // return null if invalid token
//       return null;
//     }
//   },
//   checkRefeshToken: (refreshToken) => {
//     try {
//       return verify(refreshToken, process.env.REFRESH_SECRET);
//     } catch (err) {
//       // return null if refresh token is not valid
//       return null;
//     }
//   },
// };
// */