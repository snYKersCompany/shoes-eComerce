import React from "react";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./Create.css";

const Create = () => {
  const [error, setError] = useState({
    name: " ",
    description: " ",
    brand: " ",
    size: " ",
  });

  const [form, setform] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    size: "",
    stock: "",
  });

  //carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //validations
  let handleName = (e) => {
    setform({ ...form, name: e.target.value });
  };

  let handleDescription = (e) => {
    setform({ ...form, description: e.target.value });
  };

  let handleBrand = (e) => {
    setform({ ...form, brand: e.target.value });
  };

  let handlePrice = (e) => {
    setform({ ...form, price: e.target.value });
  };

  let handleSize = (e) => {
    let a = form.size
      ? form.size.filter((size) => size === e.target.value)
      : null;
    console.log(a);
    a === null || a.length < 1
      ? setform({ ...form, size: [...form.size, e.target.value] })
      : setform(form);
  };

  let handleStock = (e) => {
    setform({ ...form, stock: e.target.value });
  };

  let deleteSize = (e) => {
    let filtered = form.size.filter((size) => size !== e.target.value);
    setform({ ...form, size: filtered });
  };

  const user = { admin: true };
  const sizes = [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5];
  const colors = ['Yellow', 'Blue', 'Red', 'White', 'Gray', 'Pink', 'Black', 9.5, 10, 10.5];
  console.log(form);

  return user.admin === true ? (
    <div className="containerGeneralFormCreate">
      <div className="d-flex containerFormCreate">
        <Form className="d-flex flex-wrap w-100 FormCreateContainerResponsive" >
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
              {error.name === false ? (
                <label>{error.name}</label>
              ) : (
                <label>{error.name}</label>
              )}
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
              {error.name === false ? (
                <label>{error.description}</label>
              ) : (
                <label>{error.description}</label>
              )}
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
                {error.name === false ? (
                  <label>{error.brand}</label>
                ) : (
                  <label>{error.brand}</label>
                )}
              </Form.Group>

              <Form.Group className="d-flex mb-3 flex-column justify-content-start">
                <Form.Label className="d-flex">Price:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="$65.00"
                  className="d-flex"
                  onChange={(e) => handlePrice(e)}
                  value={form.price}
                />
                {error.name === false ? (
                  <label>{error.brand}</label>
                ) : (
                  <label>{error.brand}</label>
                )}
              </Form.Group>
            </div>

            <Form.Group className="d-flex w-100 flex-wrap ">
              <div className="FormCreateInputSize">
                <Form.Label className="d-flex">Sizes:</Form.Label>
                <Form.Select
                  className="d-flex FormCreateInputSize"
                  defaultValue={"none"}
                  onChange={(e) => handleSize(e)}
                >
                  <option value="none" hidden>
                    Select the sizes{" "}
                  </option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap w75 align-items-center ">
                {form.size !== ""
                  ? form.size.map((size) => (
                      <div
                        key={size + "div"}
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
                  : null}
              </div>
            </Form.Group>
            {error.name === " " ? (
              <label className="d-flex FormCreateInputHidden">{" asdas"}</label>
            ) : (
              <label className="d-flex"> </label>
            )}

            <Form.Group className="d-flex ">
              <div className="FormCreateInputColors">
                <Form.Label className="d-flex">Colors:</Form.Label>
                <Form.Select
                  className="d-flex FormCreateInputColors"
                  defaultValue={"none"}
                  onChange={(e) => handleSize(e)}
                >
                  <option value="none" hidden>
                    Select the Colors 
                  </option>
                  {sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap w100 align-items-center">
                {/* {form.size !== ""
                  ? form.size.map((size) => (
                      <div
                        key={size + "div"}
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
                  : null} */}
              </div>
            </Form.Group>
            {error.name === " " ? (
              <label className="d-flex FormCreateInputHidden">{" asdas"}</label>
            ) : (
              <label className="d-flex"> </label>
            )}

            <Form.Group className="d-flex flex-column">
              <Form.Label className="d-flex">Available Stock:</Form.Label>
              <Form.Control
                type="number"
                placeholder="95"
                className="d-flex FormCreateInputStock"
                onChange={(e) => handleStock(e)}
                value={form.stock}
              />
              {error.name === false ? (
                <label>{error.brand}</label>
              ) : (
                <label>{error.brand}</label>
              )}
            </Form.Group>
          </div>
          <div className=" containerFormCreateImgs justify-content-center ">
            <Form.Group className="d-flex flex-column justify-content-center align-items-center">
              <Carousel
                variant="dark"
                activeIndex={index}
                onSelect={handleSelect}
                className="d-flex FormCreateCarousel"
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-zapatillas-d8ZCkw.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2016a636-2953-41b4-b496-55263f2b26bc/calzado-air-jordan-1-mid-M2KS6n.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8000d03c-803b-463c-a9a5-16a2f5b55688/dunk-high-85-mens-shoes-cwp8t2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>

              <Form.Group
                controlId="formFileMultiple"
                className="mt-3 d-flex flex-column"
              >
                <Form.Label>Upload images of your product</Form.Label>
                <Form.Control type="file" multiple  />
              </Form.Group>
            </Form.Group>
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
