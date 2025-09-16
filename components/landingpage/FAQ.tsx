export default function FAQ() {
    const faqs = [
        { q: 'Is Void free and open source?', a: 'Yes. Void is an open source project with a permissive license.' },
        { q: 'Can I use any LLM provider?', a: 'Yes. You can connect to private and frontier providers, or any OpenAI-compatible endpoint.' },
        { q: 'Does Void collect my code or prompts?', a: 'No. You can self-host or connect directly. We don\'t proxy by default.' },
    ]

    return (
        <section className='my-24'>
            <h2 className='mx-auto text-center text-3xl lg:text-4xl tracking-tight font-black mb-8'>
                FAQ
            </h2>
            <div className='max-w-2xl mx-auto divide-y divide-black/10 rounded-lg bg-white/70 backdrop-blur-sm border border-black/5'>
                {faqs.map((f, i) => (
                    <details key={i} className='group p-4 open:bg-white/80 transition-colors'>
                        <summary className='flex cursor-pointer list-none items-center justify-between'>
                            <span className='font-semibold text-lg'>{f.q}</span>
                            <span className='ml-4 transition-transform duration-200 group-open:rotate-45 select-none'>＋</span>
                        </summary>
                        <div className='mt-2 text-gray-700'>{f.a}</div>
                    </details>
                ))}
            </div>
        </section>
    )
}
