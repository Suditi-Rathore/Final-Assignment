"use client"

import ContactFooter from "./contactPageFooter/index"
import PageEnd from "./contactPageFooter/pageEnd"
import HelpDesk from "./helpDesk/index"
import HelpCenter from "./helpSection/index"
import QuestionsSection from "./questionSection/index"

const ContactPage = () => {
  return (
    <>
    <HelpCenter/>
    <HelpDesk/>
    <QuestionsSection/>
    <ContactFooter/>
    <PageEnd/>
    </>
  )
}

export default ContactPage
