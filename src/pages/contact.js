import React from 'react'
import ContactForm from '../components/molecules/ContactForm'
import PageLayout from '../components/organism/PageLayout'

export default function Contact() {

  return (
    <PageLayout
      pageData={{
        title: 'Contact Us',
        description: "Say hi! We are here to help."
      }}
    >
      <ContactForm showDatePicker={false} title={'Say Hi! 👋 '}/>
    </PageLayout>
  )
}
