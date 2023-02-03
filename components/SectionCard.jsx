const SectionCard = ({ title, children }) => {
  return (
    <div className="card-style container">
      <div className="p-2">
        <h1 className="px-2 text-2xl sm:text-3xl md:text-4xl">{title}</h1>
      </div>
      <div className="w-full bg-black h-[3px]" />
      <div className="p-4">{children}</div>
    </div>
  );
};

export default SectionCard;
