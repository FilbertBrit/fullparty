# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# db/seeds.rb

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Event.destroy_all
  Rsvp.destroy_all
  Comment.destroy_all
  Achievement.destroy_all
  Social.destroy_all
  Invite.destroy_all
  Notification.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('events')
  ApplicationRecord.connection.reset_pk_sequence!('rsvps')

  # debugger
  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:

  # Seed data for 20 users using User.create! for PostgreSQL

  users_seed_data = [
    {
      name: 'John Smith',
      phone_number: '1123456789',
      password: 'password'
    },
    {
      name: 'Emily Johnson',
      phone_number: '9210384756',
      password: 'password'
    },
    {
      name: 'Michael Davis',
      phone_number: '0987654321',
      password: 'password'
    },
    {
      name: 'Sarah Williams',
      phone_number: '1234451212',
      password: 'password'
    },
    {
      name: 'Robert Miller',
      phone_number: '0001234578',
      password: 'password'
    },
    {
      name: 'Jennifer Brown',
      phone_number: '7777121200',
      password: 'password'
    },
    {
      name: 'Daniel Wilson',
      phone_number: '1234098765',
      password: 'password'
    },
    {
      name: 'Olivia Moore',
      phone_number: '0987123456',
      password: 'password'
    },
    {
      name: 'William Taylor',
      phone_number: '6789102345',
      password: 'password'
    },
    {
      name: 'Ava Anderson',
      phone_number: '2345678901',
      password: 'password'
    },
    {
      name: 'James White',
      phone_number: '6712349805',
      password: 'password'
    },
    {
      name: 'Sophia Garcia',
      phone_number: '5678349012',
      password: 'password'
    },
    {
      name: 'Logan Martinez',
      phone_number: '1209563478',
      password: 'password'
    },
    {
      name: 'Emma Robinson',
      phone_number: '7823109456',
      password: 'password'
    },
    {
      name: 'Liam Hernandez',
      phone_number: '3489675213',
      password: 'password'
    },
    {
      name: 'Mia Nelson',
      phone_number: '0909878901',
      password: 'password'
    },
    {
      name: 'Jackson Adams',
      phone_number: '1209678900',
      password: 'password'
    },
    {
      name: 'Aria Hill',
      phone_number: '1118884444',
      password: 'password'
    },
    {
      name: 'Ethan Carter',
      phone_number: '3337777899',
      password: 'password'
    },
    {
      name: 'Isabella Turner',
      phone_number: '1000117777',
      password: 'password'
    }
  ]

  # Creating users using User.create!
  users_seed_data.each do |user_data|
    User.create!(
      name: user_data[:name],
      phone_number: user_data[:phone_number],
      password: user_data[:password]
    )
  end

  User.create!(
    name: 'Demo-lition', 
    phone_number: '0123456789', 
    password: 'password',
    bio: 'I LOVE TO PARTY'
  )

  puts('Users created!')

