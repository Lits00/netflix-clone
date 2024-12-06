import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "auto",
};

const Spinner = () => {
  return (
    <ClipLoader
      color="#4338ca"
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;
