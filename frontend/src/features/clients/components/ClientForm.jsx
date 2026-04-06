import { useState } from "react";

const Client_form = () => {
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
        }),
      });
      const data = await response.json();
      return data
      
    } catch (error) {
      setError(error);
    }
  };

  return (
    <section className="client-form">
      <h2>Add client testing</h2>
      {error ? (
        "Error: reload the page"
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>
          </div>
          <button type="submit">Add Client</button>
        </form>
      )}
    </section>
  );
};

export default Client_form;