# Seed data for 10 events using Event.create!
events_seed_data = [
  {
    title: 'Tech Meetup',
    description: 'A meetup for tech enthusiasts.',
    location: 'Tech Hub',
    capacity: 20,
    cost: 5,
    date_time: DateTime.new(2024, 1, 15, 19, 0, 0),
    author_id: 1
  },
  {
    title: 'Cooking Class',
    description: 'Learn the art of cooking with professional chefs.',
    location: "Chef's Kitchen",
    capacity: 15,
    cost: 20,
    date_time: DateTime.new(2024, 1, 12, 17, 30, 0),
    author_id: 2
  },
  {
    title: 'Fitness Bootcamp',
    description: 'Get fit with intense workout sessions.',
    location: 'Fit Zone',
    capacity: 30,
    cost: 15,
    date_time: DateTime.new(2024, 2, 18, 8, 0, 0),
    author_id: 3
  },
  {
    title: 'Art Exhibition',
    description: 'Explore the world of art with amazing exhibits.',
    location: 'Art Gallery',
    capacity: 25,
    cost: 10,
    date_time: DateTime.new(2024, 1, 9, 18, 0, 0),
    author_id: 4
  },
  {
    title: 'Music Concert',
    description: 'Live performance by top artists in the music industry.',
    location: 'Concert Hall',
    capacity: 50,
    cost: 25,
    date_time: DateTime.new(2024, 4, 20, 20, 0, 0),
    author_id: 5
  },
  {
    title: 'Book Club Meeting',
    description: 'Discussing the latest novel and sharing book recommendations.',
    location: 'Library',
    capacity: 15,
    cost: 0,
    date_time: DateTime.new(2024, 1, 10, 18, 30, 0),
    author_id: 6
  },
  {
    title: 'Hiking Adventure',
    description: 'Explore nature on a thrilling hiking trip.',
    location: 'Mountain Trails',
    capacity: 12,
    cost: 5,
    date_time: DateTime.new(2024, 3, 4, 9, 0, 0),
    author_id: 7
  },
  {
    title: 'Fashion Show',
    description: 'Showcasing the latest trends in fashion.',
    location: 'Fashion Venue',
    capacity: 40,
    cost: 15,
    date_time: DateTime.new(2024, 5, 22, 19, 30, 0),
    author_id: 8
  },
  {
    title: 'Gaming Tournament',
    description: 'Compete in a gaming tournament with exciting prizes.',
    location: 'Gaming Arena',
    capacity: 30,
    cost: 10,
    date_time: DateTime.new(2024, 1, 14, 15, 0, 0),
    author_id: 9
  },
  {
    title: 'Dance Workshop',
    description: 'Learn dance moves from professional choreographers.',
    location: 'Dance Studio',
    capacity: 20,
    cost: 12,
    date_time: DateTime.new(2024, 2, 1, 17, 0, 0),
    author_id: 10
  },
  {
    title: 'Movie Night',
    description: 'Enjoy a screening of classic movies under the stars.',
    location: 'Outdoor Cinema',
    capacity: 40,
    cost: 8,
    date_time: DateTime.new(2024, 3, 10, 20, 0, 0),
    author_id: 11
  },
  {
    title: 'Photography Workshop',
    description: 'Learn photography techniques from professional photographers.',
    location: 'Photography Studio',
    capacity: 25,
    cost: 18,
    date_time: DateTime.new(2024, 4, 5, 14, 0, 0),
    author_id: 12
  },
  {
    title: 'Yoga Retreat',
    description: 'Relax and rejuvenate with yoga sessions in a serene setting.',
    location: 'Retreat Center',
    capacity: 30,
    cost: 30,
    date_time: DateTime.new(2024, 2, 20, 9, 30, 0),
    author_id: 13
  },
  {
    title: 'Science Fair',
    description: 'Explore fascinating science experiments and demonstrations.',
    location: 'Science Museum',
    capacity: 50,
    cost: 12,
    date_time: DateTime.new(2024, 3, 25, 11, 0, 0),
    author_id: 14
  },
  {
    title: 'Craft Beer Tasting',
    description: 'Sample a variety of craft beers from local breweries.',
    location: 'Brewery',
    capacity: 20,
    cost: 15,
    date_time: DateTime.new(2024, 4, 15, 18, 30, 0),
    author_id: 15
  },
  {
    title: 'Pet Adoption Event',
    description: 'Meet adorable pets looking for their forever homes.',
    location: 'Animal Shelter',
    capacity: 15,
    cost: 5,
    date_time: DateTime.new(2024, 2, 8, 12, 0, 0),
    author_id: 16
  },
  {
    title: 'Culinary Tour',
    description: 'Experience a culinary journey through the city’s best eateries.',
    location: 'Various Restaurants',
    capacity: 35,
    cost: 25,
    date_time: DateTime.new(2024, 5, 1, 19, 0, 0),
    author_id: 17
  },
  {
    title: 'Artisan Market',
    description: 'Shop unique handmade crafts and artisanal products.',
    location: 'Market Square',
    capacity: 30,
    cost: 10,
    date_time: DateTime.new(2024, 3, 12, 10, 0, 0),
    author_id: 18
  },
  {
    title: 'Charity Gala',
    description: 'Support a good cause at an elegant charity gala event.',
    location: 'Grand Ballroom',
    capacity: 100,
    cost: 50,
    date_time: DateTime.new(2024, 4, 28, 19, 30, 0),
    author_id: 19
  },
  {
    title: 'Car Show',
    description: 'View classic and exotic cars on display at the annual car show.',
    location: 'Exhibition Center',
    capacity: 50,
    cost: 10,
    date_time: DateTime.new(2024, 5, 5, 11, 0, 0),
    author_id: 20
  }
]

# Creating events using Event.create!
events_seed_data.each do |event_data|
  # Event.create!(
  #   title: event_data[:title],
  #   description: event_data[:description],
  #   location: event_data[:location],
  #   capacity: event_data[:capacity],
  #   cost: event_data[:cost],
  #   date_time: event_data[:date],
  #   author_id: event_data[:author_id]
  # )
  Event.create!(event_data)
end

Event.create!(
  title: "Bootastic",
  description: "Happy Spooky season. Get ready for spooking 
  drinks and food. There will be a costume contest so be sure to dress up!!",
  location: "444 MyPlace way San Francisco 90514",
  author_id: "21"
)

puts('events created!')

