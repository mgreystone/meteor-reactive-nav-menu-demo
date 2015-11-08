Meteor.startup(() => {
  const menu = ReactiveMenu.createMenu({ id: 'mailbox' })

  const mailbox = menu.addItem({
    id: 'mailbox',
    title: 'Mailbox'
  })

  mailbox.addItem({
    id: 'inbox',
    title: 'Inbox',
    url: '#inbox'
  })

  mailbox.addItem({
    id: 'outbox',
    title: 'Outbox',
    url: '#outbox'
  })

  mailbox.addItem({
    id: 'sent',
    title: 'Sent',
    url: '#sent'
  })
})
