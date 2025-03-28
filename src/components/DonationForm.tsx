export const DonationForm = () => {

  //TODO: add functionality

  return (
    <form className="bg-white rounded-2xl w-full flex flex-col items-center p-5">
      <h2 className="font-medium text-2xl text-center mb-4">Make a Secure Donation</h2>

      <div className="w-full flex justify-between rounded-2xl border overflow-hidden">
        <div className="bg-primary w-1/2 flex items-center justify-center p-2">
          <p className="text-white">ONE TIME</p>
        </div>

        <div className=" w-1/2 flex items-center justify-center p-2 rounded-r-2xl">
          <p>MONTHLY</p>
        </div>
      </div>

      <div className="flex my-4 w-full space-x-2">
        <button className="flex-1 h-14  flex items-center justify-center rounded-lg  bg-primary text-white">$3</button>
        <button className="flex-1 h-14 flex items-center justify-center rounded-lg  border border-[#D9D9D9]">$5</button>
        <button className="flex-1 h-14 flex items-center justify-center rounded-lg  border border-[#D9D9D9]">$10</button>
        <div className=" bg-[#F3F3F3] rounded-lg flex-2 flex items-center justify-center"><p>total</p></div>
      </div>

      <div className="space-y-4 mb-8">
        <input className="w-full bg-[#F3F3F3] p-2" type="text" placeholder="Name" />
        <input className="w-full bg-[#F3F3F3] p-2" type="email" placeholder="Email" />
      </div>

      {/* ADD CARD STUFF */}

      <button className="bg-primary hover:bg-primary/90 w-full p-4 text-white rounded-2xl shadow-lg transition-all transform hover:scale-103">DONATE</button>
    </form>
  )
}
