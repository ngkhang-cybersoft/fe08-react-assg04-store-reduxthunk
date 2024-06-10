import FormAntd from '../../components/FormAntd/FormAntd';

const AddStore = () => {
  return (
    <>
      <h2 className="text-center mb-3">Add new store</h2>
      <div className="d-flex justify-content-center">
        <FormAntd action="add" />
      </div>
    </>
  );
};
export default AddStore;
