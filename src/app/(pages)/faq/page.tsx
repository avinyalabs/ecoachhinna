import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronRightIcon } from 'lucide-react'
import { getFAQs } from '@/../sanity/lib/queries'

export default async function FAQ() {
  const faqs = await getFAQs()
  return (
    <div>
      <div className="max-w-4xl mx-auto my-8">
        <nav aria-label="breadcrumb" className="text-sm mb-4">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <ChevronRightIcon className="fill-current text-accent w-4 h-4 mx-2" />
            </li>
            <li aria-current="page" className="text-gray-500">
              FAQs
            </li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold mb-4">
          Frequently Asked Questions (FAQs)
        </h1>
        <p className="mb-8">
          Find answers to frequently asked questions about my Services.
        </p>
        <div className="space-y-4">
          <div className="text-xl">
            {faqs.map((faq, i) => {
              return (
                <Accordion
                  key={faq._id}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      {i + 1}. {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
