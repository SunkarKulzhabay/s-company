// import React, { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";

// const Contacts = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Отправка...");

//     try {
//       const response = await fetch("http://localhost:5000/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setStatus("Сообщение отправлено!");
//         setFormData({ email: "", message: "" }); // Очистка формы
//       } else {
//         setStatus("Ошибка: " + result.error);
//       }
//     } catch (error) {
//       setStatus("Ошибка при отправке");
//     }
//   };

//   return (
//     <Container style={{ width: "700px", height: "400px" }}>
//       <Row className="w-100">
//         <Col md={10} lg={8} className="w-100">
//           {/* <h1 className="text-center mb-4">Контакты</h1> */}
//           <Form onSubmit={handleSubmit} className="p-5 border rounded shadow w-100">
//             <Form.Group className="mb-4" controlId="formEmail">
//               <Form.Label className="fs-5">Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Введите ваш email"
//                 required
//                 className="p-3 fs-5"
//               />
//             </Form.Group>

//             <Form.Group className="mb-4" controlId="formMessage">
//               <Form.Label className="fs-5">Сообщение</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={4}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Введите ваше сообщение"
//                 required
//                 className="p-3 fs-5"
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100 p-3 fs-5" style={{backgroundColor: "#E2725B",color: "white",border: "none"  }}>
//               Отправить
//             </Button>

//             {status && <p className="text-center mt-3">{status}</p>}
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Contacts;
