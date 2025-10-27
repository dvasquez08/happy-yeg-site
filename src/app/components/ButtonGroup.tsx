interface ButtonGroupProps {
  selectedLocation: string;
  onSelectLocation: (location: string) => void;
}

const ButtonGroup = ({
  selectedLocation,
  onSelectLocation,
}: ButtonGroupProps) => {
  const locations = ["All", "North", "South", "West", "Downtown"];

  return (
    <div id="location" className="py-8">
      <div>
        <h2 className="text-3xl flex items-center justify-center mt-16">
          Select Location
        </h2>
        <p className="flex items-center justify-center mb-4 text-xl leading-tight text-gray-800 mt-4">
          Select a location below to find a restaurant in the area of your
          choice.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {locations.map((location) => (
          <button
            key={location}
            onClick={() => onSelectLocation(location)}
            className={`font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 ${
              selectedLocation === location
                ? "bg-blue-700 text-white shadow-lg"
                : "bg-white text-blue-700 border border-blue-700 hover:bg-blue-100"
            }`}
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
