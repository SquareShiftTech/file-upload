# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `DEPLOY` fails to minify

gcloud config get-value project

internal-live-project
danussh@MacBook-Pro-4 file-upload % npm install

danussh@MacBook-Pro-4 file-upload % npm run build

danussh@MacBook-Pro-4 file-upload % gcloud run deploy ai-launch-pad --source . --region us-central1 --allow-unauthenticated

Building using Buildpacks and deploying container to Cloud Run service [ai-launch-pad] in project [internal-live-project] region [us-central1]
✓ Building and deploying new service... Done.                         
  ✓ Uploading sources...                                              
  ✓ Building Container... Logs are available at [https://console.cloud
  .google.com/cloud-build/builds/40ccfe9d-1d08-4f29-9a28-cdba5d9f7e38?
  project=876289777625].                                              
  ✓ Creating Revision...                                              
  ✓ Routing traffic...                                                
  ✓ Setting IAM Policy...                                             
Done.                                                                 
Service [ai-launch-pad] revision [ai-launch-pad-00001-d7s] has been deployed and is serving 100 percent of traffic.
Service URL: https://ai-launch-pad-876289777625.us-central1.run.app

danussh@MacBook-Pro-4 file-upload % gcloud run services list

   SERVICE                         REGION       URL                                                                      LAST DEPLOYED BY                                              LAST DEPLOYED AT
✔  ai-launch-pad                   us-central1  https://ai-launch-pad-876289777625.us-central1.run.app                   danussh@squareshift.co                                        2025-03-16T12:11:51.560656Z
✔  leave-tracker                   us-central1  https://leave-tracker-876289777625.us-central1.run.app                   service-876289777625@gcf-admin-robot.iam.gserviceaccount.com  2024-11-29T02:44:25.670650Z
✔  sqshft-interview-portal-client  us-central1  https://sqshft-interview-portal-client-876289777625.us-central1.run.app  narendran@squareshift.co                                      2025-02-23T01:36:26.301676Z
✔  sqshft-interview-portal-server  us-central1  https://sqshft-interview-portal-server-876289777625.us-central1.run.app  narendran@squareshift.co                                      2025-02-23T01:37:28.194352Z

danussh@MacBook-Pro-4 file-upload % gcloud run services describe ai-launch-pad --region us-central1 --format='value(status.conditions)'

{'lastTransitionTime': '2025-03-16T12:11:51.560656Z', 'status': 'True', 'type': 'Ready'};{'lastTransitionTime': '2025-03-16T12:11:50.260839Z', 'status': 'True', 'type': 'ConfigurationsReady'};{'lastTransitionTime': '2025-03-16T12:11:51.517862Z', 'status': 'True', 'type': 'RoutesReady'}

danussh@MacBook-Pro-4 file-upload %  

TO BUILD FROM SOURCE
IN CASE OF SERVICE UNAVAIBLE INCREASE INSTANCE THIS APPROACH IS WITHOUT DOCKER
ai-launch-pad - is service name
gcloud run deploy ai-launch-pad --source . 