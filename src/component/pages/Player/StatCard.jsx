const StatCard = ({ value, label }) => {
  return (
    <div className="text-center w-full">
      <div
        className="
          bg-white

          px-3
          sm:px-6
          lg:px-8

          py-3
          lg:py-4

          min-w-0
          w-full
        "
      >
        <span
          className="
            text-2xl
            sm:text-3xl
            lg:text-4xl

            font-black
            break-words
          "
        >
          {value}
        </span>
      </div>

      <p
        className="
          mt-2
          sm:mt-3

          text-[10px]
          sm:text-xs
          lg:text-sm

          uppercase

          tracking-[1px]
          sm:tracking-[2px]

          break-words
        "
      >
        {label}
      </p>
    </div>
  );
};

export default StatCard;
