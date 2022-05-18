import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

export const UserForm = () => {
  const navigate = useNavigate();
  const { updateUser, user } = useUserContext();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);

  const [isUpdatedUser, setIsUpdatedUser] = useState(false);

  useEffect(() => {
    setIsUpdatedUser(false);
  }, [name, email, phoneNumber]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email, phone: phoneNumber });
    setIsUpdatedUser(true);
  };

  return (
    <div className="User">
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre*</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Juan Perez"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="juan@coder.ho"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Telefono*</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="+52 (55) 5555-5555"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Guardar
        </button>
      </form>
      {isUpdatedUser && <h3>✨ Usuario actualizado ✨</h3>}
    </div>
  );
};
