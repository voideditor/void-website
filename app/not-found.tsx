import Link from "next/link";

export default function NotFound() {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center'>
        <img src={process.env.NEXT_PUBLIC_LOGO_URL!} className='w-10 h-11 grayscale' />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter ">
        404 - Page Not Found
      </h1>
      <p className="mb-4">
        {`Apologies - we couldn't find that page. `}
        Go back to the {' '}<Link href='/' className='underline'>
          homepage
        </Link> or get in touch!
      </p>
    </section>
  )
}