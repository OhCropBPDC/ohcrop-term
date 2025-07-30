export default function MembershipPage() {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-[#F6E0B5] to-[#9EB1C0] flex flex-col items-center justify-center min-h-[60vh] px-4 py-20">
      <div className="bg-[#F6E0B5] rounded-xl shadow-lg px-10 py-8 flex items-center gap-12 border border-black">
        <div>
          <h2 className="text-3xl font-bold mb-3">Become a member</h2>
          <p className="mb-4 max-w-sm">
            Outline the advantages and perks of joining the club.
          </p>
          <button className="bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 rounded shadow">Join us</button>
        </div>
        <div>
          {/* Big icon illustration */}
          <div className="w-32 h-32 rounded bg-pink-200 flex items-center justify-center text-6xl text-green-500 font-semibold" style={{boxShadow:"0 0 0 4px #fff"}}>
            +
          </div>
        </div>
      </div>
    </section>
  );
}
