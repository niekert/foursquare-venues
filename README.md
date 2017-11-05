## See the app in action
https://foursquare-venues.surge.sh/

Please note that https is required for the current user's location to work

See the section below to run the app locally

## About this app
Foursquare venues is a small demo app to browse foursquare venues nearby a given location or search query.
It uses the foursquare venues API achieve this. Currently the app supports

- Listing venues from a search result
- Listing venues based on the user's location (by clicking the location icon)
- Show the venue including some pictures on the map when clicking one from the list

## Technical stack
This app is built using React and Redux along with style components. This stack allows for quick prototyping with a testable and scalable architecture. The project was bootstrapped with the fantastic [create-react-app](https://github.com/facebookincubator/create-react-app) but ejected because of the need for some additional features (async/await, Hot module reloading)

## Running the app locally
1. Clone this repo and cd to it
2. Create an .env.local file in the root of the app directory with the following content:
```
REACT_APP_FS_CLIENT_ID=<Your FourSquare app's client id>
REACT_APP_FS_CLIENT_SECRET=<Your FourSquare app's client secret>
REACT_APP_GOOGLE_MAPS_API_KEY=<Your google maps API key></Your>
```
3. run `yarn && yarn start`

## About the code
- It uses the "scenes" folder architecture. [This Medium Article](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) explains it in depth
- Even though the app is pretty small, I decided to use redux for state storge because it's easy to implement, prevents you from passing down props all the way down (which is hard to read) and it makes the code easily testable
- Styled components is used to theme the app, one cool thing about this is that you can change colors in the "theme.js" file and they'll update everywhere. This makes it easy to implement different themes :)

## What's not finished
Obviously this app is not in a production ready state. I've decided to drop some things because it would take a lot of time implementing all of this, here's a list of those things:

- Details of a venue don't show up on mobile
- There is no proper error handling for API requests and the app doesn't show an error when it happend, the actions are implemented though.
- UI for the details of a venue are poor. I implemented the details view to better demonstrate the "scenes" folder architecture and the architecture of how state flows in a redux app like this.
- Not everything is tested. I've tested some aspects of the app (actions, reducers, containers and components) to demonstrate how they can be tested, getting more test coverage would only be more time consuming

