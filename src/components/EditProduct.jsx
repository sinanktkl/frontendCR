import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap';
import { serverUrl } from '../Services/serverUrl';
import { EditProductAPI, GetAllProductAPI } from '../Services/allAPI';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { editProductResponseContext } from '../ContextAPI/ContextShare';
import '../componentsStyles/EditProduct.css'

function EditProduct({ product }) {


    const {editProductResponse,setEditProductResponse}=useContext(editProductResponseContext)

    const [loading, setLoading] = useState(false);

    // editProductmodal
    const [editProductModalShow, setEditProductModalShow] = useState(false);
    const handleCloseEditProduct = () => {
        setEditProductModalShow(false);
        setEditProducts({
            id: product?._id,
            productName: product?.productName || "",
            productPrice: product?.productPrice || "",
            productOfferPrice: product?.productOfferPrice || "",
            productCategory: product?.productCategory || "",
            productImage: ""
        })
        setPreviewEdit("")
    }
    const handleShowEditProduct = () => setEditProductModalShow(true);


    const [EditProducts, setEditProducts] = useState({
        id: product?._id,
        productName: product?.productName,
        productPrice: product?.productPrice,
        productOfferPrice: product?.productOfferPrice,
        productCategory: product?.productCategory,
        productImage: ""
    })

    const [previewEdit, setPreviewEdit] = useState("")

   const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const { id, productName, productPrice, productOfferPrice, productCategory, productImage } = EditProducts;

    // ✅ Validate text fields only
    if (!productName || !productPrice || !productOfferPrice || !productCategory) {
        toast.warning("Please fill all fields");
        return;
    }

    // ✅ Prepare FormData
    const reqBody = new FormData();
    reqBody.append("productName", productName);
    reqBody.append("productPrice", productPrice);
    reqBody.append("productOfferPrice", productOfferPrice);
    reqBody.append("productCategory", productCategory);

    // ✅ If a new image is selected, append it; otherwise, send empty or handle in backend
    if (productImage) {
        reqBody.append("productImage", productImage);
    }

    const token = sessionStorage.getItem("token");
    if (!token) {
        toast.error("Please login first");
        return;
    }

    const reqHeader = {
        "Authorization": `Bearer ${token}`,
    };

    setLoading(true);
    try {
        const result = await EditProductAPI(id, reqBody, reqHeader);
        if (result.status === 200) {
            setEditProductResponse(result.data);
            toast.success("Product Updated successfully");
            setEditProductModalShow(false);
            setPreviewEdit("");
        } else {
            toast.error(result?.data?.error || "Something went wrong");
        }
    } catch (err) {
        toast.error("Server error, please try again later");
    } finally {
        setLoading(false);
    }
};





    








    useEffect(() => {
        if (EditProducts.productImage.type == 'image/png' || EditProducts.productImage.type == 'image/jpg' || EditProducts.productImage.type == 'image/jpeg') {
            setPreviewEdit(URL.createObjectURL(EditProducts.productImage));
            
            // console.log("generete url");
        

        } else if(EditProducts.productImage){
            // setPreviewEdit("")
             toast.warning("Only JPG, JPEG, or PNG allowed");
            setEditProducts({ ...EditProducts, productImage: "" })
        }
    }, [EditProducts.productImage])

    return (
        <>
            <button onClick={handleShowEditProduct} className="smledit btn btn-warning btn-sm me-2" >Edit</button>



            {/* edit modal */}

            <Modal
                show={editProductModalShow}
                onHide={handleCloseEditProduct}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-info">Edit Product</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="row align-items-stretch g-3">
                        {/* Left side - Card */}
                        <div className="col-12 col-md-4">
                            <div
                                className="card position-relative h-100 shadow-lg"
                                style={{ minHeight: "100%" }}
                            >
                                {/* <span className="position-absolute top-0 start-0 bg-success text-white px-2 py-1 rounded-end">
                                    25% OFF
                                </span> */}

                                <img
                                    src={previewEdit || `${serverUrl}/Uploads/${product?.productImage}`}

                                    className="card-img-top img-fluid"
                                    style={{
                                        height: "auto",
                                        maxHeight: "250px",
                                        objectFit: "contain",
                                        padding: "10px",
                                    }}
                                    alt="productImage"
                                />

                                <div className="card-body text-center">
                                    <p className="text-muted small " >{EditProducts?.productCategory || `productCategory`}</p>
                                    <h6 className="card-title ">{EditProducts?.productName || "productName"}</h6>
                                    <p className="card-text text-success fw-bold ">
                                        <del className="text-muted ">{EditProducts?.productPrice || `productPrice`}</del>
                                    </p>
                                    <p className="text-success fw-bold">{EditProducts?.productOfferPrice || "productOfferPrice"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="col-12 col-md-8">
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter product name"
                                       
                                        value={EditProducts?.productName}
                                        onChange={(e) => setEditProducts({ ...EditProducts, productName: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Group className="d-flex gap-2">
                                        <Form.Check
                                            type="radio"
                                            name="productCategory"
                                            label="Parts"
                                            value="Parts"
                                            checked={EditProducts.productCategory === "Parts"}
                                            onChange={(e) => setEditProducts({ ...EditProducts, productCategory: e.target.value })} />
                                        <Form.Check
                                            type="radio"
                                            name="productCategory"
                                            label="Accessories"
                                            value="Accessories"
                                            checked={EditProducts.productCategory === "Accessories"}
                                            onChange={(e) => setEditProducts({ ...EditProducts, productCategory: e.target.value })} />
                                        <Form.Check
                                            type="radio"
                                            name="productCategory"
                                            label="Oil"
                                            value="Oil"
                                            checked={EditProducts.productCategory === "Oil"}
                                            onChange={(e) => setEditProducts({ ...EditProducts, productCategory: e.target.value })} />
                                    </Form.Group>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Price (INR)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter price"

                                        value={EditProducts?.productPrice}
                                        onChange={(e) => setEditProducts({ ...EditProducts, productPrice: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Original Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter original price"

                                        value={EditProducts?.productOfferPrice}
                                        onChange={(e) => setEditProducts({ ...EditProducts, productOfferPrice: e.target.value })}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                
                                id="productImage"
                                type="file"
                                onChange={(e) =>
                                    setEditProducts({ ...EditProducts, productImage: e.target.files[0] })
                                }
                            />

                            {/* Show current image name */}
                          {/* {!previewEdit && (
                                <p
                                    className="text-muted fw-bolder"
                                    style={{
                                        marginTop: '-28px',
                                        marginLeft:'120px',
                                        display: 'block',
                                        fontSize: '13px',
                                        color: '#000000ff',
                                        color:'black',
                                        fontSize:'13px'

                                    }}
                                >
                                    {product?.productImage}
                                </p>
                            )} */}
                        </Form.Group>

                            </Form>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditProduct}>
                        Close
                    </Button>
                    <Button variant="info" className="text-white" onClick={handleUpdateProduct} disabled={loading}>
                       {loading ? <Spinner animation="border" size="sm" /> : "Update Product"}
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

        </>
    )
}

export default EditProduct
