import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import "../../../../styles/viewEditProduct.css";


const ViewEditProduct = ({ productDetail, setStock, viewStock }) => {
  
  //Muestra stock o no
  let [control, setControl] = useState(-1) 
  let [edit, setEdit] = useState("")

  //reemplazar hardcodeo en create y update con rutas y redux
  const categories = ["lifestyle","basketball","skateboarding","running","other"]


  //Deshabilita o habilita la edición de un campo
  const handleEdit = (e, child, state) => {
    e.preventDefault()
    setEdit(child) // con esto se habilita la edición de un solo componente
    setControl(child)//cambia de ventana entre stock y datos normales
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

  console.log(form)

  const [error, setError] = useState({
    name: false,
    description: false,
    brand: false,
    price: false,
    color: false,
    gender: false,
    category: false,
    stock: false,
    release: false,
    img: false,
  });
  console.log(error)

  //eslint-disable-next-line
  const [controller, setController] = useState({
    general: false, // cambia la pantalla cuando hace el dispatch para no agregar varias veces el mismo artículo
    //eslint-disable-next-line
    name: /[{}<>=@\/\\]/g,
    //eslint-disable-next-line
    brand: /[{}<>=@\/\\]/g,
    price: /^\d*((,||\.)\d)+$/g,
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
      if (e.target.value.length < 3 || e.target.value.length > 50) {
        setError({
          ...error,
          brand: "Must be between 2 and 50 characters in length",
        });
      }
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
    setEdit("")
  };

  let handleRelease = (e) => {
    controller.release(e.target.value)
      ? setError({ ...error, release: false })
      : setError({
          ...error,
          release: "Invalid Date",
        });
    setform({ ...form, release_date: e.target.value });
  };
  const [auxImg, setAuxImg] = useState();

  let handleImg = (e) => {
    setform({...form, detail_picture:e.target.value});
  };

  let handleImgForm = () => {
    setform({ ...form, img: auxImg });
    auxImg.length > 1
      ? setError({ ...error, img: false })
      : setError({ ...error, img: "Upload a image" });
  };

  let handleCategory = (e) => {
    console.log(e.target.value)
   e.target.value === "none"
      ? setError({ ...error, category: "choose a gender" })
      : setError({ ...error, category: false });
    setform({ ...form, category: [e.target.value] });
    setEdit("")
  };

  let handleColor = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, color: e.target.value });
    controller.name.test(e.target.value) === false &&
    controller.name.test(e.target.value) === false
      ? setError({ ...error, color: false })
      : setError({ ...error, color: "Invalid character" });
    if (e.target.value.length < 3 || e.target.value.length > 60) {
      setError({
        ...error,
        color: "Must be between 3 and 60 characters in length",
      });
    }
  };

  let handleCollection = (e) => {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, collection: e.target.value });
    controller.name.test(e.target.value) === false &&
    controller.name.test(e.target.value) === false
      ? setError({ ...error, collection: false })
      : setError({ ...error, collection: "Invalid character" });
    if (e.target.value.length < 2 || e.target.value.length > 80) {
      setError({
        ...error,
        collection: "Must be between 3 and 80 characters in length",
      });
    }
  };

  let handlePrice = (e) => {
    setform({ ...form, price: Number(e.target.value) });
    controller.price.test(e.target.value) === true &&
    controller.price.test(e.target.value) === false
      ? setError({ ...error, price: false })
      : setError({ ...error, price: "Invalid response" });
  };

  



  return (
    <div className="viewEditContainer d-flex text-green">
      
      <form className="viewEdit d-flex " onSubmit={(e) => e.preventDefault()}>
        <section className="left d-flex flex-column align-items-center justify-content-center">
          <img
            className="imageCard1"
            src={form.detail_picture}
            alt={form.name}
          />
          <img
            className="imageCard2"
            src={form.detail_picture}
            alt={form.name}
          />
          <fieldset className="d-flex flex-column mb-3">
            Image
            <label>
              <input
                className="input"
                type="text"
                name="image"
                placeholder="Insert URL from your image"
                value={form.detail_picture}
                onChange={(e) => handleImg(e)}
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
              {edit !== "brand"?
              <fieldset className="d-flex flex-column mb-3">
              Brand
              <label className="VEPlabelAux">
                {form.brand}
                <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"brand",true)}>
                  <VscEdit className="input3" />
                </button>
              </label>
              <label>{error.brand}</label>
            </fieldset>
              :
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
                  <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"",false)}>
                    <VscEdit className="input3" />
                  </button>
                </label>
                <label>{error.brand}</label>
              </fieldset>
            }
            {edit !== "name"?
            <fieldset className="d-flex flex-column mb-3">
              Name
              <label className="VEPlabelAux">
                {form.name}
                <button className="ms-1 input2" onClick={(e) => handleEdit(e,"name",true)}>
                  <VscEdit className="input3" />
                </button>
              </label>
              <label>{error.name}</label>
            </fieldset>
            :  
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
                  <button className="ms-1 input2" onClick={(e) => handleEdit(e,"",false)}>
                    <VscEdit className="input3" />
                  </button>
                </label>
                <label>{error.name}</label>
              </fieldset>
          }
            </div>
          {edit !== "description"?
          <fieldset className="d-flex flex-column mb-3">
          Description
          <label className="d-flex VEPlabelAux">
            <div className="descriptionVEP w-75">
              {form.description}
            </div>
            <button className="ms-1 input2" onClick={(e) => handleEdit(e,"description", false)}>
              <VscEdit className="input3" />
            </button>
          </label>
          <label>{error.description}</label>
        </fieldset>
          :
          <fieldset className="d-flex flex-column mb-3">
              Description
              <label>
                <textarea
                  className="input w-75"
                  name="description"
                  value={form.description}
                  onChange={(e)=>handleDescription(e)}
                  placeholder="Insert a description"
                  />
                <button className="ms-1 input2" onClick={(e) => handleEdit(e,"", false)}>
                  <VscEdit className="input3" />
                </button>
              </label>
              <label>{error.description}</label>
            </fieldset>
          }

            <div className="d-flex">
              {edit !== "gender"?
              <fieldset className="d-flex flex-column mb-3">
              Gender
              <label className="VEPlabelAux">
                {form.gender}
                <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"gender", false)}>
                  <VscEdit className="input3"  />
                </button>
              </label>
              
            </fieldset>
              :
              <fieldset className="d-flex flex-column mb-3">
                Gender
                <label>
                  <select onChange={(e)=> handleGender(e)} defaultValue={"none"}>
                    <option value="none" hidden>Choose a gender</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="unisex">Unisex</option>
                  </select>
                  <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"", false)}>
                    <VscEdit className="input3"  />
                  </button>
                </label>
              </fieldset>
              }

                {edit !== "category"?
                  <fieldset className="d-flex flex-column mb-3">
                    Category
                    <label className="VEPlabelAux">
                      {form.category}
                      <button className="ms-1 input2" onClick={(e)=> handleEdit(e, "category", true)}>
                        <VscEdit className="input3" />
                      </button>
                    </label>
                  </fieldset>
                :
                  <fieldset className="d-flex flex-column mb-3">
                  Category
                  <label>
                    <select onChange={(e)=> handleCategory(e)} defaultValue={"none"}>
                      <option value="none" hidden>Choose a Category</option>
                      {categories.map((category,i) =>{
                        return <option value={category} key={i}>{category}</option>
                      })}
                    </select>
                    <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"", false)}>
                      <VscEdit className="input3"  />
                    </button>
                  </label>
                </fieldset>
                }
                
            </div>

            <div className="d-flex">
              {edit !== "color"?
              <fieldset className="d-flex flex-column mb-3">
              Color
              <label className="VEPlabelAux">
                {form.color}
                <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"color",true)}>
                  <VscEdit className="input3" />
                </button>
              </label>
              <label>{error.color}</label>
            </fieldset>
              :
              <fieldset className="d-flex flex-column mb-3">
                Color
                <label className="d-flex">
                  <input
                    className="input"
                    type="text"
                    name="color"
                    value={form.color}
                    onChange={(e) => handleColor(e)}
                    placeholder="Insert a color"
                    />
                  <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"",false)}>
                    <VscEdit className="input3" />
                  </button>
                </label>
                <label>{error.color}</label>
              </fieldset>
            }

              {edit !== "collection" ?
              <fieldset className="d-flex flex-column mb-3">
              Collection
              <label className="VEPlabelAux">
                {form.collection}
                <button className="ms-1 input2" onClick={(e) => handleEdit(e,"collection",false)}>
                  <VscEdit className="input3" />
                </button>
              </label>
              <label>{error.collection}</label>
            </fieldset>
            :  
              <fieldset className="d-flex flex-column mb-3">
                Collection
                <label className="d-flex">
                  <input
                    className="input"
                    type="text"
                    name="colection"
                    onChange={(e) => handleCollection(e)}
                    value={form.collection}
                    placeholder="Insert a Collection"
                    />
                  <button className="ms-1 input2" onClick={(e) => handleEdit(e,"",false)}>
                    <VscEdit className="input3" />
                  </button>
                </label>
                <label>{error.collection}</label>
              </fieldset>
                  }
            </div>

            <div className="d-flex">
              {edit !== "date"?
              <fieldset className="d-flex flex-column mb-3">
              Release Date
              <label className="VEPlabelAux">
                {form.release_date}
                <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"date",true)}>
                  <VscEdit className="input3" />
                </button>
              </label>
            </fieldset>
              :
              <fieldset className="d-flex flex-column mb-3">
                Release Date
                <label>
                  <input
                    className="input"
                    type="date"
                    name="release_date"
                    placeholder="Insert a date"
                    onChange={(e) => handleRelease(e)}
                    value={form.release_date}
                    />
                  <button className="ms-1 me-3 input2" onClick={(e) => handleEdit(e,"",false)}>
                    <VscEdit className="input3" />
                  </button>
                </label>
              </fieldset>
              }

              <fieldset className="d-flex flex-column mb-3">
                Rating
                <label className="VEPlabelAux">
                  {form.rating}
                </label>
              </fieldset>
            </div>

            {edit !== "price"?
            <fieldset className="d-flex flex-column mb-3">
            Price
            <label className="VEPlabelAux">
              {form.price}
              <button className="ms-1 input2" onClick={(e)=> handleEdit(e,"price", true)}>
                <VscEdit className="input3" />
              </button>
            </label>
          </fieldset>
            :
            <fieldset className="d-flex flex-column mb-3">
              Price
              <label>
                <input
                  className="input"
                  type="number"
                  name="price"
                  value={form.price}
                  onChange = {(e) => handlePrice(e)}
                  placeholder="Insert a price"
                  />
                <button className="ms-1 input2" onClick={(e)=> handleEdit(e,"", false)}>
                  <VscEdit className="input3" />
                </button>
              </label>
            </fieldset>
            } 
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
