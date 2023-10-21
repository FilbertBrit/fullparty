# README

# FullParty
## Table of Contents
- [Overview](#overview)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Features](#features)
  - [Events](#events)
  - [RSVPs](#rsvps)
- [Future Directions](#future-directions)
---
## Overview
FullParty, a Partiful clone, is a social media application that gives users a platform to plan social events. Through FullParty users can create events that guests can then rsvp for. This allows both user and guests to upto date with all information regarding the date, from the location and time to who is all attending the event. As of now all users can view all events create on the platfrom through open invite tab, however my future plan is to allow events to only be available through an invite. 

---
## Live Demo
Check out the live website [here](https://fullparty.onrender.com/).
---
## Technologies Used
- React.js
- JavaScript
- Ruby on Rails
- Jbuilder
- PostgreSQL 15
---
## Features
### Events
#### Challenges

#### Solutions

#### Code Snippets
#### JBuilder Code:
```ruby

```
#### Products Controller Code:
```ruby

```
##### Explanation

---
### RSVPs
#### Challenges
I encountered a few challenges while implementing RSVPs. The first few challenges were deciding how to handle fetching existing RSVP data and how to handle RSVP inputs. As for the fetches, I initially was fetching both event information and RSVP information relating to the specific event. I was a bit unsure on what exaclty should be store in specific slices of state. An ongoing challenge I have is handling live RSVP inputs. When a user inputs a RSVP the event show page is not refreshed and it is up to me to update the slice of state to the event page would have the updated input. The show page displays details of how many guests have RSVP going, maybe or can't go which would not update since that event slice of state is calculate upon fetching in the jbuilder. 
#### Solutions
To solve the issues surrounding seeded or previous event/rsvp informtion, I relied on my associations and fetched rsvp information specific to current event through my event show jbuilder. This required me to simply deploy one actoin while population two slices of state, because every reducer is hit after an action I added the event action type to my rsvp reducer that allowed rsvp slice of state to update. My current solution for handling live RSVP inputs is to update the slice of state manually before adding it to the store inside of the eventReducer.
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
##### Explanation
The jbuilder handles RSVPs through associations, I collect a collection of rsvp associated to current event. With this collection I iterated through to store all ids and calculate the amount of going, maybe, and can't rsvps to store in the event slice of state that will all be used in the event's show page. Inside of the rsvpsReducer I update rsvps slice of state with the payload recieved from the event show jbuilder. 
---
## Future Directions
- Implementating invites.
- Refactoring the logic for accepting and handling rsvp inputs.
- Implementing an activity log that will consist of rsvp inputs and comments.
- Implementing mutuals index page.
- General quality and design improvements.