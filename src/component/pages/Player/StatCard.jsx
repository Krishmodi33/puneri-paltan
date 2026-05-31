const StatCard = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="bg-white px-8 py-4 min-w-[170px]">
        <span className="text-4xl font-black">{value}</span>
      </div>

      <p className="mt-3 text-sm uppercase tracking-[2px]">
        {label}
      </p>
    </div>
  );
};

export default StatCard;