import * as functions from 'firebase-functions';

const requirePath = `${process.cwd()}/dist/app/server/main`;

console.log('loading cloud function...')

console.log(`require path: ${requirePath}`)

const universal = require(requirePath).app();

console.log(new Date().toISOString());

export const ssr = functions.https.onRequest(universal);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
