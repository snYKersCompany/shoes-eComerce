import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "../../styles/create.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import { createProduct } from "../../redux/features/products/productsActions";
import { Link } from "react-router-dom";

const Create = () => {  
  const dispatch = useDispatch();
  const [error, setError] = useState({
    name: " ",
    description: " ",
    brand: " ",
    price: " ",
    color: " ",
    gender: " ",
    size: "Select almost 1 size",
    categories: "Select almost 1 category",
    stock: " ",
    release: " ",
    img: " ",
  });

  const [form, setform] = useState({
    name: "", //string
    description: "", //string
    brand: "", //string
    price: "", //Number
    categories: "", //Array(String)
    size: "", //Array(String)  ---> no incluido en el form de manera directa
    color: "", // String
    gender: "", //String
    stock: "", // Object = {size: stock}  --> acá se introduce las tallas disponibles y el stock de cada una
    release: "", // Date
    img: "", //String
  });
  //eslint-disable-next-line
  const [controller, setController] = useState({
    general: false, // cambia la pantalla cuando hace el dispatch para no agregar varias veces el mismo artículo
    //eslint-disable-next-line
    name: /[{}<>=@\/\\]/g,
    //eslint-disable-next-line
    description: /[{}<>=@\/\\]/g,
    //eslint-disable-next-line
    brand: /[{}<>=@\/\\]/g,
    price: /^\d*((,||\.)\d)+$/g,
    sizes: (e) => {
      let a = [...form.size, e.target.value];
      return a.length > 1 ? true : false;
    },
    radio: true, //hasta que se puedan subir imágenes a la nube
    release: (date) =>
      date.split("-")[0] < 1900 || date.split("-")[0] > 2100 ? false : true,
  });

  //validations
  let handleName = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, name: e.target.value });
    controller.name.test(e.target.value) === false &&
    controller.name.test(e.target.value) === false
      ? setError({ ...error, name: false })
      : setError({ ...error, name: "The name contains an invalid character" });
    if (e.target.value.length < 3 || e.target.value.length > 50) {
      setError({
        ...error,
        name: "Must be between 2 and 50 characters in length",
      });
    }
  };

  let handleDescription = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, description: e.target.value });
    controller.description.test(e.target.value) === false &&
    controller.description.test(e.target.value) === false
      ? setError({ ...error, description: false })
      : setError({
          ...error,
          description: "The description contains an invalid character",
        });

    if (e.target.value.length < 30 || e.target.value.length > 1020) {
      setError({
        ...error,
        description: "Must be between 30 and 1000 characters in length",
      });
    }
  };

  //  ============ Reducible ============
  let handleBrand = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, brand: e.target.value });
    controller.brand.test(e.target.value) === false &&
    controller.brand.test(e.target.value) === false
      ? setError({ ...error, brand: false })
      : setError({ ...error, brand: "Invalid character" });
  };

  let handlePrice = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, price: Number(e.target.value) });
    controller.price.test(e.target.value) === true &&
    controller.price.test(e.target.value) === false
      ? setError({ ...error, price: false })
      : setError({ ...error, price: "Invalid response" });
  };
  //  ============================================

  //    ============ Reducible ============
  let handleGender = (e) => {
    e.target.value === "none"
      ? setError({ ...error, gender: "choose a gender" })
      : setError({ ...error, gender: false });
    setform({ ...form, gender: [e.target.value] });
  };

  let handleColor = (e) => {
    e.target.value === "none"
      ? setError({ ...error, color: "choose a color" })
      : setError({ ...error, color: false });
    setform({ ...form, color: e.target.value });
  };
  //  =====================================

  //  ============ Reducible ============
  let handleSize = (value) => {
    let a = form.size;
    a.length >= 1 ? (a = a.filter((el) => el === value)) : (a = []);
    a.length < 1
      ? setform({ ...form, size: [...form.size, value] })
      : setform({ ...form, size: form.size.filter((el) => el !== value) });
    form.size.length === 1 && value === form.size[0]
      ? setError({ ...error, size: "Select almost 1 size" })
      : setError({ ...error, size: false });
  };

  let handleCategory = (value) => {
    let a = form.categories;
    a.length >= 1 ? (a = a.filter((el) => el === value)) : (a = []);
    a.length < 1
      ? setform({ ...form, categories: [...form.categories, value] })
      : setform({
          ...form,
          categories: form.categories.filter((el) => el !== value),
        });
    form.categories.length === 1 && value === form.categories[0]
      ? setError({ ...error, categories: "Select almost 1 category" })
      : setError({ ...error, categories: false });
  };
  //  =============================================

  let handleStock = (e, el) => { 
    setform({ ...form, stock: { ...form.stock, [el]: Number(e.target.value) }});
    let control = { ...form.stock, [el]: Number(e.target.value) };
    Object.values(control).includes(0)
      ? setError({ ...error, stock: "All the sizes must have an stock most of 0" })
      : setError({ ...error, stock: false });
         
  };

  let handleRelease = (e) => {
    controller.release(e.target.value)
      ? setError({ ...error, release: false })
      : setError({
          ...error,
          release: "Invalid Date",
        });
    setform({ ...form, release: e.target.value });
  };
  const [auxImg, setAuxImg] = useState();
  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.REACT_APP_UPLOAD_PRESET_PRODUCT;
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  let handleImg = (e) => {
    setAuxImg(e.target.value);
  };

  const handleImage = async (e) => {
    setFile(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", UPLOAD_PRESET);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: data }
    );
    const info = await response.json();
    setAuxImg(e.target.value ? e.target.value : info.url);
    console.log("Aux image: ", auxImg, "Info: ", info);
  }

  let handleImgForm = () => {
    setform({ ...form, img: auxImg });
    auxImg.length > 1
      ? setError({ ...error, img: false })
      : setError({ ...error, img: "Upload a image" });
  };

  let submitForm = (e) => {
    e.preventDefault();

    let formToSend = {
      name: form.name,
      brand: form.brand,
      category: form.categories,
      color: form.color,
      gender: form.gender,
      stock: form.stock,
      card_picture: form.img,
      detail_picture: form.img,
      original_picture: form.img,
      release_date: form.release,
      price: form.price,
      description: form.description,
    };
    setController({...controller, general: true}) //muestra un aviso para que no se agregue un producto más de dos veces
    
    !Object.values(form).includes("") &&
    Object.values(error).filter((el) => el !== false).length < 1
      ? dispatch(createProduct(formToSend))
      : console.log("Algo Falló");
  };

  const user = { admin: true };
  const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
  const categories = [
    //modificar con la ruta categories
    "lifestyle",
    "basketball",
    "skateboarding",
    "running",
    "other",
  ];

  return user.admin === true ? (
    controller.general === false ? (
      <div className="containerGeneralFormCreate">
        <div className="d-flex containerFormCreate">
          <Form
            className="d-flex flex-wrap w-100 FormCreateContainerResponsive"
            onSubmit={(e) => submitForm(e)}
          >
            <div className="d-flex flex-column">
              <Form.Group className="d-flex mb-3 flex-column justify-content-start">
                <Form.Label className="d-flex">Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insert the name of the product"
                  className="d-flex"
                  onChange={(e) => handleName(e)}
                  value={form.name}
                />
                <label className="FormCreateError">{error.name}</label>
              </Form.Group>

              <Form.Group className="d-flex mb-3 flex-column justify-content-start">
                <Form.Label className="d-flex">Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Insert the description of the product"
                  className="d-flex"
                  onChange={(e) => handleDescription(e)}
                  value={form.description}
                />
                <label className="FormCreateError">{error.description}</label>
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Form.Group className="d-flex mb-3 flex-column justify-content-start me-2">
                  <Form.Label className="d-flex">Brand:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insert the brand"
                    className="d-flex"
                    onChange={(e) => handleBrand(e)}
                    value={form.brand}
                  />
                  <label className="FormCreateError">{error.brand}</label>
                </Form.Group>

                <Form.Group className="d-flex mb-3 flex-column justify-content-start me-2 color-warning">
                  <Form.Label className="d-flex">Release Date:</Form.Label>
                  <Form.Control
                    type="date"
                    className="d-flex FormCreateInputReleased "
                    onChange={(e) => handleRelease(e)}
                    value={form.release}
                  />
                  <label className="FormCreateError">{error.release}</label>
                </Form.Group>

                <Form.Group className="d-flex mb-3 flex-column justify-content-start">
                  <Form.Label className="d-flex">Price:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="$65.00"
                    className="d-flex"
                    onChange={(e) => handlePrice(e)}
                    value={form.price}
                  />
                  <label className="FormCreateError">{error.price}</label>
                </Form.Group>
              </div>

              <div className="d-flex justify-content-between ">
                <Form.Group className="d-flex mb-3 flex-column w-100 ">
                  <Form.Label className="d-flex">Color:</Form.Label>
                  <Form.Select
                    defaultValue={"none"}
                    className={
                      form.color === ""
                        ? "border border-danger"
                        : "border border-success"
                    }
                    onChange={(e) => handleColor(e)}
                  >
                    <option value="none" hidden>
                      Choose a color
                    </option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Green">Green</option>
                    <option value="Brown">Brown</option>
                  </Form.Select>
                  <label className="FormCreateError">{error.color}</label>
                </Form.Group>
                    
                <Form.Group className="d-flex mb-3 mx-2 flex-column justify-content-start w-100">
                  <Form.Label className="d-flex">Gender</Form.Label>
                  <Form.Select
                    defaultValue={"none"}
                    className={
                      form.gender === ""
                        ? "border border-danger"
                        : "border border-success"
                    }
                    onChange={(e) => handleGender(e)}
                  >
                    <option value="none" hidden>
                      Choose a genre
                    </option>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Unisex">Unisex</option>
                  </Form.Select>
                  <label className="FormCreateError">{error.gender}</label>
                </Form.Group>
              </div>

              <Form.Group className="d-flex w-100 flex-wrap align-items-center">
                <Form.Label className="d-flex w-100 ">Categories:</Form.Label>

                <div
                  className={`d-flex w-100 flex-wrap FormCreateCheckContainer justify-content-evenly ${
                    form.categories.length
                      ? "border border-success"
                      : "border border-danger"
                  }`}
                >
                  {categories.map((category) => (
                    <Form.Check
                      key={category}
                      className=" me-3"
                      label={category}
                      name="categories"
                      onChange={() => handleCategory(category)}
                    />
                  ))}
                </div>
              </Form.Group>

              <Form.Group className="d-flex w-100 flex-wrap align-items-center">
                <Form.Label className="d-flex w-100 mt-2">Sizes:</Form.Label>
                <div
                  className={`d-flex w-100 flex-wrap FormCreateCheckContainer justify-content-evenly ${
                    form.size.length
                      ? "border border-success"
                      : "border border-danger"
                  }`}
                >
                  {sizes.map((size, i) => (
                    <Form.Check
                      key={i}
                      className="d-flex me-3"
                      label={size}
                      value={size}
                      onChange={() => handleSize(size)}
                      name="sizes"
                    />
                  ))}
                </div>
              </Form.Group>
              {form.size.length >= 1 ? <label>Stock:</label> : <></>}
              <div className="d-flex flex-wrap ContainerStockCreate ">
                {form.size.length >= 1 ? (
                  form.size.map((el, i) => (
                    <Form.Group
                      key={i}
                      style={{ order: el * 2 }}
                      className="d-flex justify-content-center align-items-center m-2 "
                    >
                      <Form.Label className="d-flex align-items-center CenterLabelCreate">
                        Size {el}:
                      </Form.Label>
                      <Form.Control
                        key={i}
                        type="number"
                        min={0}
                        placeholder="Stock"
                        className="d-flex FormCreateInputStock"
                        onChange={(e) => handleStock(e, el)}
                      />
                    </Form.Group>
                  ))
                ) : (
                  <></>
                )}
                <label className="FormCreateError">{error.stock}</label>
              </div>
            </div>
            <div className=" containerFormCreateImgs align-items-center justify-content-center d-flex h-100 w-100 flex-column ">
              <Form.Group className="d-flex flex-column justify-content-center align-items-center w-100">
                {controller.radio === true ? (
                  form.img.length >= 1 ? (
                    <img
                      className="d-flex w-100 containerFormCreateImgs"
                      src={form.img}
                      alt="Img Upload"
                    />
                  ) : (
                    <img
                      src="https://static.thenounproject.com/png/559530-200.png"
                      alt="add Img"
                    />
                  )
                ) : (
                  <></>
                )}
                {/* ============ Reducible ============ */}
                <ButtonGroup>
                  <ToggleButton
                    key={1}
                    type="radio"
                    variant={"outline-success"}
                    value={controller.radio}
                    onClick={() =>
                      setController({ ...controller, radio: true })
                    }
                    checked={controller.radio === true}
                  >
                    {"Image Adress"}
                  </ToggleButton>

                  <ToggleButton
                    key={2}
                    type="radio"
                    variant={"outline-danger"}
                    value={controller.radio}
                    onClick={() =>
                      setController({ ...controller, radio: false })
                    }
                    checked={controller.radio === false}
                  >
                    {"Search Files"}
                  </ToggleButton>
                </ButtonGroup>
                {/* ===================================== */}

                {controller.radio === true ? (
                  <FormGroup className="d-flex w-100 mt-3">
                    <Form.Control
                      type="text"
                      className="d-flex FormCreateInputUrl"
                      onChange={(e) => handleImg(e)}
                      placeholder="Insert the URL of your image"
                    />
                    <Button
                      className="d-flex mx-1"
                      onClick={ handleImgForm }
                    >
                      Upload
                    </Button>
                  </FormGroup>
                ) : (
                  <Form.Group className="mt-3 d-flex flex-column">
                    <Form.Control
                    type = "file"
                    className="d-flex FormCreateInputUrl"
                    onChange = { (e) => handleImage(e) }
                    name = "image"
                    placeholder="Upload an image"
                    />
                    {file ? <img alt = "preview" height = "60" width = "60" src = {URL.createObjectURL(file)}/> : null}
                    <Button
                      className="d-flex mx-1"
                      onClick={ handleImgForm }
                    ></Button>
                  </Form.Group>
                )}
                <div className="d-flex mt-5">
                  {Boolean(     //   ============ Reducible ============
                    Object.values(form).filter((el) => el === " ").length >= 1
                  ) === false &&
                  Boolean(
                    Object.values(error).filter((el) => el !== false).length >=
                      1
                  ) === false ? (
                    <Button
                      className="d-flex formCreateButtonSubmit"
                      type="sumbit"
                      disabled = {false}
                    >
                      Send
                    </Button>
                  ) : (
                    <Button
                      className="d-flex formCreateButtonSubmit"
                      type="sumbit"
                      disabled = {true}
                    >
                      Send
                    </Button> // =======================================
                  )}    
                </div>
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    ) : (
      <div className="SuccessContainerGeneralCreate">
        <div className="SuccessContainerCreate">
          <h3 className="SuccessCreateText">Your product was upload</h3>
          <Link to="/home">
            <button className="SuccessCreateButton">Back</button>
          </Link>
        </div>
      </div>
    )
  ) : (
    <div>
      <p>Acceso denegado</p>
    </div>
  );
};

export default Create;
