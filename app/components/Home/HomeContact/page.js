const HomeContact = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://imtiaz.ae/layout/image/register-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className=" container mx-auto max-w-[1300px] mb-10">
        <div className="hero-content block lg:grid grid-cols-2 ">
          <div>
            <h1 class="text-base font-bold tracking-tight text-white text-opacity-90">
              <span>Contact Us</span>
            </h1>
            <h1 className="font-bold text-5xl text-white">
              Please Show Your <br></br>
              <span className="text-green-400">Interest</span>
            </h1>
            <p className="text-justify max-w-[500px] mt-6 text-white">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet consectetur. Lorem ipsum dolor sit amet,
              consectetur elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="card shrink-0 w-full shadow-2xl">
            <form className="card-body  rounded-xl">
              <div className="form-control">
                <label className="label">
                  <span className="text-white">
                    Full Name <span className="text-red-600">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none h-8"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white">
                    Email <span className="text-red-600">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none h-8"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white">
                    Phone Number <span className="text-red-600">*</span>
                  </span>
                </label>
                <input
                  type="number"
                  placeholder="xx xxx xxx xxx"
                  className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none h-8"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white">
                    Message
                    <span className="text-red-600"> *</span>
                  </span>
                </label>
                <textarea
                  type="number"
                  placeholder="Write your messages..."
                  className="input focus:border-gray-50 text-white border-gray-300 bg-transparent rounded-none min-h-32"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn  border-none">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
