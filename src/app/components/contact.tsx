import React from 'react'


const Contact = () => {
  return (
    <div id= "Contact"><section className="text-gray-600 body-font relative">
    <div className="absolute inset-0 bg-gray-200">
      <iframe
        width="100%"
        height="100%"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275160.4017479891!2d66.89550704694231!3d25.02272653684614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36b56070921a3%3A0xbe439f20cae5860e!2sPNAD%20Mauripur!5e0!3m2!1sen!2s!4v1699630063613!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.5)" }}
      /> 
    </div>
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Contact
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Feel Free to Contact
        </p>
        <form action="https://formspree.io/f/meqbwqzq"method="POST">
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email:
            </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
            Subject:
            </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
            required/>
        </div>
        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
         Send Me Message:
        </button>
        </form>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Contact