# Seed data for RSVPs using Rsvp.create!
rsvps_seed_data = [
  {
    event_id: 1,
    user_id: 1,
    status: "I'm Going"
  },
  {
    event_id: 2,
    user_id: 2,
    status: "I'm Going"
  },
  {
    event_id: 3,
    user_id: 3,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 4,
    status: "I'm Going"
  },
  {
    event_id: 5,
    user_id: 5,
    status: "I'm Going"
  },
  {
    event_id: 6,
    user_id: 6,
    status: "I'm Going"
  },
  {
    event_id: 7,
    user_id: 7,
    status: "I'm Going"
  },{
    event_id: 8,
    user_id: 8,
    status: "I'm Going"
  },
  {
    event_id: 9,
    user_id: 9,
    status: "I'm Going"
  },
  {
    event_id: 10,
    user_id: 10,
    status: "I'm Going"
  },
  {
    event_id: 11,
    user_id: 11,
    status: "I'm Going"
  },
  {
    event_id: 12,
    user_id: 12,
    status: "I'm Going"
  },
  {
    event_id: 13,
    user_id: 13,
    status: "I'm Going"
  },{
    event_id: 14,
    user_id: 14,
    status: "I'm Going"
  },
  {
    event_id: 15,
    user_id: 15,
    status: "I'm Going"
  },{
    event_id: 16,
    user_id: 16,
    status: "I'm Going"
  },
  {
    event_id: 17,
    user_id: 17,
    status: "I'm Going"
  },
  {
    event_id: 18,
    user_id: 18,
    status: "I'm Going"
  },
  {
    event_id: 19,
    user_id: 19,
    status: "I'm Going"
  },
  {
    event_id: 20,
    user_id: 20,
    status: "I'm Going"
  },
  {
    event_id: 10,
    user_id: 1,
    status: "I'm Going"
  },
  {
    event_id: 10,
    user_id: 2,
    status: "I'm Going"
  },
  {
    event_id: 9,
    user_id: 2,
    status: 'Maybe'
  },
  {
    event_id: 9,
    user_id: 3,
    status: "I'm Going"
  },
  {
    event_id: 8,
    user_id: 3,
    status: "Can't Go"
  },
  {
    event_id: 8,
    user_id: 4,
    status: 'Maybe'
  },
  {
    event_id: 7,
    user_id: 4,
    status: "I'm Going"
  },
  {
    event_id: 7,
    user_id: 5,
    status: "I'm Going"
  },
  {
    event_id: 6,
    user_id: 5,
    status: 'Maybe'
  },
  {
    event_id: 6,
    user_id: 7,
    status: "I'm Going"
  },
  {
    event_id: 6,
    user_id: 1,
    status: 'Maybe'
  },
  {
    event_id: 6,
    user_id: 2,
    status: "I'm Going"
  },
  {
    event_id: 6,
    user_id: 10,
    status: 'Maybe'
  },
  {
    event_id: 6,
    user_id: 11,
    status: "I'm Going"
  },
  {
    event_id: 6,
    user_id: 18,
    status: 'Maybe'
  },
  {
    event_id: 6,
    user_id: 21,
    status: "I'm Going"
  },
  {
    event_id: 6,
    user_id: 12,
    status: 'Maybe'
  },
  {
    event_id: 6,
    user_id: 4,
    status: "I'm Going"
  },
  {
    event_id: 5,
    user_id: 11,
    status: "Can't Go"
  },
  {
    event_id: 5,
    user_id: 7,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 7,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 8,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 1,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 2,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 3,
    status: "Maybe"
  },
  {
    event_id: 4,
    user_id: 21,
    status: "I'm Going"
  },
  {
    event_id: 3,
    user_id: 8,
    status: 'Maybe'
  },
  {
    event_id: 3,
    user_id: 9,
    status: "I'm Going"
  },
  {
    event_id: 2,
    user_id: 9,
    status: "Can't Go"
  },
  {
    event_id: 2,
    user_id: 10,
    status: 'Maybe'
  },
  {
    event_id: 1,
    user_id: 10,
    status: "I'm Going"
  },
  {
    event_id: 1,
    user_id: 11,
    status: 'Maybe'
  },
  {
    event_id: 2,
    user_id: 12,
    status: "Can't Go"
  },
  {
    event_id: 3,
    user_id: 13,
    status: "I'm Going"
  },
  {
    event_id: 4,
    user_id: 14,
    status: 'Maybe'
  },
  {
    event_id: 5,
    user_id: 15,
    status: "Can't Go"
  },
  {
    event_id: 6,
    user_id: 16,
    status: "I'm Going"
  },
  {
    event_id: 7,
    user_id: 17,
    status: 'Maybe'
  },
  {
    event_id: 8,
    user_id: 18,
    status: "Can't Go"
  },
  {
    event_id: 9,
    user_id: 19,
    status: "I'm Going"
  },
  {
    event_id: 10,
    user_id: 20,
    status: 'Maybe'
  },
  # Event ID 11 - RSVPs and Comments
  {
    event_id: 11,
    user_id: 1,
    status: "Can't Go"
  },
  {
    event_id: 11,
    user_id: 2,
    status: "I'm Going"
  },
  {
    event_id: 11,
    user_id: 3,
    status: 'Maybe'
  },
  {
    event_id: 11,
    user_id: 5,
    status: "Can't Go"
  },
  {
    event_id: 11,
    user_id: 7,
    status: "I'm Going"
  },
  {
    event_id: 11,
    user_id: 21,
    status: 'Maybe'
  },

  # Event ID 12 - RSVPs and Comments
  {
    event_id: 12,
    user_id: 4,
    status: "I'm Going"
  },
  {
    event_id: 12,
    user_id: 5,
    status: "Can't Go"
  },
  {
    event_id: 12,
    user_id: 6,
    status: 'Maybe'
  },
  {
    event_id: 12,
    user_id: 2,
    status: "I'm Going"
  },
  {
    event_id: 12,
    user_id: 17,
    status: "Can't Go"
  },
  {
    event_id: 12,
    user_id: 13,
    status: 'Maybe'
  },

  # Event ID 13 - RSVPs and Comments
  {
    event_id: 13,
    user_id: 7,
    status: 'Maybe'
  },
  {
    event_id: 13,
    user_id: 8,
    status: "I'm Going"
  },
  {
    event_id: 13,
    user_id: 9,
    status: "Can't Go"
  },
  {
    event_id: 13,
    user_id: 10,
    status: 'Maybe'
  },
  {
    event_id: 13,
    user_id: 21,
    status: "I'm Going"
  },
  {
    event_id: 13,
    user_id: 15,
    status: "Can't Go"
  },

  # Event ID 14 - RSVPs and Comments
  {
    event_id: 14,
    user_id: 10,
    status: "Can't Go"
  },
  {
    event_id: 14,
    user_id: 11,
    status: "I'm Going"
  },
  {
    event_id: 14,
    user_id: 12,
    status: 'Maybe'
  },

  # Event ID 15 - RSVPs and Comments
  {
    event_id: 15,
    user_id: 13,
    status: "I'm Going"
  },
  {
    event_id: 15,
    user_id: 14,
    status: "Can't Go"
  },
  {
    event_id: 15,
    user_id: 10,
    status: 'Maybe'
  },

  # Event ID 16 - RSVPs and Comments
  {
    event_id: 16,
    user_id: 21,
    status: "Can't Go"
  },
  {
    event_id: 16,
    user_id: 17,
    status: "I'm Going"
  },
  {
    event_id: 16,
    user_id: 18,
    status: 'Maybe'
  },

  # Event ID 17 - RSVPs and Comments
  {
    event_id: 17,
    user_id: 19,
    status: 'Maybe'
  },
  {
    event_id: 17,
    user_id: 20,
    status: "I'm Going"
  },
  {
    event_id: 17,
    user_id: 21,
    status: "Can't Go"
  },

  # Event ID 18 - RSVPs and Comments
  {
    event_id: 18,
    user_id: 1,
    status: "I'm Going"
  },
  {
    event_id: 18,
    user_id: 2,
    status: "Can't Go"
  },
  {
    event_id: 18,
    user_id: 3,
    status: 'Maybe'
  },

  # Event ID 19 - RSVPs and Comments
  {
    event_id: 19,
    user_id: 4,
    status: "Can't Go"
  },
  {
    event_id: 19,
    user_id: 5,
    status: "I'm Going"
  },
  {
    event_id: 19,
    user_id: 6,
    status: 'Maybe'
  },

  # Event ID 20 - RSVPs and Comments
  {
    event_id: 20,
    user_id: 7,
    status: "I'm Going"
  },
  {
    event_id: 20,
    user_id: 8,
    status: "Can't Go"
  },
  {
    event_id: 20,
    user_id: 9,
    status: 'Maybe'
  }
]

