import React, { useRef, useState } from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import { HeroCard } from "./HeroCard";

export const Search = ({ heroTeam, setHeroTeam }) => {
  const [serverError, setServerError] = useState(null);
  const [search, setSearch] = useState([]);

  const debounceRef = useRef(null);

  const onQueryChange = (e) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `https://superheroapi.com/api.php/380601706991561/search/${e.target.value}`,
          // data: {
          //   search: e.target.value,
          // },
        });
        setSearch(response.data.results);
      } catch (error) {
        setServerError("No such hero with that name");
      }
    }, 300);
  };

  // const handleSubmit = async (value) => {
  //   try {
  //     const response = await axios({
  //       method: "GET",
  //       url: `https://superheroapi.com/api.php/380601706991561/search/${value.search}`,
  //       data: {
  //         search: value.search,
  //       },
  //     });
  //     setSearch(response.data.results);
  //   } catch (error) {
  //     setServerError("No such hero with that name");
  //   }
  // };

  return (
    <div className="mx-2 my-5">
      <div>
        <div className="row">
          <div>
            <h4>Search:</h4>
            <hr />
            <Formik
              // onSubmit={handleSubmit}
              validate={(value) => {
                const errors = {};
                if (!value.search) {
                  errors.search = "Required";
                }
                return errors;
              }}
              initialValues={{
                search: "",
              }}
            >
              {({ errors, isValid, touched }) => (
                <Form>
                  <div className="d-flex align-items-center">
                    <input
                      type="search"
                      className="form-control my-1"
                      name="search"
                      placeholder="Search a hero by name"
                      autoComplete="off"
                      onChange={onQueryChange}
                    />
                    {errors.search && touched.search ? (
                      <div className="text-danger">{errors.search}</div>
                    ) : null}
                    {/* <button
                      type="submit"
                      className="btn btn-primary my-1"
                      disabled={!isValid}
                    >
                      Search
                    </button> */}
                  </div>
                  {serverError ? (
                    <div className="text-danger">{serverError}</div>
                  ) : null}
                </Form>
              )}
            </Formik>
            <div
              className="d-flex justify-content-center flex-wrap m-3"
              style={{ maxWidth: "53vw" }}
            >
              {search ? (
                search.map((hero) => (
                  <HeroCard
                    className="card m-3"
                    key={hero.id}
                    hero={hero}
                    setHeroTeam={setHeroTeam}
                    heroTeam={heroTeam}
                  />
                ))
              ) : (
                <p className="text-danger">
                  No results. Please enter a valid name
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
