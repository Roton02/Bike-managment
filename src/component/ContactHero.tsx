
export const ContactHero = () => {
  return (
    <div>
        <div>
        <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white text-center  px-4"
      style={{
        backgroundImage: "url('https://i.postimg.cc/76Y98sS9/img-Contact.png')", // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        <p className="text-sm md:text-lg uppercase">Contact Us</p>
        <h1 className="text-2xl md:text-5xl font-bold mt-2">
          COME AS A GUEST, LEAVE AS A FRIEND
        </h1>
      </div>
    </div>
        </div>
    </div>
  )
}
