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
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      name: 'Demo-lition', 
      phone_number: '0123456789', 
      password: 'password'
    )
    # User.create!(
    #   name: 'Brittiny', 
    #   phone_number: '1113334444', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Jessica', 
    #   phone_number: '2222222222', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Ric', 
    #   phone_number: '0123412345', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'David', 
    #   phone_number: '5678900022', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Juila', 
    #   phone_number: '0128934842', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Mike', 
    #   phone_number: '5617283948', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Paulo', 
    #   phone_number: '0167890032', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Davis', 
    #   phone_number: '2000111678', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Shannon', 
    #   phone_number: '0123122349', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Swathi', 
    #   phone_number: '1011116789', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Queen', 
    #   phone_number: '0128933322', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Abby', 
    #   phone_number: '0123433777', 
    #   password: 'password'
    # )
    # User.create!(
    #   name: 'Eric', 
    #   phone_number: '0122222789', 
    #   password: 'password'
    # )

    # Event.create!(
    #   title: "Party!!",
    #   description: "Who doesn't love a party?! Last all party together!",
    #   location: "My house",
    #   capacity: 10,
    #   author_id: "1"
    # )
    # Event.create!(
    #   title: "Boo",
    #   description: "Halloween party, make sure to bring your costume!!",
    #   capacity: 20,
    #   author_id: "1"
    # )
    # Event.create!(
    #   title: "Bootastic",
    #   description: "Happy Spooky season. Get ready for spooking 
    #   drinks and food. There will be a costume contest so be sure to dress up!!",
    #   location: "444 MyPlace way San Francisco 90514",
    #   author_id: "2"
    # )
    # Event.create!(
    #   title: "Bootiful",
    #   description: "Party Party Party!!",
    #   location: "123 miracle st San Francisco 92132",
    #   capacity: 30,
    #   author_id: "3"
    # )
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
    # Event.create!(
    #   title: "House Warming Party!",
    #   description: "Hello everyone, I would like to invite you all 
    #   to my house to celebrate me becoming a home owner!! 🥳",
    #   location: "My sweet home",
    #   capacity: 7,
    #   author_id: "5"
    # )

    # Rsvp.create!(
    #   event_id: 1 ,
    #   user_id: 1,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 2,
    #   user_id: 1,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 6,
    #   user_id: 1,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 5,
    #   user_id: 1,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 6,
    #   user_id: 1,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 1,
    #   user_id: 8,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 1,
    #   user_id: 9,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 1,
    #   user_id: 3,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 1,
    #   user_id: 4,
    #   status: "Can't Go"
    # )
    # Rsvp.create!(
    #   event_id: 2 ,
    #   user_id: 14,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 2,
    #   user_id: 13,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 2,
    #   user_id: 9,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 2,
    #   user_id: 7,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 2,
    #   user_id: 8,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 3,
    #   user_id: 13,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 3,
    #   user_id: 4,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 3,
    #   user_id: 2,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 4,
    #   user_id: 3,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 4,
    #   user_id: 14,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 4,
    #   user_id: 5,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 4,
    #   user_id: 4,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 5,
    #   user_id: 4,
    #   status:  "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 5,
    #   user_id: 3,
    #   status:  "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 5,
    #   user_id: 11,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 6,
    #   user_id: 10,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 6,
    #   user_id: 12,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 6,
    #   user_id: 5,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 6,
    #   user_id: 7,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 7,
    #   user_id: 5,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 7,
    #   user_id: 7,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 7,
    #   user_id: 14,
    #   status: "I'm Going"
    # )
    # Rsvp.create!(
    #   event_id: 7,
    #   user_id: 12,
    #   status: "Maybe"
    # )
    # Rsvp.create!(
    #   event_id: 7,
    #   user_id: ,
    #   status: "Maybe"
    # )



  
    # More users
    10.times do 
      User.create!({
        name: Faker::Internet.unique.username(specifier: 3),
        phone_number: Faker::PhoneNumber.unique.cell_phone,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end