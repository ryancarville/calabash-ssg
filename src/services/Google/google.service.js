// import { google } from 'googleapis';
// require('dotenv').config();

// class GoogleService {
//   constructor() {

//     this.GOOGLE_PRIVATE_KEY = process.env.private_key;
//     this.GOOGLE_CLIENT_EMAIL = process.env.client_email;
//     this.GOOGLE_PROJECT_NUMBER = process.env.project_number;
//     this.GOOGLE_CALENDAR_ID = process.env.calendar_id;

//     this.SCOPES = ['https://www.googleapis.com/auth/calendar'];

//     this.jwtClient = new google.auth.JWT(
//       this.GOOGLE_CLIENT_EMAIL,
//       null,
//       this.GOOGLE_PRIVATE_KEY,
//       this.SCOPES
//     );

//     this.calendar = new google.calendar({
//       version: 'v3',
//       project: this.GOOGLE_PROJECT_NUMBER,
//       auth: this.jwtClient
//     });

//     this.auth = new google.auth.GoogleAuth({
//       keyFile: './keys.json',
//       scopes: this.SCOPES
//     });
//   }

//   listCalendarEvents = () => {
//     this.calendar.events.list(
//       {
//         calendarId: this.GOOGLE_CALENDAR_ID,
//         timeMin: new Date().toISOString(),
//         maxResults: 10,
//         singleEvents: true,
//         orderBy: "startTime",
//       },
//       (error, result) => {
//         if (error) {
//           console.log("Something went wrong: ", error); // If there is an error, log it to the console
//         } else {
//           if (result.data.items.length > 0) {
//             console.log("List of upcoming events: ", result.data.items); // If there are events, print them out
//           } else {
//             console.log("No upcoming events found."); // If no events are found
//           }
//         }
//       }
//     );
//   };
// }

// export default GoogleService;