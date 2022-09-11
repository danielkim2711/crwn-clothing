const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
      <label htmlFor=''>{label}</label>
      <input {...otherProps} />
    </>
  );
};

export default FormInput;
