import RiskMatrix from "./RiskMatrix";
const RiskEntry = () => {
  return (
    <div className="flex items-center justify-around max-h-40 pr-8 my-4">
      <p className="text-4xl font-primary text-center font-bold">1</p>
      <div className="w-2/3">
        <p className="font-primary font-semibold text-3xl mb-1 line-clamp-2">
          National healthcare databases are compromised
        </p>
        <p className="font-secondary text-base line-clamp-2">
          This is a very long, if not unnecessarily long description of what
          this issue means exactly. If it were to be realized, healthcare would
          be inaccessible to many people, and the world would be a much sadder.
        </p>
      </div>
      <div className="mb-3">
        <RiskMatrix freqScore={2} sevScore={5} />
      </div>
    </div>
  );
};

export default RiskEntry;
