import { CrudContextProvider } from "../context/crudContext";
import { SnackContextProvider } from "../context/snackContext";
import ProjectPage from "./ProjectPage";

const Wrapper = () => {
  return (
    <CrudContextProvider>
      <SnackContextProvider>
        <div className="app">
          <ProjectPage />
        </div>
      </SnackContextProvider>
    </CrudContextProvider>
  );
};

export default Wrapper;
