"use client"

import ContactFooter from "@/components/contactPageFooter"
import PageEnd from "@/components/contactPageFooter/pageEnd"
import HelpDesk from "@/components/helpDesk"
import HelpCenter from "@/components/helpSection"
import QuestionsSection from "@/components/questionSection"

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
