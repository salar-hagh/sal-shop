import React from "react";
import Container from "../../components/container/Container";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <h1>title</h1>

      <div>
        <h2>asasa </h2>

        <img src="" alt="" />
      </div>

      <Container>
        <img
          className="w-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREXlEhCM6HC-rIalmhuCc5BSgDw_UYekfl3tvNICmnRH7JKAP_l9d3vPsNoGGw0iy8ub4&usqp=CAU"
          alt=""
        />
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
