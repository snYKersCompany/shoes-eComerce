import React, { useState } from "react";
import { VscEdit } from "react-icons/vsc";
import "../../../../styles/viewEditProduct.css";
import { app } from "../../../../utils/firebase/credentials";
import { useDispatch } from "react-redux";
import { putProduct } from "../../../../redux/features/products/productsActions";


const ViewEditProduct = ({ productDetail, viewStock }) => {
  const dispatch = useDispatch()


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
  
  
  //form tiene esta estructura:
  const [form, setform] = useState({
    brand: productDetail.brand,
    name: productDetail.name,
    description: productDetail.description,
    gender: productDetail.gender,
    category: productDetail.category,
    color: productDetail.color,
    collection: productDetail.collection,
    release_date: productDetail.release_date,
    rating: productDetail.rating,
    price: productDetail.price,
    img: productDetail.detail_picture,
    stock: productDetail.stock
  })
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
          brand: "Must be between 3 and 50 characters in length",
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
          name: "Must be between 3 and 50 characters in length",
        });
      }
    };

  let handleDescription = (e) =>  {
    if (
      e.target.value[e.target.value.length - 2] === " " &&
      e.target.value[e.target.value.length - 1] === " "
    ) {
      return setform({ ...form }); //sin doble espacios
    }
    setform({ ...form, description: e.target.value });
    controller.name.test(e.target.value) === false &&
    controller.name.test(e.target.value) === false
      ? setError({ ...error, description: false })
      : setError({ ...error, description: "Invalid character" });
    if (e.target.value.length < 30 || e.target.value.length > 1020) {
      setError({
        ...error,
        description: "Must be between 30 and 1020 characters in length",
      });
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

  let handleImgForm = (e) => {
    setform({ ...form, img: e.target.value });
  };

  let handleCategory = (e) => {
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
    if (e.target.value.length < 3 || e.target.value.length > 80) {
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

  let handleStock = (e, el) => {
    el = Number(el)
    if (el === 3.5) {
      setform({
        ...form,
        stock: { ...form.stock, 3.5: Number(e.target.value) },
      });
    }
    if (el === 4) {
      setform({
        ...form,
        stock: { ...form.stock, 4: Number(e.target.value) },
      });
    }
    if (el === 4.5) {
      setform({
        ...form,
        stock: { ...form.stock, 4.5: Number(e.target.value) },
      });
    }

    if (el === 5) {
      setform({
        ...form,
        stock: { ...form.stock, 5: Number(e.target.value) },
      });
    }

    if (el === 5.5) {
      setform({
        ...form,
        stock: { ...form.stock, 5.5: Number(e.target.value) },
      });
    }
    
    if (el === 6) {
      setform({
        ...form,
        stock: { ...form.stock, 6: Number(e.target.value) },
      });
    }

    if (el === 6.5) {
      setform({
        ...form,
        stock: { ...form.stock, 6.5: Number(e.target.value) },
      });
    }

    if (el === 7) {
      setform({
        ...form,
        stock: { ...form.stock, 7: Number(e.target.value) },
      });
    }

    if (el === 7.5) {
      setform({
        ...form,
        stock: { ...form.stock, 7.5: Number(e.target.value) },
      });
    }

    if (el === 8) {
      setform({
        ...form,
        stock: { ...form.stock, 8: Number(e.target.value) },
      });
    }

    if (el === 8.5) {
      setform({
        ...form,
        stock: { ...form.stock, 8.5: Number(e.target.value) },
      });
    }

    if (el === 9) {
      setform({
        ...form,
        stock: { ...form.stock, 9: Number(e.target.value) },
      });
    }

    if (el === 9.5) {
      setform({
        ...form,
        stock: { ...form.stock, 9.5: Number(e.target.value) },
      });
    }

    if (el === 10) {
      setform({
        ...form,
        stock: { ...form.stock, 10: Number(e.target.value) },
      });
    }

    if (el === 10.5) {
      setform({
        ...form,
        stock: { ...form.stock, 10.5: Number(e.target.value) },
      });
    }

    if (el === 11) {
      setform({
        ...form,
        stock: { ...form.stock,11: Number(e.target.value) },
      });
    }
    if (el === 11.5) {
      setform({
        ...form,
        stock: { ...form.stock, 11.5: Number(e.target.value) },
      });
    }

    if (el === 12) {
      setform({
        ...form,
        stock: { ...form.stock, 12: Number(e.target.value) },
      });
    }

    if (el === 12.5) {
      setform({
        ...form,
        stock: { ...form.stock, 12.5: Number(e.target.value) },
      });
    }
    
    if (el === 13) {
      setform({
        ...form,
        stock: { ...form.stock, 13: Number(e.target.value) },
      });
    }

    if (el === 13.5) {
      setform({
        ...form,
        stock: { ...form.stock, 13.5: Number(e.target.value) },
      });
    }

    if (el === 14) {
      setform({
        ...form,
        stock: { ...form.stock, 14: Number(e.target.value) },
      });
    }

    if (el === 14.5) {
      setform({
        ...form,
        stock: { ...form.stock, 14.5: Number(e.target.value) },
      });
    }

    if (el === 15) {
      setform({
        ...form,
        stock: { ...form.stock, 15: Number(e.target.value) },
      });
    }

    if (el === 15.5) {
      setform({
        ...form,
        stock: { ...form.stock, 15.5: Number(e.target.value) },
      });
    }

    if (el === 16) {
      setform({
        ...form,
        stock: { ...form.stock, 16: Number(e.target.value) },
      });
    }

    if (el === 16.5) {
      setform({
        ...form,
        stock: { ...form.stock, 16.5: Number(e.target.value) },
      });
    }

    if (el === 17) {
      setform({
        ...form,
        stock: { ...form.stock, 17: Number(e.target.value) },
      });
    }
    if (el === 17.5) {
      setform({
        ...form,
        stock: { ...form.stock, 17.5: Number(e.target.value) },
      });
    }

    if (el === 18) {
      setform({
        ...form,
        stock: { ...form.stock, 18: Number(e.target.value) },
      });
    }
    
    Object.entries(form.stock).map(el => el[1]).filter(el=>el<0).length>0 || Number(e.target.value) < 0?
    setError({...error, stock: "stock cannot be less than 0"}):
    setError({...error, stock: false})
    
  };

  let handleUpdate = () =>{
    dispatch(putProduct(productDetail._id,form))
  }


  return (
    <div className="viewEditContainer d-flex text-green">
      
      <form className="viewEdit d-flex " onSubmit={(e) => e.preventDefault()}>
        <section className="left d-flex flex-column align-items-center justify-content-center">
          {Object.values(error).filter(el => el !== false).length>0?
          <button className="d-flex mb-5 p-1" disabled>save</button>
         :
          <button className="d-flex mb-5 p-1" onClick={() => handleUpdate(form) }>save</button>
        }
         
          <img
            className="imageCard1"
            src={form.img}
            alt={form.name}
          />
          <img
            className="imageCard2"
            src={form.img}
            alt={form.name}
          />

          {edit!== "img" ?
          <fieldset className="d-flex flex-column mb-3">
            <label >
              Image
            </label>

          <label className="VEPlabelAux">
            {form.img.substr(0,27)+"..."} 
            <button className="input2 ms-1" onClick={(e) => handleEdit(e,"img",false)}>
              <VscEdit className="input3" />
            </button>
          </label>
        </fieldset>
          :
          <fieldset className="d-flex flex-column mb-3">
            Image
            <label>
              <input
                className="input"
                type="text"
                name="image"
                placeholder="Insert URL from your image"
                value={form.img}
                onChange={(e) => handleImgForm(e)}
                />
              <button className="input2 ms-1" onClick={(e) => handleEdit(e,"",false)}>
                <VscEdit className="input3" />
              </button>
            </label>
          </fieldset>
          }
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
              <label>{error.price}</label>
            </fieldset>
            } 
          </section>
        ) : (
          <section className="VEPStock d-flex flex-wrap">
             {form.stock ? (
              Object.entries(form.stock).map((r) =>
                  <div className="d-flex containerInputVEP" style={{"order": r[0]*2}} key={r[0]}>
                  <fieldset
                    key={r[0]}                    
                    className="d-flex"
                    > 
                     
                      Size {r[0]}:
                      {
                        control !== r[0]?
                      <label>
                          <label className={"ms-2 "} style={{"color": "white"}}>
                          {r[1]}
                          </label>
                          <button className="ms-1 input2" onClick={(e) => handleEdit(e, r[0])}>
                            <VscEdit className="input3" />
                          </button>
                        </label>
                        :
                        <label>
                          <input
                          type="number"
                          name="ranges"
                          value={r[1]}
                          onChange = {(e)=> handleStock(e,r[0])}
                          className="input ms-3 inputVEP"
                          />
                          <button className="ms-1 input2"  onClick={(e) => handleEdit(e, "")}>
                            <VscEdit className="input3" />
                          </button>
                        </label>
                      }

                  </fieldset>
                  </div>
              )
              ) : (
                <></>
                )}
                <label style={{"order": 37}}>{error.stock}</label>
          </section>
        )}
      </form>
    </div>
  );
};

export default ViewEditProduct;
