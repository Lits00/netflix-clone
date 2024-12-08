import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "auto",
};

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader
        color="#EB1616"
        cssOverride={override}
        size={100}
      />
    </div>
  );
};

export default Spinner;
