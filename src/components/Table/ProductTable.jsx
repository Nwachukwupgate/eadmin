// ProductTable.js
import { useState, useEffect } from 'react'
import { getDocs, collection, doc, deleteDoc  } from 'firebase/firestore/lite'
import { db } from '../../config/firebase';

function ProductTable() {
  const [project, setProject] = useState([])
  const projectCollection = collection(db, "materials")

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
      await deleteDoc(doc(db, "materials", productId));
      // Update the local state to reflect the deletion
      await getProjectList();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };


  return (
    <div className="border shadow-sm rounded-lg">
      <div className="relative w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          {/* Table Header */}
          <thead className="[&amp;_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[80px]">
                Image
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 max-w-[150px]">
                Name
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                Description
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                Price
              </th>
              <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">
                Actions
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="[&amp;_tr:last-child]:border-0">
            {project.map((product) => (
              <tr key={product.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                {/* Product Image */}
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <img src={product.image} width="64" height="64" alt="Product image" className="aspect-square rounded-md object-cover" />
                </td>
                {/* Product Name */}
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium">{product.name}</td>
                {/* Product Description */}
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:table-cell">{product.description}</td>
                {/* Product Price */}
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">{`$${product.price}`}</td>
                {/* Delete Button */}
                <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(product.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
