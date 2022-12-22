import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import "../../../../styles/viewEditProduct.css";

const ViewEditProduct = ({ productDetail, setStock, viewStock }) => {
  
  //Muestra stock o no
  let [control, setControl] = useState(-1) 



  //Deshabilita o habilita la edición de un campo
  const handleEdit = (e, child, state) => {
    e.preventDefault()
    console.log(child)
    switch (child) {
      case "category":
        state?
        setform({...form, categories: ""})
        :
        setform({...form, categories: productDetail.categories})
      


      default:
        break;
    }

    setControl(child)
  }
  
  
  
  const [form, setform] = useState(productDetail)
  //form tiene esta estructura:
  //          ↆ
  //
  // const [form, setform] = useState({
  //   name: "", //string
  //   description: "", //string
  //   brand: "", //string
  //   price: "", //Number
  //   categories: "", //Array(String)
  //   size: "", //Array(String)  ---> no incluido en el form de manera directa
  //   color: "", // String
  //   gender: "", //String
  //   stock: "", // Object = {size: stock}  --> acá se introduce las tallas disponibles y el stock de cada una
  //   release: "", // Date
  //   img: "", //String
  // });


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

  //eslint-disable-next-line
  const [controller, setController] = useState({
    general: false, // cambia la pantalla cuando hace el dispatch para no agregar varias veces el mismo artículo
    //eslint-disable-next-line
    name: /[{}<>=@\/\\]/g,
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
        : setError({ ...error, name: "Invalid character" });
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

    if (e.target.value.length < 30 || e.target.value.length > 1020) {
      setError({
        ...error,
        description: "Must be between 30 and 1000 characters in length",
      });
    }
    else{
      setError({
        ...error,
        description: false
      })
    }
  };

  let handleGender = (e) => {
    e.target.value === "none"
      ? setError({ ...error, gender: "choose a gender" })
      : setError({ ...error, gender: false });
    setform({ ...form, gender: [e.target.value] });
  };

  // let handleCategory = (value) => {
  //   let a = form.categories;
  //   a.length >= 1 ? (a = a.filter((el) => el === value)) : (a = []);
  //   a.length < 1
  //     ? setform({ ...form, categories: [...form.categories, value] })
  //     : setform({
  //         ...form,
  //         categories: form.categories.filter((el) => el !== value),
  //       });
  //   form.categories.length === 1 && value === form.categories[0]
  //     ? setError({ ...error, categories: "Select almost 1 category" })
  //     : setError({ ...error, categories: false });
  // };


  



  return (
    <div className="viewEditContainer d-flex text-green">
      
      <form className="viewEdit d-flex ">
        <section className="left d-flex flex-column align-items-center justify-content-center">
          <img
            className="imageCard1"
            src={productDetail.detail_picture}
            alt={productDetail.name}
          />
          <img
            className="imageCard2"
            src={productDetail.detail_picture}
            alt={productDetail.name}
          />
          <fieldset className="d-flex flex-column mb-3">
            Image
            <label>
              <input
                className="input"
                type="text"
                name="image"
                placeholder="https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png"
                value={productDetail.detail_picture}
              />
              <button className="input2 ms-1">
                <VscEdit className="input3" />
              </button>
            </label>
          </fieldset>
        </section>

        {viewStock ? (
          <section className="right d-flex flex-column">
            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Brand
                <label>
                  <input
                    className="input"
                    type="text"
                    name="brand"
                    value={form.brand}
                    onChange={(e) => handleBrand(e)}
                    placeholder="Insert a Brand"
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
                <label>{error.brand}</label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Name
                <label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    onChange={(e) => handleName(e)}
                    value={form.name}
                    placeholder="Insert a name"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
                <label>{error.name}</label>
              </fieldset>
            </div>

            <fieldset className="d-flex flex-column mb-3">
              Description
              <label>
                <input
                  className="input"
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={(e)=>handleDescription(e)}
                  placeholder="This Nike Air Jordan 1 Retro High OG &#39;Shadow&#39; 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015."
                />
                <button className="ms-1 input2">
                  <VscEdit className="input3" />
                </button>
              </label>
              <label>{error.description}</label>
            </fieldset>

            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Gender
                <label>
                  <input
                    className="input"
                    type="text"
                    name="gender"
                    value={form.gender}
                    placeholder="women"
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Category
                {form.categories !== ""?
                <label>
                  <label>{form.categories}</label>
                  <button className="ms-1 input2">
                    <VscEdit className="input3" onClick={(e)=> handleEdit(e, "category", true)} />
                  </button>
                </label>
                :
                <>
                <select></select>
                  <button className="ms-1 input2">
                    <VscEdit className="input3" onClick={(e)=> handleEdit(e, "category", false)} />
                  </button>
                </>
                }
                
              </fieldset>
            </div>

            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Color
                <label>
                  <input
                    className="input"
                    type="text"
                    name="color"
                    value={productDetail.color}
                    placeholder="Red"
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Collection
                <label>
                  <input
                    className="input"
                    type="text"
                    name="colection"
                    value={productDetail.collection}
                    placeholder="retro"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
            </div>

            <div className="d-flex">
              <fieldset className="d-flex flex-column mb-3">
                Release Date
                <label>
                  <input
                    className="input"
                    type="date"
                    name="release_date"
                    value={productDetail.release_date}
                  />
                  <button className="ms-1 me-3 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>

              <fieldset className="d-flex flex-column mb-3">
                Rating
                <label>
                  <input
                    className="input"
                    type="number"
                    name="rating"
                    value={productDetail.rating}
                    placeholder="3"
                  />
                  <button className="ms-1 input2">
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
            </div>


            <fieldset className="d-flex flex-column mb-3">
              Price
              <label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={productDetail.price}
                  placeholder="150"
                />
                <button className="ms-1 input2">
                  <VscEdit className="input3" />
                </button>
              </label>
            </fieldset>
          </section>
        ) : (
          <section className="VEPStock d-flex flex-wrap">
             {productDetail.stock ? (
              Object.entries(productDetail.stock).map((r) =>
                  <div className="d-flex containerInputVEP" style={{"order": r[0]*2}}>

                  <fieldset
                    key={r[0]}
                    value={r[0]}
                    
                    className="d-flex"
                    > 
                      Size {r[0]}:
                     
                      {
                        control !== r[0]?
                        <label>
                          <label className={"ms-2"} style={{"color": "white"}}>
                          {r[1]}
                          </label>
                          <button className="ms-1 input2">
                            <VscEdit className="input3" onClick={(e) => handleEdit(e, r[0])}/>
                          </button>
                        </label>
                        :
                        <label>
                          <input
                          type="number"
                          name="ranges"
                          value={r[1]}
                          className="input ms-3 inputVEP"
                          />
                          <button className="ms-1 input2">
                            <VscEdit className="input3" onClick={(e) => handleEdit(e, -1)}/>
                          </button>
                        </label>
                      }


                  </fieldset>
                  </div>
              )
            ) : (
              <></>
            )}
          </section>
        )}
      </form>
    </div>
  );
};

export default ViewEditProduct;
