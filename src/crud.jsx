import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import firebase from "./components/firebase";

const Crud = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Data, setData] = useState([]);

  useEffect(() => {
    const store = firebase.database().ref("/Userinfo");
    store.on("value", (response) => {
      const data = response.val();
      let temp = [];
      for (let id in data) {
        temp.push({
          id: id,
          dbFName: data[id].dbFName,
          dbLName: data[id].dbLName,
        });
      }
      setData(temp);
      console.log("data in UE", data);
      console.log("temp in UE", temp);
    });
  }, []);

  const handleUser = () => {
    const store = firebase.database().ref("/Userinfo");
    let data = {
      dbFName: firstname,
      dbLName: lastname,
    };
    store.push(data);
  };

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" onClick={handleUser}>
          Submit
        </Button>
      </Form>

      <div>
        {Data.length === 0 ? (
          <h3>No data in database</h3>
        ) : (
          <div>
            {Data.map((data, index) => {
              return (
                <span>
                  {data.dbFName},{data.dbLName}
                  <br />
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Crud;
