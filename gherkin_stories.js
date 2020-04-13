/*
 Feature: Create an event
  Scenario: User wants to create an event
  	Given the event title
      And the date
      And the location
      And the host's name
      And an $<event_password>
     When the user clicks create event
     Then the event is available to other users 
      And $<event_obj> is created
      
      
  Feature: Delete an event
  Scenario: An event is no longer to be held
  	Given the event title
      And the host name
      And $<event_password>
     When the user wants to delete an event they created
     Then the delete is removed from the system
     
  
  Feature: Join an event
  Scenario: Users want to discover and join events
  	Given the event name
     When the user clicks attend event
     Then event $<attendance_count> increases
      And User is added to $<attendance_list>

            
  Feature: Join an event, maybe
  Scenario: User is thinking about joining the event
  	Given the event name
     When the user clicks maybe attend event
     Then event $<maybe_attendance_count> increases
      And User is added to $<maybe_attendance_list>

      */
