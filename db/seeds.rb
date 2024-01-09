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


# Seed data for 10 events using Event.create!
events_seed_data = [
  {
    title: 'Tech Meetup',
    description: 'A meetup for tech enthusiasts.',
    location: 'Tech Hub',
    capacity: 20,
    cost: 5,
    date: DateTime.new(2024, 1, 15, 19, 0, 0),
    author_id: 1
  },
  {
    title: 'Cooking Class',
    description: 'Learn the art of cooking with professional chefs.',
    location: "Chef's Kitchen",
    capacity: 15,
    cost: 20,
    date: DateTime.new(2024, 1, 12, 17, 30, 0),
    author_id: 2
  },
  {
    title: 'Fitness Bootcamp',
    description: 'Get fit with intense workout sessions.',
    location: 'Fit Zone',
    capacity: 30,
    cost: 15,
    date: DateTime.new(2024, 2, 18, 8, 0, 0),
    author_id: 3
  },
  {
    title: 'Art Exhibition',
    description: 'Explore the world of art with amazing exhibits.',
    location: 'Art Gallery',
    capacity: 25,
    cost: 10,
    date: DateTime.new(2024, 1, 9, 18, 0, 0),
    author_id: 4
  },
  {
    title: 'Music Concert',
    description: 'Live performance by top artists in the music industry.',
    location: 'Concert Hall',
    capacity: 50,
    cost: 25,
    date: DateTime.new(2024, 4, 20, 20, 0, 0),
    author_id: 5
  },
  {
    title: 'Book Club Meeting',
    description: 'Discussing the latest novel and sharing book recommendations.',
    location: 'Library',
    capacity: 15,
    cost: 0,
    date: DateTime.new(2024, 1, 10, 18, 30, 0),
    author_id: 6
  },
  {
    title: 'Hiking Adventure',
    description: 'Explore nature on a thrilling hiking trip.',
    location: 'Mountain Trails',
    capacity: 12,
    cost: 5,
    date: DateTime.new(2024, 3, 4, 9, 0, 0),
    author_id: 7
  },
  {
    title: 'Fashion Show',
    description: 'Showcasing the latest trends in fashion.',
    location: 'Fashion Venue',
    capacity: 40,
    cost: 15,
    date: DateTime.new(2024, 5, 22, 19, 30, 0),
    author_id: 8
  },
  {
    title: 'Gaming Tournament',
    description: 'Compete in a gaming tournament with exciting prizes.',
    location: 'Gaming Arena',
    capacity: 30,
    cost: 10,
    date: DateTime.new(2024, 1, 14, 15, 0, 0),
    author_id: 9
  },
  {
    title: 'Dance Workshop',
    description: 'Learn dance moves from professional choreographers.',
    location: 'Dance Studio',
    capacity: 20,
    cost: 12,
    date: DateTime.new(2024, 2, 1, 17, 0, 0),
    author_id: 10
  }
]

# Creating events using Event.create!
events_seed_data.each do |event_data|
  Event.create!(
    title: event_data[:title],
    description: event_data[:description],
    location: event_data[:location],
    capacity: event_data[:capacity],
    cost: event_data[:cost],
    date_time: event_data[:date],
    author_id: event_data[:author_id]
  )
end


# Seed data for RSVPs using Rsvp.create!
rsvps_seed_data = [
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
    user_id: 6,
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
  }
]

# Creating RSVPs using Rsvp.create!
rsvps_seed_data.each do |rsvp_data|
  Rsvp.create!(
    event_id: rsvp_data[:event_id],
    user_id: rsvp_data[:user_id],
    status: rsvp_data[:status]
  )
end

    Event.create!(
      title: "Bootastic",
      description: "Happy Spooky season. Get ready for spooking 
      drinks and food. There will be a costume contest so be sure to dress up!!",
      location: "444 MyPlace way San Francisco 90514",
      author_id: "21"
    )

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
      author_id: 6,
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
    }
  ]

  # Creating comments using Comment.create!
  comments_seed_data.each do |comment_data|
    Comment.create!(
      body: comment_data[:body],
      comment_type: comment_data[:comment_type],
      author_id: comment_data[:author_id],
      event_id: comment_data[:event_id]
    )
  end

  # Seed data for comments using Comment.create!
  # comments_seed_data = [
    # {
    #   body: "Can't wait!",
    #   comment_type: "comment",
    #   author_id: 1,
    #   event_id: 10
    # },
    # {
    #   body: "Will know soon!",
    #   comment_type: "comment",
    #   author_id: 2,
    #   event_id: 9
    # },
    # {
    #   body: "Wish I could!",
    #   comment_type: "comment",
    #   author_id: 3,
    #   event_id: 8
    # },
    # {
    #   body: "Counting down the days!",
    #   comment_type: "comment",
    #   author_id: 4,
    #   event_id: 7
    # },
    # {
    #   body: "Hopefully I can attend!",
    #   comment_type: "comment",
    #   author_id: 5,
    #   event_id: 6
    # },
    # {
    #   body: "Unfortunately, I won't be able to make it.",
    #   comment_type: "comment",
    #   author_id: 6,
    #   event_id: 5
    # },
    # {
    #   body: "Excited to meet everyone!",
    #   comment_type: "comment",
    #   author_id: 7,
    #   event_id: 4
    # },
    # {
    #   body: "Preparing my outfit for the fashion show if I can make it!",
    #   comment_type: "comment",
    #   author_id: 8,
    #   event_id: 3
    # },
    # {
    #   body: "Wish I could!",
    #   comment_type: "comment",
    #   author_id: 9,
    #   event_id: 2
    # },
    # {
    #   body: "Ready to dance at the workshop!",
    #   comment_type: "comment",
    #   author_id: 10,
    #   event_id: 1
    # },
    # {
    #   body: "Will know soon!",
    #   comment_type: "comment",
    #   author_id: 11,
    #   event_id: 1
    # },
    # {
    #   body: "Hoping to make it to the next one!",
    #   comment_type: "comment",
    #   author_id: 12,
    #   event_id: 2
    # },
    # {
    #   body: "Can't wait!",
    #   comment_type: "comment",
    #   author_id: 13,
    #   event_id: 3
    # },
    # {
    #   body: "Looking forward to the art exhibition!",
    #   comment_type: "comment",
    #   author_id: 14,
    #   event_id: 4
    # },
    # {
    #   body: "Sad I will miss it!",
    #   comment_type: "comment",
    #   author_id: 15,
    #   event_id: 5
    # },
    # {
    #   body: "Can't wait!",
    #   comment_type: "comment",
    #   author_id: 16,
    #   event_id: 6
    # },
    # {
    #   body: "Enjoy the hiking adventure! Hope to make it.",
    #   comment_type: "comment",
    #   author_id: 17,
    #   event_id: 7
    # },
    # {
    #   body: "Wishing everyone a great time!",
    #   comment_type: "comment",
    #   author_id: 18,
    #   event_id: 8
    # },
    # {
    #   body: "Good luck to all participants in the gaming tournament! Will be there to support.",
    #   comment_type: "comment",
    #   author_id: 19,
    #   event_id: 9
    # },
    # {
    #   body: "Excited to learn new dance moves!",
    #   comment_type: "comment",
    #   author_id: 20,
    #   event_id: 10
    # }
  # ]

  # # Creating comments using Comment.create!
  # comments_seed_data.each do |comment_data|
  #   Comment.create!(
  #     body: comment_data[:body],
  #     comment_type: comment_data[:comment_type],
  #     author_id: comment_data[:author_id],
  #     event_id: comment_data[:event_id]
  #   )
  # end

  # puts "rsvps done"

  puts "Done!"
end