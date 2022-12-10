import React from "react";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Create.css";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from "react-bootstrap/esm/Button";

const Create = () => {
  const [error, setError] = useState({
    name: false,
    description: false,
    brand: false,
    size: "Select almost 1 color",
    color: "Select almost 1 color",
    price: false,
    stock: false,
    release: false,
    img: false,
  });

// let prueba={
//     name: "Nike Air Force 1",
//     description: "son una nuevas zapas que en la vida has visto",
//     brand: "Nike",
//     size: [
//         "6.5",
//         "8.5"
//     ],
//     color: [
//         "White",
//         "Black"
//     ],
//     price: "85.00",
//     stock: "49",
//     release: "2017-02-09",
//     img: [
//         "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/calzado-air-force-1-07-b19lqD.png"
//     ],
//     radio: false
// }

  const [form, setform] = useState({
    name: "",
    description: "",
    brand: "",
    size: "",
    color: "",
    price: "",
    stock: "",
    release: "",
    img: "",
  });
  //eslint-disable-next-line
  const [controller, setController] = useState({
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

  //carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
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
    setform({ ...form, price: e.target.value });
    controller.price.test(e.target.value) === true &&
    controller.price.test(e.target.value) === false
      ? setError({ ...error, price: false })
      : setError({ ...error, price: "Invalid response" });
  };


  let handleSize = (e) => {
    if (e.target.value === "All") {
      setform({ ...form, size: sizes.map((el) => el.toString()) });
      setError({ ...error, size: false });
    } else {
      let a = form.size
        ? form.size.filter((size) => size === e.target.value)
        : null;
      a === null || a.length < 1
        ? setform({ ...form, size: [...form.size, e.target.value] })
        : setform(form);
      setError({ ...error, size: false });
    }
  };

  let handleColor = (e) => {
    if (e.target.value === "All") {
      setform({ ...form, color: colors });
      setError({ ...error, color: false });
    } else {
      let a = form.color
        ? form.color.filter((color) => color === e.target.value)
        : null;
      a === null || a.length < 1
        ? setform({ ...form, color: [...form.color, e.target.value] })
        : setform(form);
      setError({ ...error, color: false });
    }
  };

  let handleStock = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, stock: e.target.value });
    controller.price.test(e.target.value) === true &&
    controller.price.test(e.target.value) === false
      ? setError({ ...error, stock: false })
      : setError({ ...error, stock: "Invalid response" });
    e.target.value<1 || e.target.value>10000000
      ? setError({ ...error, stock: "Invalid response" })
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

  let handleImg = (e) => {
    setAuxImg(e.target.value);
  };

  let handleImgForm = () => {
    setform({...form, img: [...form.img, auxImg]})
  };
  let deleteSize = (e) => {
    let filtered = form.size.filter((size) => size !== e.target.value);
    setform({ ...form, size: filtered });
    filtered.length === 0
      ? setError({ ...error, size: "Select almost 1 size" })
      : setError({ ...error, size: false });
  };

  let deleteColor = (e) => {
    let filtered = form.color.filter((color) => color !== e.target.value);
    setform({ ...form, color: filtered });
    filtered.length === 0
      ? setError({ ...error, color: "Select almost 1 color" })
      : setError({ ...error, size: false });
  };

  let submitForm = (e) =>{
    e.preventDefault()
    
    !Object.values(form).includes('') && Object.values(error).filter(el=>el !== false).length<1?
      
    console.log('Felicidades', form, error)
    // dispatch(PutShoes(form))
    :
    console.log('Fallaste', form, error)

  }

  const user = { admin: true };
  const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
  const colors = ["Yellow", "Blue", "Red", "White", "Gray", "Pink", "Black"];

  return user.admin === true ? (
    <div className="containerGeneralFormCreate">
      <div className="d-flex containerFormCreate">
        <Form className="d-flex flex-wrap w-100 FormCreateContainerResponsive" onSubmit={(e)=>submitForm(e)}>
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
              <label className="FormCreateError" >{error.name}</label>
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

            <Form.Group className="d-flex w-100 flex-wrap align-items-center">
              <div className="FormCreateInputSize  ">
                <Form.Label className="d-flex">Sizes:</Form.Label>
                <Form.Select
                  className="d-flex FormCreateInputSize"
                  defaultValue={"none"}
                  onChange={(e) => handleSize(e)}
                >
                  <option value="none" hidden>
                    Select the sizes{" "}
                  </option>
                  {sizes.map((size, i) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                  <option value="All">All</option>
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap w75 align-items-center FormCreateContainerChilds">
                {form.size.length ? (
                  form.size.map((size) => (
                    <div
                      key={size + "div"}
                      style={{
                        order: sizes.findIndex((el) => el === Number(size)),
                      }}
                      className={`d-flex align-items-center FormCreateChildrensSize`}
                    >
                      <label key={size}>{size}</label>
                      <button
                        onClick={(size) => deleteSize(size)}
                        key={size + "btn"}
                        value={size}
                        className={"FormCreateChildrensSizeButton"}
                      >
                        x
                      </button>
                    </div>
                  ))
                ) : (
                  <label className="d-flex justify-content-center w-100 fs-6 text-muted">
                    {error.size}
                  </label>
                )}
              </div>
            </Form.Group>

            <Form.Group className="d-flex w-100 flex-wrap align-items-center">
              <div className="FormCreateInputColors">
                <Form.Label className="d-flex">Colors:</Form.Label>
                <Form.Select
                  className="d-flex FormCreateInputColors"
                  defaultValue={"none"}
                  onChange={(e) => handleColor(e)}
                >
                  <option value="none" hidden>
                    Select the Colors
                  </option>
                  {colors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                  <option value="All">All</option>
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap w100 align-items-center FormCreateContainerChilds">
                {form.color.length ? (
                  form.color.map((color) => (
                    <div
                      key={color + "div"}
                      className={`d-flex align-items-center FormCreateChildrensSize FormCreateChildrensSize${color} `}
                    >
                      <label key={color}>{color}</label>
                      <button
                        onClick={(color) => deleteColor(color)}
                        key={color + "btn"}
                        value={color}
                        className={"FormCreateChildrensSizeButton"}
                      >
                        x
                      </button>
                    </div>
                  ))
                ) : (
                  <label className="d-flex justify-content-center w-100 fs-6 text-muted">
                    {error.color}
                  </label>
                )}
              </div>
            </Form.Group>
            <div className="d-flex justify-content-evenly">
              <Form.Group className="d-flex flex-column justify-content-center">
                <Form.Label className="d-flex">Available Stock:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="95"
                  className="d-flex FormCreateInputStock"
                  onChange={(e) => handleStock(e)}
                  value={form.stock}
                />
                <label className="FormCreateError">{error.stock}</label>
              </Form.Group>
              <Form.Group className="d-flex flex-column justify-content-center">
                <Form.Label className="d-flex">Release Date:</Form.Label>
                <Form.Control
                  type="date"
                  className="d-flex FormCreateInputReleased "
                  onChange={(e) => handleRelease(e)}
                  value={form.release}
                />
                <label className="FormCreateError">{error.release}</label>
              </Form.Group>
            </div>
          </div>
          <div className=" containerFormCreateImgs align-items-center justify-content-center d-flex h-100 w-100 ">
            <Form.Group className="d-flex flex-column justify-content-center align-items-center w-100">
              {controller.radio === true ? (
                form.img.length>=1?
                  <Carousel
                    variant="dark"
                    activeIndex={index}
                    onSelect={handleSelect}
                    className="d-flex w-100 FormCreateCarousel"
                  >
                  {form.img?.length>=1 && form.img.map((img,i)=>
                      <Carousel.Item key={i}>
                        <img
                          className="d-flex w-100 containerFormCreateImgs"
                          src={img}
                          alt="First slide"
                        />
                      </Carousel.Item>
                  
                  )}
                  </Carousel>
                
                  :
                <img
                  src="https://static.thenounproject.com/png/559530-200.png"
                  alt={"Slide"}
                  />
              ) : 
              <></>
              // (
              //   <Carousel
              //     variant="dark"
              //     activeIndex={index}
              //     onSelect={handleSelect}
              //     className="d-flex FormCreateCarousel"
              //   >
              //     {form.img.map((img) => (
              //       <Carousel.Item>
              //         <img
              //           className="d-block w-100"
              //           src={img}
              //           alt="First slide"
              //         />
              //       </Carousel.Item>
              //     ))}
              //   </Carousel>
              // )
            }
              <ButtonGroup>
                <ToggleButton
                  key={1}
                  type="radio"
                  variant={"outline-success"}
                  value={controller.radio}
                  onClick={() => setController({ ...controller, controller: true })}
                  checked={controller.radio === true}
                >
                  {"Image Adress"}
                </ToggleButton>

                <ToggleButton
                  key={2}
                  type="radio"
                  variant={"outline-danger"}
                  value={controller.radio}
                  onClick={() => setController({ ...controller, radio: false })}
                  checked={controller.radio === false}
                >
                  {"Search Files"}
                </ToggleButton>
              </ButtonGroup>

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
                    onClick={() => handleImgForm()}
                  >
                    Upload
                  </Button>
                </FormGroup>
              ) : (
                <Form.Group className="mt-3 d-flex flex-column">
                  <Form.Label>Sin funcionalidad hasta que esté vinculado con cloudinary</Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
              )}
            </Form.Group>
          </div>
          <div className="d-flex formCreateButtonSubmitDiv">
                <Button className="d-flex formCreateButtonSubmit" type="sumbit">Enviar</Button>
          </div>
        </Form>
      </div>
    </div>
  ) : (
    <div>
      <p>Acceso denegado</p>
    </div>
  );
};

export default Create;