# Creating RSVPs using Rsvp.create!
rsvps_seed_data.each do |rsvp_data|
  # Rsvp.create!(
  #   event_id: rsvp_data[:event_id],
  #   user_id: rsvp_data[:user_id],
  #   status: rsvp_data[:status]
  # )
  Rsvp.create!(rsvp_data)
end


    # Event.create!(
    #   title: "Going away party!",
    #   description: "Hi guys, sadly I am moving back home. But this gives 
    #   us an excuse to all party togther. So join me in one last hurrah! 🤗",
    #   location: "321 24th ave San Francisco 94119",
    #   author_id: "4"
    # )
    # Event.create!(
    #   title: "New Years Party!!",
    #   description: "Hey everyone, lets end the year right!! Lets celebrate 
    #   all together! There will be music and drinks available to purchase!",
    #   location: "Union Square",
    #   cost: 15,
    #   author_id: "1"
    # )
    # # debugger
    
    # Event.create!(
    #   title: "House Warming Party!",
    #   description: "Hello everyone, I would like to invite you all 
    #   to my house to celebrate me becoming a home owner!! 🥳",
    #   location: "My sweet home",
    #   capacity: 7,
    #   author_id: "5"
    # )


    # Seed data for comments using Comment.create!
  comments_seed_data = [
    {
    event_id: 1,
    user_id: 1,
    body: "I'm Going",
    comment_type: "rsvp"
    },
    {
    event_id: 1,
    user_id: 1,
    body: "Hope you all can join!",
    comment_type: "comment"
    },
    {
      event_id: 2,
      user_id: 2,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
    event_id: 2,
    user_id: 2,
    body: "Can't wait to see you all",
    comment_type: "comment"
    },
    {
      event_id: 3,
      user_id: 3,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 3,
      user_id: 3,
      body: "Please join me!",
      comment_type: "comment"
    },
    {
      event_id: 4,
      user_id: 4,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 4,
      user_id: 4,
      body: "Looking forward to see you all",
      comment_type: "comment"
    },
    {
      event_id: 5,
      user_id: 5,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
    event_id: 5,
    user_id: 5,
    body: "Hope you all can join!",
    comment_type: "comment"
    },
    {
      event_id: 6,
      user_id: 6,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
    event_id: 6,
    user_id: 6,
    body: "Can't wait to see you all",
    comment_type: "comment"
    },
    {
      event_id: 7,
      user_id: 7,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 7,
      user_id: 7,
      body: "Please join me!",
      comment_type: "comment"
    },
    {
      event_id: 8,
      user_id: 8,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 8,
      user_id: 8,
      body: "Looking forward to see you all",
      comment_type: "comment"
    },
    {
      event_id: 9,
      user_id: 9,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 9,
      user_id: 9,
      body: "Hope you all can join!",
      comment_type: "comment"
    },
    {
      event_id: 10,
      user_id: 10,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 10,
      user_id: 10,
      body: "Can't wait to see you all",
      comment_type: "comment"
    },
    {
      event_id: 11,
      user_id: 11,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 11,
      user_id: 11,
      body: "Please join me!",
      comment_type: "comment"
    },
    {
      event_id: 12,
      user_id: 12,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
    event_id: 12,
    user_id: 12,
    body: "Hope you all can join!",
    comment_type: "comment"
    },
    {
      event_id: 13,
      user_id: 13,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 13,
      user_id: 13,
      body: "Can't wait to see you all",
      comment_type: "comment"
    },
    {
      event_id: 14,
      user_id: 14,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 14,
      user_id: 14,
      body: "Please join me!",
      comment_type: "comment"
    },
    {
      event_id: 15,
      user_id: 15,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
    event_id: 15,
    user_id: 15,
    body: "Hope you all can join!",
    comment_type: "comment"
    },
    {
      event_id: 16,
      user_id: 16,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 16,
      user_id: 16,
      body: "Can't wait to see you all",
      comment_type: "comment"
    },
    {
      event_id: 17,
      user_id: 17,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 17,
      user_id: 17,
      body: "Hope you all can join!",
      comment_type: "comment"
    },
    {
      event_id: 18,
      user_id: 18,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 18,
      user_id: 18,
      body: "Hope you all can join!",
      comment_type: "comment"
    },
    {
      event_id: 19,
      user_id: 19,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 19,
      user_id: 19,
      body: "Can't wait to see you all",
      comment_type: "comment"
    },
    {
      event_id: 20,
      user_id: 20,
      body: "I'm Going",
      comment_type: "rsvp"
    },
    {
      event_id: 20,
      user_id: 20,
      body: "Please join me!",
      comment_type: "comment"
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 1,
      event_id: 10
    },
    {
      body: "Can't wait!",
      comment_type: "comment",
      author_id: 1,
      event_id: 10
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 10
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 9
    },
    {
      body: "Will know soon!",
      comment_type: "comment",
      author_id: 2,
      event_id: 9
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 3,
      event_id: 9
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 3,
      event_id: 8
    },
    {
      body: "Wish I could!",
      comment_type: "comment",
      author_id: 3,
      event_id: 8
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 4,
      event_id: 8
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 4,
      event_id: 7
    },
    {
      body: "Counting down the days!",
      comment_type: "comment",
      author_id: 4,
      event_id: 7
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 5,
      event_id: 7
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 5,
      event_id: 6
    },
    {
      body: "Hopefully I can attend!",
      comment_type: "comment",
      author_id: 5,
      event_id: 6
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 7,
      event_id: 6
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 1,
      event_id: 6
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 6
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 10,
      event_id: 6
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 11,
      event_id: 6
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 18,
      event_id: 6
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 21,
      event_id: 6
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 12,
      event_id: 6
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 4,
      event_id: 6
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 11,
      event_id: 5
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 7,
      event_id: 5
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 7,
      event_id: 4
    },
    {
      body: "Excited to meet everyone!",
      comment_type: "comment",
      author_id: 7,
      event_id: 4
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 8,
      event_id: 4
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 1,
      event_id: 4
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 4
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 3,
      event_id: 4
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 21,
      event_id: 4
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 8,
      event_id: 3
    },
    {
      body: "Preparing my outfit for the fashion show if I can make it!",
      comment_type: "comment",
      author_id: 8,
      event_id: 3
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 9,
      event_id: 3
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 9,
      event_id: 2
    },
    {
      body: "Wish I could!",
      comment_type: "comment",
      author_id: 9,
      event_id: 2
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 10,
      event_id: 2
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 10,
      event_id: 1
    },
    {
      body: "Ready to dance at the workshop!",
      comment_type: "comment",
      author_id: 10,
      event_id: 1
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 11,
      event_id: 1
    },
    {
      body: "Will know soon!",
      comment_type: "comment",
      author_id: 11,
      event_id: 1
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 12,
      event_id: 2
    },
    {
      body: "Hoping to make it to the next one!",
      comment_type: "comment",
      author_id: 12,
      event_id: 2
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 13,
      event_id: 3
    },
    {
      body: "Can't wait!",
      comment_type: "comment",
      author_id: 13,
      event_id: 3
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 14,
      event_id: 4
    },
    {
      body: "Looking forward to the art exhibition!",
      comment_type: "comment",
      author_id: 14,
      event_id: 4
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 15,
      event_id: 5
    },
    {
      body: "Sad I will miss it!",
      comment_type: "comment",
      author_id: 15,
      event_id: 5
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 16,
      event_id: 6
    },
    {
      body: "Can't wait!",
      comment_type: "comment",
      author_id: 16,
      event_id: 6
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 17,
      event_id: 7
    },
    {
      body: "Enjoy the hiking adventure! Hope to make it.",
      comment_type: "comment",
      author_id: 17,
      event_id: 7
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 18,
      event_id: 8
    },
    {
      body: "Wishing everyone a great time!",
      comment_type: "comment",
      author_id: 18,
      event_id: 8
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 19,
      event_id: 9
    },
    {
      body: "Good luck to all participants in the gaming tournament! Will be there to support.",
      comment_type: "comment",
      author_id: 19,
      event_id: 9
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 20,
      event_id: 10
    },
    {
      body: "Excited to learn new dance moves!",
      comment_type: "comment",
      author_id: 20,
      event_id: 10
    },
    # Event ID 11 - Comments
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 1,
      event_id: 11
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 11
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 3,
      event_id: 11
    },
    {
      body: "Wish I could make it!",
      comment_type: "comment",
      author_id: 1,
      event_id: 11
    },
    {
      body: "Can't wait!!",
      comment_type: "comment",
      author_id: 2,
      event_id: 11
    },
    {
      body: 'I think I can make it.',
      comment_type: "comment",
      author_id: 3,
      event_id: 11
    },

    # Event ID 12 - Comments
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 4,
      event_id: 12
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 5,
      event_id: 12
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 6,
      event_id: 12
    },
    {
      body: "Excited!!",
      comment_type: "comment",
      author_id: 4,
      event_id: 12
    },
    {
      body: "Very sad to miss it!",
      comment_type: "comment",
      author_id: 5,
      event_id: 12
    },
    {
      body: 'I hope to be there!',
      comment_type: "comment",
      author_id: 6,
      event_id: 12
    },

    # Event ID 13 - Comments
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 7,
      event_id: 13
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 8,
      event_id: 13
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 9,
      event_id: 13
    },
    {
      body: 'I should know soon.',
      comment_type: "comment",
      author_id: 7,
      event_id: 13
    },
    {
      body: "whoo",
      comment_type: "comment",
      author_id: 8,
      event_id: 13
    },
    {
      body: "I will be at the next one!",
      comment_type: "comment",
      author_id: 9,
      event_id: 13
    },

    # Event ID 14 - Comments
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 10,
      event_id: 14
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 11,
      event_id: 14
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 12,
      event_id: 14
    },
    {
      body: "Next time!",
      comment_type: "comment",
      author_id: 10,
      event_id: 14
    },
    {
      body: "Excited!!",
      comment_type: "comment",
      author_id: 11,
      event_id: 14
    },
    {
      body: 'Hope to be there.',
      comment_type: "comment",
      author_id: 12,
      event_id: 14
    },

    # Event ID 15 - Comments
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 13,
      event_id: 15
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 14,
      event_id: 15
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 15,
      event_id: 15
    },
    {
      body: "Yay",
      comment_type: "comment",
      author_id: 13,
      event_id: 15
    },
    {
      body: "Next time!",
      comment_type: "comment",
      author_id: 14,
      event_id: 15
    },
    {
      body: 'I think I will be there',
      comment_type: "comment",
      author_id: 15,
      event_id: 15
    },

    # Event ID 16 - Comments
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 16,
      event_id: 16
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 17,
      event_id: 16
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 18,
      event_id: 16
    },
    {
      body: "Sadly won't be there",
      comment_type: "comment",
      author_id: 16,
      event_id: 16
    },
    {
      body: "Excited!",
      comment_type: "comment",
      author_id: 17,
      event_id: 16
    },
    {
      body: 'I hope to be there',
      comment_type: "comment",
      author_id: 18,
      event_id: 16
    },
    # Event ID 17 - Comments
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 19,
      event_id: 17
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 20,
      event_id: 17
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 21,
      event_id: 17
    },
    {
      body: "I might be there",
      comment_type: "comment",
      author_id: 19,
      event_id: 17
    },
    {
      body: "YAY",
      comment_type: "comment",
      author_id: 20,
      event_id: 17
    },
    {
      body: 'sadly will have to miss out on this',
      comment_type: "comment",
      author_id: 21,
      event_id: 17
    },
    # Event ID 18 - Comments
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 1,
      event_id: 18
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 18
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 3,
      event_id: 18
    },
    {
      body: "YAY",
      comment_type: "comment",
      author_id: 1,
      event_id: 18
    },
    {
      body: "Sad to miss this one",
      comment_type: "comment",
      author_id: 2,
      event_id: 18
    },
    {
      body: 'Will know soon',
      comment_type: "comment",
      author_id: 3,
      event_id: 18
    },
    # Event ID 17 - Comments
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 19,
      event_id: 17
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 20,
      event_id: 17
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 21,
      event_id: 17
    },
    {
      body: "Hope to see you all there",
      comment_type: "comment",
      author_id: 19,
      event_id: 17
    },
    {
      body: "YAY",
      comment_type: "comment",
      author_id: 20,
      event_id: 17
    },
    {
      body: 'I will miss this one',
      comment_type: "comment",
      author_id: 21,
      event_id: 17
    },
    # Event ID 18 - Comments
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 1,
      event_id: 18
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 2,
      event_id: 18
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 3,
      event_id: 18
    },
    {
      body: "Excited!",
      comment_type: "comment",
      author_id: 1,
      event_id: 18
    },
    {
      body: "Sad to miss this",
      comment_type: "comment",
      author_id: 2,
      event_id: 18
    },
    {
      body: 'I hope to be there',
      comment_type: "comment",
      author_id: 3,
      event_id: 18
    },
    # Event ID 19 - Comments
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 4,
      event_id: 19
    },
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 5,
      event_id: 19
    },
    {
      body: "Maybe",
      comment_type: "rsvp",
      author_id: 6,
      event_id: 19
    },
    {
      body: "Sad to miss this one",
      comment_type: "comment",
      author_id: 4,
      event_id: 19
    },
    {
      body: "YAY",
      comment_type: "comment",
      author_id: 5,
      event_id: 19
    },
    {
      body: 'Will know soon',
      comment_type: "comment",
      author_id: 6,
      event_id: 19
    },
    # Event ID 20 - Comments
    {
      body: "I'm Going",
      comment_type: "rsvp",
      author_id: 7,
      event_id: 20
    },
    {
      body: "Can't Go",
      comment_type: "rsvp",
      author_id: 8,
      event_id: 20
    },
    {
      body: 'Maybe',
      comment_type: "rsvp",
      author_id: 9,
      event_id: 20
    },
    {
      body: "Will be there!",
      comment_type: "comment",
      author_id: 7,
      event_id: 20
    },
    {
      body: "Next Time!!",
      comment_type: "comment",
      author_id: 8,
      event_id: 20
    },
    {
      body: 'fingers crossed I can make it.',
      comment_type: "comment",
      author_id: 9,
      event_id: 20
    }
  ]
  
  # Creating comments using Comment.create!
  comments_seed_data.each do |comment_data|
    # Comment.create!(
      #   body: comment_data[:body],
      #   comment_type: comment_data[:comment_type],
      #   author_id: comment_data[:author_id],
      #   event_id: comment_data[:event_id]
      # )
    Comment.create!(comment_data)
  end
  puts 'comments created'

  invite_seed_data = [
  # Event ID 11 - Invites and Notifications
  {
    event_id: 11,
    sender_id: 1,
    receiver_id: 4
  },
  {
    event_id: 11,
    sender_id: 1,
    receiver_id: 21
  },
  {
    event_id: 11,
    sender_id: 2,
    receiver_id: 10
  },

  # Event ID 12 - Invites and Notifications
  {
    event_id: 12,
    sender_id: 4,
    receiver_id: 3
  },
  {
    event_id: 12,
    sender_id: 5,
    receiver_id: 7
  },
  {
    event_id: 12,
    sender_id: 4,
    receiver_id: 21
  },

  # Event ID 13 - Invites and Notifications
  {
    event_id: 13,
    sender_id: 7,
    receiver_id: 6
  },
  {
    event_id: 13,
    sender_id: 7,
    receiver_id: 11
  },
  {
    event_id: 13,
    sender_id: 7,
    receiver_id: 14
  },

  # Event ID 14 - Invites and Notifications
  {
    event_id: 14,
    sender_id: 10,
    receiver_id: 8
  },
  {
    event_id: 14,
    sender_id: 10,
    receiver_id: 9
  },
  {
    event_id: 14,
    sender_id: 11,
    receiver_id: 7
  },

  # Event ID 15 - Invites and Notifications
  {
    event_id: 15,
    sender_id: 13,
    receiver_id: 11
  },
  {
    event_id: 15,
    sender_id: 14,
    receiver_id: 12
  },
  {
    event_id: 15,
    sender_id: 10,
    receiver_id: 9
  },

  # Event ID 16 - Invites and Notifications
  {
    event_id: 16,
    sender_id: 21,
    receiver_id: 12
  },
  {
    event_id: 16,
    sender_id: 21,
    receiver_id: 13
  },
  {
    event_id: 16,
    sender_id: 17,
    receiver_id: 11
  },

  # Event ID 17 - Invites and Notifications
  {
    event_id: 17,
    sender_id: 19,
    receiver_id: 14
  },
  {
    event_id: 17,
    sender_id: 19,
    receiver_id: 15
  },
  {
    event_id: 17,
    sender_id: 19,
    receiver_id: 13
  },

  # Event ID 18 - Invites and Notifications
  {
    event_id: 18,
    sender_id: 1,
    receiver_id: 16
  },
  {
    event_id: 18,
    sender_id: 1,
    receiver_id: 17
  },
  {
    event_id: 18,
    sender_id: 1,
    receiver_id: 15
  },

  # Event ID 19 - Invites and Notifications
  {
    event_id: 19,
    sender_id: 4,
    receiver_id: 18
  },
  {
    event_id: 19,
    sender_id: 5,
    receiver_id: 19
  },
  {
    event_id: 19,
    sender_id: 6,
    receiver_id: 17
  },

  # Event ID 20 - Invites and Notifications
  {
    event_id: 20,
    sender_id: 9,
    receiver_id: 20
  },
  {
    event_id: 20,
    sender_id: 9,
    receiver_id: 21
  },
  {
    event_id: 20,
    sender_id: 9,
    receiver_id: 19
  }
]

