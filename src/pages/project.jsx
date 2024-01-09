import { useState, useEffect } from 'react'
import { getDocs, collection, doc, deleteDoc  } from 'firebase/firestore/lite'
import { db } from '../config/firebase';


const ProjectPage = () => {
  const [project, setProject] = useState([])
  const projectCollection = collection(db, "projects")

  const getProjectList = async () => {
    try {
      const data = await getDocs(projectCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProject(filteredData);
    } catch {
      console.log("error");
    }
  };
  
  useEffect(() => {
    getProjectList();
  }, []);

  const handleDelete = async (productId) => {
    console.log(productId);
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(db, "projects", productId));
      // Update the local state to reflect the deletion
      await getProjectList();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {project.map((item) => (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src={item?.image}
              className="object-cover w-full h-64"
              alt={item?.name}
            />
            <div className="p-5 border border-t-0">
              <placeholder
                aria-label={item?.name}
                title={item?.name}
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {item?.name}
              </placeholder>
              <p className="mb-2 text-gray-700">
                { (item?.description || "").substring(0, 200) }...
              </p>
              <p
                onClick={()=> handleDelete(item?.id)}
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-blue-800"
              >
                Delete
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectPage