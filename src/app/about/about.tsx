'use client'
import Link from 'next/link'

const About = () => {
  return (
    <div className='bg-black text-white py-16 px-4 sm:px-6 md:px-10'>

      {/* TITLE */}
      <h2 className='text-2xl sm:text-3xl md:text-4xl text-center mt-10 mb-10'>
        About{" "}
        <span className="underline font-bold bg-gradient-to-r from-[#05c1fa] to-[#ff61ed] bg-clip-text text-transparent">
          Premium Diagnostics
        </span>
      </h2>

      {/* INTRO */}
      <p className='text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto'>
        <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-[#05c1fa] to-[#ff61ed] bg-clip-text text-transparent">
          Premium Diagnostics
        </span>{" "}
        was founded in 2024 by <span className='font-bold'>Dr. Nadeen Senanayake</span> and{" "}
        <span className='font-bold'>Dr. Eshani Senanayake</span> as a heartfelt initiative to give back to the community.
      </p>

      {/* FOUNDERS SECTION */}
      <div className='flex flex-col md:flex-row items-center gap-10 mt-10'>

        {/* DR ESHANI */}
        <figure className='w-full md:w-1/3 text-center'>
          <img
            src='/DReshani.png'
            alt="CEO Dr.Eshani"
            className='w-full max-w-xs mx-auto rounded'
          />
          <figcaption className="text-sm text-gray-400 mt-2">
            Dr. Eshani Senanayake – Consultant Chemical Pathologist, DGH Hanthana
          </figcaption>
        </figure>

        {/* TEXT */}
        <div className='w-full md:w-1/3 text-center space-y-4'>
          <p className='text-sm sm:text-base md:text-lg'>
            Recognizing that routine checkups at many laboratories are often unaffordable,
            they set out to make essential healthcare more accessible.
          </p>

          <p className='text-sm sm:text-base md:text-lg'>
            Today, our rates for common tests are up to 60% lower than market prices{" "}
            <span className='font-bold'>—without any compromise on quality.</span>
          </p>
        </div>

        {/* DR NADEEN */}
        <figure className='w-full md:w-1/3 text-center'>
          <img
            src='/DRnadeen.png'
            alt="Founder Dr.Nadeen"
            className='w-full max-w-xs mx-auto rounded'
          />
          <figcaption className="text-sm text-gray-400 mt-2">
            Dr. Nadeen Senanayake – Consultant Chemical Pathologist, DGH Kelaniya
          </figcaption>
        </figure>
      </div>

      {/* DESCRIPTION */}
      <div className='mt-12 text-center max-w-4xl mx-auto space-y-6'>
        <p className='text-sm sm:text-base md:text-lg'>
          Since our inception, we have successfully completed over 60,000 tests with uncompromising accuracy,
          thanks to rigorous daily quality checks.{" "}
          <span className='font-bold'>Not a single test has ever been reported as inaccurate.</span>
        </p>

        <div className='flex flex-col md:flex-row items-center gap-10'>

          {/* TEXT */}
          <p className='text-sm sm:text-base md:text-lg'>
            At Premium Diagnostics, we invest in the latest, high-quality machines, maintained in peak condition
            to ensure precise results every time. With{" "}
            <span className='font-bold'>over 25 years</span> of medical experience each, both locally and internationally—
            including service in Sri Lanka’s government hospitals, private laboratories, and in the UK—
            Dr. Nadeen and Dr. Eshani bring a wealth of expertise, integrity, and compassion.
          </p>

          {/* SHANIKA */}
          <figure className='w-full md:w-[1600px] text-center'>
            <img
             src='/shanika.png'
              alt="Head MLT Shanika"
              className='w-full max-w-xs mx-auto rounded'
            />
            <figcaption className="text-sm text-gray-400 mt-2">
              Ms. Shanika – BSc (Hons) in Biomedical Science
            </figcaption>
          </figure>
        </div>

        <p className='text-sm sm:text-base md:text-lg'>
          Their vision is simple yet powerful:
          <span className='font-bold'> to deliver world-class diagnostics at a price every patient can afford.</span>
        </p>
      </div>

      {/* CTA */}
      <div className='mt-12 bg-gray-700/40 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left'>
        <p className='text-sm sm:text-base'>
          Be a part of our mission to make quality medical testing affordable for{" "}
          <span className='font-bold text-lg'>all Sri Lankans.</span>
        </p>

        <Link href='/contact'>
          <button className='font-bold bg-gradient-to-r from-[#05c1fa] to-[#ff61ed] px-4 py-2 rounded-lg cursor-pointer'>
            Contact Us
          </button>
        </Link>
      </div>

    </div>
  )
}

export default About;