# Create Invites with the updated seed data
invite_seed_data.each do |invite_data|
  Invite.create!(invite_data)
end


notification_seed_data = [
  # Event ID 11 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 4,
    sender_id: 1,
    event_id: 11
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 21,
    sender_id: 1,
    event_id: 11
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 10,
    sender_id: 2,
    event_id: 11
  },

  # Event ID 12 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 3,
    sender_id: 4,
    event_id: 12
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 7,
    sender_id: 5,
    event_id: 12
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 21,
    sender_id: 4,
    event_id: 12
  },

  # Event ID 13 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 6,
    sender_id: 7,
    event_id: 13
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 11,
    sender_id: 7,
    event_id: 13
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 14,
    sender_id: 7,
    event_id: 13
  },

  # Event ID 14 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 8,
    sender_id: 10,
    event_id: 14
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 9,
    sender_id: 10,
    event_id: 14
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 7,
    sender_id: 11,
    event_id: 14
  },

  # Event ID 15 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 15,
    sender_id: 13,
    event_id: 15
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 12,
    sender_id: 14,
    event_id: 15
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 9,
    sender_id: 10,
    event_id: 15
  },

  # Event ID 16 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 12,
    sender_id: 21,
    event_id: 16
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 13,
    sender_id: 21,
    event_id: 16
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 16,
    sender_id: 17,
    event_id: 16
  },

  # Event ID 17 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 14,
    sender_id: 19,
    event_id: 17
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 15,
    sender_id: 19,
    event_id: 17
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 13,
    sender_id: 19,
    event_id: 17
  },

  # Event ID 18 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 16,
    sender_id: 1,
    event_id: 18
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 17,
    sender_id: 1,
    event_id: 18
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 15,
    sender_id: 1,
    event_id: 18
  },

  # Event ID 19 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 18,
    sender_id: 4,
    event_id: 19
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 19,
    sender_id: 5,
    event_id: 19
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 17,
    sender_id: 6,
    event_id: 19
  },
  # Event ID 20 - Notifications
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 20,
    sender_id: 9,
    event_id: 20
  },
  {
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 21,
    sender_id: 9,
    event_id: 20
  },{
    notification_type: 'invite',
    content: 'inviting',
    receiver_id: 19,
    sender_id: 9,
    event_id: 20
  }
  ]


  puts "Done!"
end