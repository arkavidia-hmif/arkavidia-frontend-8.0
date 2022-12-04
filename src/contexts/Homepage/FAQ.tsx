import { faqs } from "@src/const/FAQLandingData";
import FAQItem from "./FAQItem";

export default function FAQ() {
    return (
        <>
            <div className="container mx-auto py-2 lg:max-w-4xl md:max-w-2xl sm:max-w-lg max-w-xs">
                <h1 className="text-center text-[60px] font-archivo font-[900] mb-[60px]">F.A.Q.</h1>
                {faqs.map((item, idx) => (
                    <FAQItem
                        question={item.question}
                        answer={item.answer}
                        key={idx}
                    />
                ))}
            </div>
        </>
    )
}