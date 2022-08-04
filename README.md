# Reddit clone 
## First Week Functionalities

*Set up DB to hold posts data
*Built framework for Site - pages, post submission page, modal, etc

## Expectations for finished project

- [Core]
  - A user should be able to create a new ticket and edit an existing a ticket.
    - [Stretch] There should be a page or modal for users to create new tickets.
    - [Stretch] A user should be able to create and edit the following fields on a ticket:
      - title {String}
      - description {String}
      - relatedTicketIds {uuid[]}
      - assignedToUserId {uuid}
      - status {String}
      - createdAt {Date}
      - createdById {uuid}
      - lastModified {Date}
      - lastUpdatedById {uuid}
  - A user should be able to delete a ticket.
  - A user should be able to see a list of their tickets.
    - [Stretch] The ticket list should be sortable and filterable.
    - [Stretch] The ticket list should be paginated.
    - [Stretch] If a user clicks a ticket title, it should bring up a quick edit modal of the ticket.

### Super Stretch Goals

- Add support for users to be part of an organization.
- Add support for admin users in an organization to have authorized privileges that basic users do not.
- A user should be able to attach a file to a ticket.
- Add support for users to add comments onto a ticket.
- Add support for users to tag other users in a comment.
- Integrate any third party API
