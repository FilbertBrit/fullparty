# README

[Live FullParty site](https://fullparty.onrender.com/)

FullParty, a Partiful clone, is a social media application that gives users a platform to plan social events. Through FullParty users can create events that guests can then rsvp for. This allows both user and guests to be up to date with all information from date, the location and time to who all is attending the event. As of now all users can view all events created on the platfrom through open invite tab, however my future plan is to allow events to only be available through an invite. 

## Jump to
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Dev environment setup](#dev-enviornment-setup)
- [Features](#features)
  - [Events](#events)
  - [RSVPs](#rsvps)
- [Future Directions](#future-directions)

## Technologies Used
<!-- - Javascript and React - frontend design composition
- Ruby on Rails and Jbuilder - backend data fetching API
- Redux - frontend state management
- PostgreSQL - backend relational database
- Render - web hosting platform -->

FullParty was built with:
- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Ruby](https://www.ruby-lang.org/en/)
- [Rails](https://rubyonrails.org/)
- [CSS](https://www.w3schools.com/css/) / [SCSS](https://sass-lang.com/)
- [HTML](https://www.w3schools.com/html/)
- [Postgresql](https://www.postgresql.org/)
<!-- - [Amazon Web Services](https://aws.amazon.com/free/?trk=fce796e8-4ceb-48e0-9767-89f7873fac3d&sc_channel=ps&ef_id=CjwKCAjwysipBhBXEiwApJOcu8p3w5r5euoPeg7Ka_X0mSE1K-Q3lOsbIBAQo3Ra0WvfJkZ6ko25GhoCqwkQAvD_BwE:G:s&s_kwcid=AL!4422!3!432339156147!e!!g!!amazon%20web%20services!1644045032!68366401812) -->
- [Render](https://render.com/)

# Dev environment setup

This project uses npm and node. To run FullParty locally, install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and run `npm start` for frontend and `rails s` for backend.

---
# Features

## Sign in or create an account

## Events, create, edit and delete

## RSVPs, rsvp going, can't go, maybe and edit choice

## Activity Log, includes rsvp status and comments

#### Code Snippets
#### Create/Edit Component Code:
```javascript
const handleSubmit = (e) => {
        e.preventDefault();
        event ? 
        (
            dispatch(eventActions.updateEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description, id: eventId})).then( res =>  history.push('/events/' + res.event.id))
        ) : 
        (
            dispatch(eventActions.createEvent({title, authorId: sessionUser.id, dateTime, location, capacity, cost, description})).then( res =>  history.push('/events/' + res.event.id))
        );
    }

    useEffect( () => {
        if(eventId) dispatch(fetchEvent(eventId)).then( payload => {
            setTitle(payload.event.title);
            setCapacity(payload.event.capacity);
            setLocation(payload.event.location);
            setCost(payload.event.cost);
            setDateTime(payload.event.dateTime);
            setDescription(payload.event.description);
        });

    }, [dispatch, eventId])

```
##### Explanation

---
### RSVPs

##### Code Snippets
#### Event JBuilder Code:
```ruby
rsvps = @event.rsvps.includes(:user)
userRsvp = nil;

rsvpArr = []
rsvpsGoing = 0;
rsvpsMaybye = 0;
rsvpsCant = 0;
available = @event.capacity || 0;

rsvps.each do |rsvp|
    rsvpArr.push(rsvp.id)
    if rsvp.status === "going" || rsvp.status === "I'm Going"
        rsvpsGoing += 1
        available -= 1
    end
    if rsvp.status === "Maybe" || rsvp.status === "maybe"
        rsvpsMaybye += 1
    end
    if rsvp.user_id === @current_user.id
        userRsvp = rsvp.id
    end
end

json.event do 
    json.extract! @event, :id, :title, :description, :location, :capacity, :cost
    json.dateTime @event.date_time ? @event.date_time.strftime("%A, %b %e %l%P") : @event.date_time
    json.host @event.user.name
    json.hostId @event.user.id
    json.rsvpList rsvpArr
    json.going rsvpsGoing
    json.maybe rsvpsMaybye
    json.cant rsvpsCant
    json.userRsvp userRsvp
    json.available available
end


json.rsvps do
    rsvps.each do |rsvp|
        json.set! rsvp.id do
        json.extract! rsvp, :id, :user_id, :status
        json.user rsvp.user.name
        end
    end
end
```
##### Slice of State handling
```javascript
const rsvpsReducer = (state = {}, action) => {
    const nextState = { ...state };
    switch (action.type) {
        case RECEIVE_EVENT:
            return {...nextState, ...action.payload.rsvps};
        case RECEIVE_RSVP:
            return {...state, [action.rsvp.id]: action.rsvp};
        default:
            return state;
    }
}
```
##### Challenge

##### Explanation
The jbuilder handles RSVPs fetches through associations, I collect a collection of rsvp associated to current event. I iterated through this collection to store all ids and calculate the amount of going, maybe, and can't rsvps to store in the event slice of state that will all be used in the event's show page. Inside of the rsvpsReducer I update rsvps slice of state with the payload recieved from the event show jbuilder. 
---
## Future Directions
- Implementing invites.
- Implementing mutuals on index page.
- General quality and design improvements.