const Discover = () => {
  return (
    <section className="p-8 hidden lg:flex flex-col justify-between bg-gradient-to-tr from-orange-950 to-black">
      <div className="flex gap-4">
        <h1 className="font-bold cursor-pointer text-white">
          <span className="bg-primary py-1 px-2 rounded-lg mr-1">E</span>
          EventHub
        </h1>
      </div>
      <div className="text-dark-gray grid gap-4">
        <div className="grid gap-2">
          <p className="text-white text-3xl font-bold">
            Discover events <br /> that shape careers.
          </p>
          <p className="text-sm">
            Workshops, conferences, and community meetups from Indonesia's most
            active tech communities — all in one place.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="bg-white/7 backdrop-blur-lg p-4 grid gap-2 rounded-xl border border-white/10">
            <p className="text-gray-300 text-xs">
              "Found my last three workshops here. The community is fantastic."
            </p>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  className="w-full object-contain"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNAzQdI4ju8y8NKN2lL7zLFQdbl105gdMqSYxWwsWXvHzKnlFuAN0XGb6e&s=10"
                  alt="profile-pict"
                />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Dina Rahayu</p>
                <p className="text-xs">Backend Lead, Cakrawala Digital</p>
              </div>
            </div>
          </div>
          <div className="bg-white/7 backdrop-blur-lg p-4 grid gap-2 rounded-xl border border-white/10">
            <p className="text-gray-300 text-xs">
              "EventHub is where Jakarta's tech scene actually happens."
            </p>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  className="w-full object-contain"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgeSF_0EnJNd4ZhxooDJzDXOoJBjrNhwBPnLL3BWsHL-5rSSVUrdi6W-W&s=10"
                />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Kevin Santoso</p>
                <p className="text-xs">ML Engineer, Nusantara Labs</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 text-white">
          <div className="grid gap-1">
            <p className="font-bold text-xl">12k+</p>
            <p className="text-xs text-dark-gray">Members</p>
          </div>
          <div className="grid gap-1">
            <p className="font-bold text-xl">200+</p>
            <p className="text-xs text-dark-gray">Events/year</p>
          </div>
          <div className="grid gap-1">
            <p className="font-bold text-xl">50+</p>
            <p className="text-xs text-dark-gray">Communities</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-dark-gray text-xs">© 2026 EventHub · Indonesia</p>
      </div>
    </section>
  );
};

export default Discover;
