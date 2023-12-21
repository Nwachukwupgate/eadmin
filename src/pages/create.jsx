// components/AddProductForm.js
import React, {useState} from 'react';
import Card from '../components/ui/card/Card';
import CardHeader from '../components/ui/card/CardHeader';
import CardTitle from '../components/ui/card/CardTitle';
import CardContent from '../components/ui/card/CardContent';
import Label from '../components/ui/label/Label';
import Input from '../components/ui/input/Input';
import Textarea from '../components/ui/textarea/TextArea';
import Button from '../components/ui/button/Button';
import { addDoc, collection } from 'firebase/firestore/lite'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { imgDb, db } from '../config/firebase';
import { v4 } from 'uuid'
import FileInput from '../components/ui/im/FileInput';


const AddProductForm = () => {
    const projectCollection = collection(db, "materials")
    const [loading, setLoading] = useState(false);
    const [inputField, setInputField] = useState({
        price: "",
        name: "",
        description: "",
        image: "",
     })

     const handleChange = (e) => {
        const { name, value, files } = e.target;

        setInputField((prevInputField) => ({
            ...prevInputField,
            [name]: name === 'image' ? files[0] : value
        }));
    };

    const handleUpload = (e) => {
        const imgs = ref(imgDb, `imgs/${v4()}`);
        uploadBytes(imgs, e.target.files[0]).then(data => {
            getDownloadURL(data.ref).then(val => {
                setInputField(prevInputField => ({
                    ...prevInputField,
                    image: val
                }));                
            })
        })
    }

    const handleSubmit = async (e) => {     
      e.preventDefault();
      setLoading(false);
    
      try {
        await addDoc(projectCollection, inputField);
        
        // Simulating a delay of 2 seconds before resetting state
        setTimeout(() => {
          setLoading(false);
          setInputField({
            price: "",
            name: "",
            description: "",
            image: "",
          });
        }, 2000);
    
        // Show an alert to the user
        window.alert('Submission successful!');
      } catch (error) {
        console.log("error:", error);
      } finally {
        console.log("done");
        setLoading(true);
      }
    };
    
  return (
    <main className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Add a New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="productName">Product Name</Label>
              <Input id="name" placeholder="Enter product name" type="text"  name="name" onChange={handleChange} value={inputField.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="productImage">Upload Product Image</Label>
              <FileInput id="productImage" type="file" name="image" onChange={handleUpload} value={inputField.image} /> 
            </div>
            <div className="grid gap-2">
              <Label htmlFor="productDescription">Product Description</Label>
              <Textarea id="productDescription" placeholder="Enter product description" name="description" onChange={handleChange} value={inputField.description} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="productPrice">Product Price</Label>
              <Input id="price" placeholder="Enter product price" type="number" name="price" onChange={handleChange} value={inputField.price} />
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-md text-sm font-medium" onClick={(e) => handleSubmit(e)} disabled={loading}>{loading ? 'Loading...' : 'Add Product'}</button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default AddProductForm;
