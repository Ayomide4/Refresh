export const DonationForm = () => {
  // TODO: Add functionality, including form submission and Stripe integration

  const handleSubmit = (event: React.FormEvent) => {
    console.log("pog");
    event.preventDefault();
    // Process donation...
  };

  return (
    <div className="bg-white rounded-2xl w-full md:max-w-3xl flex flex-col items-center p-5 md:p-10">
      <h2 className="font-medium text-2xl text-center mb-4 md:text-3xl">
        Make a Secure Donation
      </h2>

      <form
        id="donationForm"
        className="space-y-4 mb-8 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 space-x-4">
          <div className="w-full space-y-2">
            <label htmlFor="firstName" className="block font-semibold">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              className="w-full bg-[#F3F3F3] p-2"
              type="text"
              placeholder="First Name"
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="lastName" className="block font-semibold">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              className="w-full bg-[#F3F3F3] p-2"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            className="w-full bg-[#F3F3F3] p-2"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="donationAmount" className="block font-semibold">
            Amount
          </label>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              $
            </span>
            <input
              id="donationAmount"
              name="donationAmount"
              type="number"
              placeholder="Donation Amount"
              required
              min="1"
              className="w-full bg-[#F3F3F3] p-2 pl-8" // add left padding to account for the dollar sign
            />
          </div>
        </div>

        {/* Future: Add Stripe CardElement here for card details */}
        {/* <CardElement /> */}
      </form>

      <button
        type="submit"
        form="donationForm"
        className="bg-primary hover:bg-primary/90 w-full p-4 text-white rounded-2xl shadow-lg transition-all transform hover:scale-105 md:hover:scale-103"
      >
        DONATE
      </button>
    </div>
  );
};
