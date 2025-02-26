
const ContactUs = () => {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center">CONTACT US</h2>
      <p className="text-center text-gray-600 mt-2">
        If you have any questions or would like to collaborate with us, please contact our team via email
        <span className="font-semibold"> Work.nguyenductai@gmail.com</span> or (+84) 204 6299 288.
        Follow us on social media for updates and promotions!
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold">Get in Touch</h3>
          <p className="text-gray-600 mt-2">We're here to help with any inquiries you have! Please contact us via:</p>
          <p className="mt-4"><span className="font-bold text-red-600">Hotline:</span> (+84) 204 6299 288</p>
          <p><span className="font-bold text-red-600">Email:</span> Work.nguyenductai@gmail.com</p>
          <p><span className="font-bold text-red-600">Address:</span> Viet Hung Ward, Long Bien District, Hanoi City</p>
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-2xl">📷</a>
            <a href="#" className="text-2xl">▶️</a>
            <a href="#" className="text-2xl">📘</a>
            <a href="#" className="text-2xl">🎵</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-center">SEND A MESSAGE</h3>
          <p className="text-center text-gray-600 text-sm mt-1">Please fill in the information below so BIKE-BIKE can advise and support.</p>
          <form className="mt-4 flex flex-col gap-3">
            <input type="text" placeholder="Full name *" className="p-2 border rounded" required />
            <input type="text" placeholder="Phone number *" className="p-2 border rounded" required />
            <input type="email" placeholder="Email *" className="p-2 border rounded" required />
            <input type="text" placeholder="Address *" className="p-2 border rounded" required />
            <input type="text" placeholder="Current Company (If Any)" className="p-2 border rounded" />
            <textarea placeholder="Required ..." className="p-2 border rounded" rows={3}></textarea>
            <button className="bg-green-600 text-white py-2 rounded mt-2 hover:bg-green-700">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
