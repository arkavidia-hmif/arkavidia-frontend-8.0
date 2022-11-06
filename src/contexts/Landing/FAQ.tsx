import { faqs } from "@src/const/FAQLandingData";
import FAQItem from "./FAQItem";

export default function FAQ() {
    return (
        <div className="container mx-auto py-2 lg:max-w-4xl md:max-w-2xl sm:max-w-lg">
            {faqs.map(item => (
                <FAQItem
                    question={item.question}
                    answer={item.answer}
                />
            ))}
        </div>
    )
}