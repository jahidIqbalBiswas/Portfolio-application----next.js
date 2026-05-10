type props = {
  firstHeading: string;
  lastHeading: string;
  subHeading: string;
};
const SectionHeading = ({ firstHeading, lastHeading, subHeading }: props) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {firstHeading} {""}
        <span className="text-green-600 dark:text-green-500">
          {lastHeading}
        </span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
