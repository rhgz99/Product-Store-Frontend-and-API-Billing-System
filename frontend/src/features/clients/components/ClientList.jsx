import { useEffect, useState } from "react";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClient = async ()=> {
      try {
        const response = await fetch('http://localhost:5000/api/clients')
        const data = await response.json()
        setClients(data)
      } catch (error) {
        setError(error)
      }
    }
    fetchClient()
  }, []);

  return (
    <section>
      <h2>Client List</h2>
      <select name="client" id="client">
         {error 
      ? 'Error: please reload the page'
      : clients.map(client => (
        <option value={client.id} key={client.id}>{client.name}</option>
      ))
      }
      </select>
     
    </section>
  );
};

export default ClientList;
