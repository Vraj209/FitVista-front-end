const Footer = () => {
  return (
    <>
      <footer className=" bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-3xl overflow-hidden ">
        <div className="space-x-1 w-full h-full">
          <div className="object-cover p-4 rounded-2xl overflow-hidden pt-6">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background"
              className="shadow-lg drop-shadow-lg w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex justify-between  p-4">
            <div>
              <h1 className="text-2xl font-bold pb-2">FitVista</h1>
              <h4 className=" text-base">
                Built for fitness entrepreneurs who want to scale their impact.
              </h4>
            </div>
            <div>
              <h3 className="text-2xl font-bold pb-2">Explore</h3>
              <ul className=" text-base space-y-1">
                <li>Features</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Blog</li>
                <li>Case Studies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold pb-2">Support</h3>
              <ul className=" text-base space-y-1">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Live Chat</li>
                <li>Documentation</li>
                <li>API Reference</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold pb-2">Follow us</h3>
              <ul className=" text-base space-y-1">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <div className="w-full h-[200px] overflow-hidden relative ">
            <h1 className=" transition-all duration-300 ease-in-out absolute top-[-80px]  w-full font-bold text-center text-[280px] text-wihite shadow-lg ">
              FitVista
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer